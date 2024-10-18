// Função para adicionar movimento extra às imagens
const floatingImages = document.querySelectorAll('.floating-image');

floatingImages.forEach((image) => {
    // Animação personalizada para cada imagem
    const animationTime = Math.random() * 3 + 2; // Tempo entre 2 e 5 segundos
    image.style.animationDuration = `${animationTime}s`;

    // Adicionando um movimento suave para os lados
    let moveX = 0;
    setInterval(() => {
        moveX = moveX === 0 ? 10 : 0;
        image.style.transform = `translate(${moveX}px, ${Math.random() * -20}px)`;
    }, animationTime * 1000);
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
        folhaOuFlor.style.animationDuration = `${2 + Math.random() * 3}s`;

        // Remove o elemento após a animação
        setTimeout(() => folhaOuFlor.remove(), 5000);
    }
}

// Executa a criação de folhas e flores a cada 1 segundo
setInterval(criarFolhasFlores, 100);



