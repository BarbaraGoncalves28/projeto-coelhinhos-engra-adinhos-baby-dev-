document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.project-image');

    images.forEach(image => {
        let angle = 0;
        const maxAngle = 10;  // Ângulo máximo reduzido para um balanço mais suave
        const speed = 0.05;  // Mantém o mesmo ritmo do balanço

        function swing() {
            angle += speed;
            const offset = Math.sin(angle) * maxAngle;  // Cria o efeito de balanço suave
            image.style.transform = `rotate(${offset}deg)`;  // Aplica a rotação

            requestAnimationFrame(swing);  // Continua a animação
        }

        swing();  // Inicia o movimento
    });
});



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
        folhaOuFlor.style.animationDuration = `${9 + Math.random() * 9}s`; // Agora cai entre 6 e 12 segundos

        // Remove o elemento após a animação
        setTimeout(() => folhaOuFlor.remove(), 13000); // Ajuste o tempo de remoção se necessário
    }
}

// Executa a criação de folhas e flores a cada 1 segundo
setInterval(criarFolhasFlores, 100);
