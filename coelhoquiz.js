const perguntas = [
    {
        pergunta: "O que os coelhinhos estão fazendo no curta Coelhinhos Engraçadinhos?",
        opcoes: ["Decorando ovos de Páscoa", "Fazendo uma festa de aniversário", "Construindo uma casa", "Brincando no campo"],
        respostaCorreta: 0 // Decorando ovos de Páscoa
    },
    {
        pergunta: "Quais cores os coelhinhos usam para decorar os ovos no curta?",
        opcoes: ["Vermelho e azul", "Amarelo, azul, rosa e verde", "Apenas rosa", "Somente branco"],
        respostaCorreta: 1 // Amarelo, azul, rosa e verde
    },
    {
        pergunta: "Além de ovos, o que mais os coelhinhos fazem para a Páscoa no curta?",
        opcoes: ["Fazem brinquedos", "Criam esculturas de chocolate", "Constroem coelheiras", "Plantam cenouras"],
        respostaCorreta: 1 // Criam esculturas de chocolate
    },
    {
        pergunta: "Como os coelhinhos transportam os ovos decorados?",
        opcoes: ["Carregam nas patas", "Usam pequenas carroças e cestas", "Jogam os ovos no ar", "Colocam os ovos em suas tocas"],
        respostaCorreta: 1 // Usam pequenas carroças e cestas
    },
    {
        pergunta: "Quais animais além dos coelhinhos aparecem ajudando na produção de ovos no curta?",
        opcoes: ["Pássaros e esquilos", "Patos e galinhas", "Cachorros e gatos", "Porcos e cavalos"],
        respostaCorreta: 0 // Pássaros e esquilos
    },
    {
        pergunta: "Qual é o tema principal do curta Coelhinhos Engraçadinhos?",
        opcoes: ["O Natal", "A Páscoa", "A colheita", "O Dia dos Namorados"],
        respostaCorreta: 1 // A Páscoa
    },
    {
        pergunta: "O curta Coelhinhos Engraçadinhos pertence a qual série de curtas da Disney?",
        opcoes: ["Mickey Mouse", "Silly Symphonies", "Donald Duck", "Goofy Cartoons"],
        respostaCorreta: 1 // Silly Symphonies
    },
    {
        pergunta: "Qual é o estilo de música que toca ao longo do curta Coelhinhos Engraçadinhos?",
        opcoes: ["Jazz", "Clássica", "Swing", "Rock and Roll"],
        respostaCorreta: 1 // Clássica
    }
];

let perguntaAtual = 0;
let contagemOvinhos = 0;

const perguntaElement = document.getElementById("pergunta");
const opcoesElement = document.getElementById("opcoes");
const resultadoElement = document.getElementById("resultado");
const proximaPerguntaButton = document.getElementById("proxima-pergunta");
const tentarNovamenteButton = document.getElementById("tentar-novamente");
const contagemOvinhosElement = document.getElementById("contagem-ovinhos");

// Função para mostrar a pergunta atual
function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaElement.textContent = pergunta.pergunta;
    opcoesElement.innerHTML = '';

    pergunta.opcoes.forEach((opcao, index) => {
        const button = document.createElement("button");
        button.textContent = opcao;
        button.classList.add("btn");
        button.onclick = () => verificarResposta(index);
        opcoesElement.appendChild(button);
    });

    resultadoElement.textContent = '';
    proximaPerguntaButton.classList.add("hidden");
    tentarNovamenteButton.classList.add("hidden"); // Esconde o botão de tentar novamente
}

function verificarResposta(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    if (respostaEscolhida === pergunta.respostaCorreta) {
        contagemOvinhos++;
        resultadoElement.textContent = "Correto! Você ganhou um ovinho!";
        contagemOvinhosElement.textContent = contagemOvinhos;
        proximaPerguntaButton.classList.remove("hidden"); // Mostra o botão de próxima pergunta
    } else {
        resultadoElement.textContent = "Incorreto! Tente novamente.";
        tentarNovamenteButton.classList.remove("hidden"); // Mostra o botão de tentar novamente
    }
}

proximaPerguntaButton.onclick = () => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        resultadoElement.textContent = `Fim do quiz! Você ganhou ${contagemOvinhos} ovinhos de Páscoa!`;
        proximaPerguntaButton.classList.add("hidden");
        opcoesElement.innerHTML = '';
        perguntaElement.textContent = '';
        tentarNovamenteButton.classList.add("hidden"); // Esconde o botão de tentar novamente
    }
};

tentarNovamenteButton.onclick = () => {
    mostrarPergunta(); // Mostra a pergunta novamente
};

// Começa o quiz
mostrarPergunta();
