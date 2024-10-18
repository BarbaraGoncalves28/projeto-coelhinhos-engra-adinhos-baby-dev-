// Botão liga/desliga

window.addEventListener('load', function() {
    const audio = document.getElementById('background-audio');

    // Tenta iniciar a reprodução automática com áudio mudo
    audio.play().catch(function(error) {
        console.log('Autoplay foi bloqueado. O usuário deve interagir primeiro.');
    });
});

let audioPlaying = false; // Estado inicial do áudio como "não tocando"

function toggleAudio() {
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('audio-toggle');
    
    if (audioPlaying) {
        audio.muted = true;
        audio.pause();
        button.innerText = 'Tocar Música';
    } else {
        audio.muted = false; // Desmutar o áudio
        audio.play();
        button.innerText = 'Parar Música';
    }

    audioPlaying = !audioPlaying;
}







// Função para criar folhas e flores animadas
function criarFolhasFlores() {
    const quantidade = Math.floor(1 + Math.random() * 10); // Gera entre 5 e 15 folhas/flores de cada vez
    for (let i = 0; i < quantidade; i++) {
        const folhaOuFlor = document.createElement('div');
        folhaOuFlor.classList.add('folha-animada');

        // Define se será uma folha ou uma flor
        if (Math.random() > 0.5) {
            folhaOuFlor.classList.add('folha'); // Aplica estilo de folha
        } else {
            folhaOuFlor.classList.add('flor'); // Aplica estilo de flor
        }

        document.body.appendChild(folhaOuFlor);

        // Define a posição inicial no topo (acima da visualização) e o movimento
        folhaOuFlor.style.left = `${Math.random() * window.innerWidth}px`;
        folhaOuFlor.style.top = `-${Math.random() * 100}px`; // Começa um pouco acima do topo da tela
        folhaOuFlor.style.animationDuration = `${2 + Math.random() * 3}s`;

        // Remove o elemento após a animação
        setTimeout(() => folhaOuFlor.remove(), 5000);
    }
}

// Executa a criação de folhas e flores a cada 1 segundo
setInterval(criarFolhasFlores, 100);




// CAÇA AOS OVOOOOOOOOOOOOOOOOOOOS

let pontuacao = 0;
const pontuacaoElement = document.getElementById('pontuacao');
const areaJogo = document.querySelector('.area-jogo');
const ovos = document.querySelectorAll('.ovo');
let tempoEsperaMin = 1000; // Tempo mínimo para o ovo sumir/reaparecer
let tempoEsperaMax = 3000; // Tempo máximo para o ovo sumir/reaparecer

// Função para gerar uma posição aleatória para os ovos
function posicaoAleatoria(ovo) {
    const areaLargura = areaJogo.offsetWidth;
    const areaAltura = areaJogo.offsetHeight;

    const ovoLargura = ovo.offsetWidth;
    const ovoAltura = ovo.offsetHeight;

    const posicaoX = Math.random() * (areaLargura - ovoLargura);
    const posicaoY = Math.random() * (areaAltura - ovoAltura);

    ovo.style.left = `${posicaoX}px`;
    ovo.style.top = `${posicaoY}px`;
}

// Função para fazer os ovos aparecerem e sumirem em momentos diferentes
function animarOvo(ovo) {
    const tempoEsperaAtual = Math.random() * (tempoEsperaMax - tempoEsperaMin) + tempoEsperaMin; // Tempo aleatório entre min e max
    setTimeout(() => {
        if (!ovo.classList.contains('clicado')) {
            ovo.style.display = ovo.style.display === 'none' ? 'block' : 'none';
            if (ovo.style.display === 'block') {
                posicaoAleatoria(ovo); // Muda a posição quando o ovo aparece
            }
            animarOvo(ovo); // Chama a função novamente para o ovo continuar sumindo e aparecendo
        }
    }, tempoEsperaAtual);
}

// Função para adicionar eventos de clique aos ovos
function clicarOvo(ovo) {
    ovo.addEventListener('click', () => {
        if (!ovo.classList.contains('clicado')) {
            ovo.style.display = 'none'; // Esconde o ovo definitivamente quando clicado
            ovo.classList.add('clicado'); // Marca o ovo como clicado para não reaparecer
            pontuacao++;
            pontuacaoElement.textContent = `${pontuacao}/20`; // Atualiza a pontuação

            if (pontuacao === 20) {
                mostrarMensagemVitoria(); // Mostra mensagem de vitória quando todos os ovos são clicados
            }
        }
    });
}

