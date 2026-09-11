# Clínica da Mari — Landing Page

Landing page estática para a Clínica da Mari (Biomédica Estética), Montes Claros - MG.

## Stack

- HTML5 semântico
- CSS3 puro (Grid, Flexbox, Custom Properties)
- JavaScript vanilla (menu mobile, scroll reveal)
- Google Fonts: Playfair Display + Poppins
- Sem frameworks, sem Node.js, sem build

## Estrutura

```
.
├── index.html
├── vercel.json
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── imagens/
        ├── image_1.png
        ├── image_2.png
        ├── image_3.png
        ├── image_4.png
        └── image_5.png
```

## Como executar localmente

Como é um projeto 100% estático, basta abrir o arquivo `index.html` diretamente no navegador,
ou servir a pasta com qualquer servidor HTTP simples, por exemplo:

```bash
# Python
python -m http.server 8080

# Node (npx, sem instalar nada globalmente)
npx serve .
```

Depois acesse `http://localhost:8080` (ou a porta indicada pelo terminal).

## Deploy

O arquivo `vercel.json` já está configurado para deploy estático (sem build) na Vercel.
O deploy em si (publicação) é feito por outro processo — não execute `npm install`
nem `npm run build` neste projeto.

## Seções da página

1. Header fixo com logo, menu e CTA de WhatsApp
2. Hero com foto real da profissional
3. Serviço — Biomédica Estética
4. Sobre o atendimento (dados do Google Meu Negócio)
5. Diferenciais
6. Depoimentos reais (avaliações do Google)
7. Galeria de antes & depois (fotos reais)
8. CTA final
9. Contato (WhatsApp, telefone, endereço, horários e mapa do Google)
10. Footer + botão flutuante de WhatsApp

Todos os dados (telefone, endereço, horários e depoimentos) vêm do briefing/Google Meu Negócio
fornecido — nenhuma informação foi inventada.
