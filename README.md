# JARVIS - Assistente Virtual

Uma interface web inspirada no conceito de assistente virtual JARVIS, com interação por voz em português. O projeto utiliza a API de reconhecimento de voz do navegador para ouvir comandos, responder com síntese de voz e abrir páginas populares na web.

## Visão geral

Este projeto é uma página estática desenvolvida em HTML, CSS e JavaScript. Ele simula um assistente virtual com:

- reconhecimento de fala em português
- leitura de texto em voz alta
- saudações automáticas conforme o horário
- abertura de páginas como Google, YouTube e Facebook
- busca na web por termos falados
- resposta com hora e data

## Funcionalidades

- Botão de microfone para iniciar a captura de áudio
- `SpeechRecognition` do navegador para transformar fala em texto
- `SpeechSynthesisUtterance` para falar respostas em português
- Comandos prontos para:
  - saudações
  - abrir Google
  - abrir YouTube
  - abrir Facebook
  - pesquisar na internet
  - procurar na Wikipédia
  - informar a hora
  - informar a data

## Estrutura do projeto

```text
Jarvis-AI-main/
├── index.html
├── app.js
├── style.css
├── avatar.png
├── giphy.gif
├── LICENSE
└── README.md
```

## Como executar

### Opção 1: abrir diretamente no navegador

1. Vá até a pasta do projeto
2. Abra o arquivo `index.html` em um navegador moderno

### Opção 2: rodar um servidor local (recomendado)

No terminal, execute:

```bash
python -m http.server 8000
```

Depois abra no navegador:

```text
http://localhost:8000
```

## Compatibilidade

Este projeto depende do suporte do navegador à API de voz. O comportamento ideal é obtido em navegadores Chromium, como:

- Google Chrome
- Microsoft Edge

A API de reconhecimento de voz pode exigir que o site seja acessado em ambiente local ou em conexão segura dependendo do navegador e da configuração do sistema.

## Observações

- O site foi projetado como um protótipo de assistente virtual
- A maioria dos comandos abre páginas externas com `window.open()`
- A resposta por voz usa o idioma `pt-BR`
- O código foi escrito para funcionar como uma demonstração simples e didática

## Licença

Este projeto está licenciado sob a GNU General Public License v3.0. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Projeto inspirado no conceito de JARVIS, adaptado como demonstração web de assistente virtual em JavaScript.
