const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Função de sintese de voz (fala)
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    text_speak.lang = 'pt-BR'; // Configurado para Português

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Bom dia! Como posso ajudar?");
    } else if (hour >= 12 && hour < 18) {
        speak("Boa tarde! Como posso ajudar?");
    } else {
        speak("Boa noite! Como posso ajudar?");
    }
}

// Suporte para navegadores móveis (Chrome / Safari / Edge)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    content.textContent = "Navegador sem suporte a voz.";
    alert("Seu navegador não suporta reconhecimento de voz. Tente usar o Google Chrome no celular.");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR'; // Idioma em português
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        content.textContent = "Ouvindo...";
    };

    recognition.onerror = (event) => {
        content.textContent = "Erro ao ouvir. Tente clicar de novo.";
        console.error("Erro no reconhecimento:", event.error);
    };

    recognition.onresult = (event) => {
        const currentIndex = event.resultIndex;
        const transcript = event.results[currentIndex][0].transcript;
        content.textContent = transcript;
        takeCommand(transcript.toLowerCase());
    };

    btn.addEventListener('click', () => {
        // No primeiro clique, inicializamos a saudação se a voz ainda não falou
        if (!window.hasGreeted) {
            wishMe();
            window.hasGreeted = true;
        }

        try {
            recognition.start();
        } catch (e) {
            console.log("Reconhecimento já estava ativo:", e);
        }
    });
}

function takeCommand(message) {
    if (message.includes('olá') || message.includes('oi') || message.includes('hey')) {
        speak("Olá! Como posso te ajudar hoje?");
    } else if (message.includes("abrir google") || message.includes("abre o google")) {
        window.open("https://google.com", "_blank");
        speak("Abrindo o Google...");
    } else if (message.includes("abrir youtube") || message.includes("abre o youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Abrindo o Youtube...");
    } else if (message.includes("abrir facebook") || message.includes("abre o facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Abrindo o Facebook...");
    } else if (message.includes('o que é') || message.includes('quem é') || message.includes('pesquisar por')) {
        const query = encodeURIComponent(message);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
        speak("Aqui está o que encontrei na internet sobre " + message);
    } else if (message.includes('wikipedia') || message.includes('wikipédia')) {
        const term = message.replace("wikipedia", "").replace("wikipédia", "").trim();
        window.open(`https://pt.wikipedia.org/wiki/${encodeURIComponent(term)}`, "_blank");
        speak("Isso é o que encontrei na Wikipédia sobre " + term);
    } else if (message.includes('hora') || message.includes('horas')) {
        const time = new Date().toLocaleTimeString('pt-BR', { hour: "numeric", minute: "numeric" });
        speak("Agora são " + time);
    } else if (message.includes('data') || message.includes('que dia é hoje')) {
        const date = new Date().toLocaleDateString('pt-BR', { day: "numeric", month: "long" });
        speak("Hoje é dia " + date);
    } else {
        const query = encodeURIComponent(message);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
        speak("Encontrei algumas informações no Google para " + message);
    }
}