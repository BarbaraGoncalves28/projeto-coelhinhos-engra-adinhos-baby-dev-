// Animação das imagens ao passar o mouse
const gameImages = document.querySelectorAll('.game-image');

gameImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1) rotate(5deg)';
        image.style.transition = 'transform 0.5s ease-in-out';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1) rotate(0deg)';
        image.style.transition = 'transform 0.5s ease-in-out';
    });
});

// Animação do botão "Jogos Interativos"
const playButton = document.querySelector('.play-button');

playButton.addEventListener('mouseover', () => {
    playButton.style.transform = 'scale(1.1)';
    playButton.style.transition = 'transform 0.3s ease-in-out';
});

playButton.addEventListener('mouseout', () => {
    playButton.style.transform = 'scale(1)';
});



// Espera o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    // Jogo Corrida de Coelhinhos
    const btnCorrida = document.getElementById("btn-corrida");
    const resultadoCorrida = document.getElementById("resultado-corrida");

    // Verifica se o botão da corrida existe
    if (btnCorrida) {
        btnCorrida.addEventListener("click", () => {
            // Gera um resultado aleatório
            const resultado = `Resultado da corrida!`;
            resultadoCorrida.textContent = resultado;
        });
    } else {
        console.error("Elemento 'btn-corrida' não encontrado.");
    }

    // Jogo Salto dos Coelhinhos
    const btnSalto = document.getElementById("btn-salto");
    const resultadoSalto = document.getElementById("resultado-salto");
    const plataformas = document.querySelectorAll(".plataforma");

    // Verifica se o botão do salto existe
    if (btnSalto) {
        btnSalto.addEventListener("click", () => {
            // Gera um salto aleatório para uma plataforma
            const salto = Math.floor(Math.random() * plataformas.length);
            resultadoSalto.textContent = `O coelhinho saltou para a ${salto + 1}ª plataforma!`;
        });
    } else {
        console.error("Elemento 'btn-salto' não encontrado.");
    }
});