// Função para exibir mensagem de vitória dentro da área de jogo
function mostrarMensagemVitoria() {
    const mensagem = document.createElement('div');
    mensagem.textContent = 'Parabéns! Você encontrou todos os ovos!';
    mensagem.classList.add('mensagem-vitoria');
    areaJogo.appendChild(mensagem);
}

// Inicia a animação de cada ovo com tempos diferentes
ovos.forEach(ovo => {
    posicaoAleatoria(ovo);
    clicarOvo(ovo);
    animarOvo(ovo); // Inicia a animação do ovo de forma independente
});

// RECEITAAAAAAAAAAAAAAAAAS

// Dados das receitas
const receitas = {
    'bolo-cenoura': {
        titulo: 'Bolo de Cenoura',
        ingredientes: [
            '3 cenouras médias',
            '4 ovos',
            '1 xícara de óleo',
            '2 xícaras de açúcar',
            '3 xícaras de farinha de trigo',
            '1 colher de sopa de fermento em pó'
        ],
        instrucoes: 'Bata no liquidificador as cenouras, os ovos e o óleo. Misture com os ingredientes secos e asse por 40 minutos a 180°C.'
    },
    'ovinhos-chocolate': {
        titulo: 'Ovinhos de Chocolate',
        ingredientes: [
            '500g de chocolate ao leite',
            'Forminhas de ovos',
            'Recheio de sua escolha'
        ],
        instrucoes: 'Derreta o chocolate em banho-maria, despeje nas forminhas e leve à geladeira até firmar.'
    },
    'torta-maca': {
        titulo: 'Torta de Maçã',
        ingredientes: [
            '4 maçãs',
            '1 xícara de açúcar',
            '2 colheres de sopa de canela',
            '1 massa de torta'
        ],
        instrucoes: 'Misture as maçãs com açúcar e canela. Coloque na massa e asse por 30 minutos a 180°C.'
    },
    'pao-lo-pascoa': {
        titulo: 'Pão de Ló de Páscoa',
        ingredientes: [
            '6 ovos',
            '2 xícaras de açúcar',
            '2 xícaras de farinha de trigo',
            '1 colher de sopa de fermento'
        ],
        instrucoes: 'Bata os ovos com açúcar, adicione a farinha e o fermento, e asse por 35 minutos a 180°C.'
    },
    'colomba-pascal': {
        titulo: 'Colomba Pascal',
        ingredientes: [
            '1 kg de farinha de trigo',
            '300g de açúcar',
            '200g de manteiga',
            '5 ovos',
            '200ml de leite',
            '30g de fermento biológico'
        ],
        instrucoes: 'Misture todos os ingredientes e deixe descansar por 2 horas. Modele e asse por 40 minutos a 180°C.'
    },
    'folar-pascoa': {
        titulo: 'Folar de Páscoa',
        ingredientes: [
            '500g de farinha',
            '300ml de água',
            '10g de sal',
            '10g de açúcar',
            '10g de fermento'
        ],
        instrucoes: 'Misture os ingredientes, deixe crescer e asse por 30 minutos a 200°C.'
    },
};

// Função para abrir a receita em tela cheia
function abrirReceita(nomeReceita) {
    const receita = receitas[nomeReceita];
    document.getElementById('titulo-receita').innerText = receita.titulo;
    document.getElementById('ingredientes-receita').innerHTML = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');
    document.getElementById('instrucoes-receita').innerText = receita.instrucoes;
    
    // Mostra o modal
    const modal = document.getElementById('modal-receita');
    modal.classList.remove('hidden');
    modal.style.display = 'flex'; // Exibe o modal
}

// Função para fechar a receita
function fecharReceita() {
    const modal = document.getElementById('modal-receita');
    modal.classList.add('hidden');
    modal.style.display = 'none'; // Oculta o modal
}

// Fecha o modal quando o usuário clica fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal-receita');
    if (event.target === modal) {
        fecharReceita();
    }
}
