let pontosCoelho1 = 0;
let pontosCoelho2 = 0;
let pontosCoelho3 = 0;
let rodada = 1; 

const coelho1 = document.getElementById("coelho1");
const coelho2 = document.getElementById("coelho2");
const coelho3 = document.getElementById("coelho3");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");
const pista = document.getElementById("pista");

function iniciarCorrida() {
    let distanciaCoelho1 = 0;
    let distanciaCoelho2 = 0;
    let distanciaCoelho3 = 0;

    coelho1.style.left = '0px';
    coelho2.style.left = '0px';
    coelho3.style.left = '0px';

    resultado.textContent = `Rodada ${rodada} de 5`;

    const larguraPista = pista.clientWidth - coelho1.clientWidth;  

    const intervaloCorrida = setInterval(() => {
        distanciaCoelho1 += Math.random() * 10;
        distanciaCoelho2 += Math.random() * 10;
        distanciaCoelho3 += Math.random() * 10;

        coelho1.style.left = `${distanciaCoelho1}px`;
        coelho2.style.left = `${distanciaCoelho2}px`;
        coelho3.style.left = `${distanciaCoelho3}px`;

        if (distanciaCoelho1 >= larguraPista || distanciaCoelho2 >= larguraPista || distanciaCoelho3 >= larguraPista) {
            clearInterval(intervaloCorrida);
            let vencedor = "";

            if (distanciaCoelho1 > distanciaCoelho2 && distanciaCoelho1 > distanciaCoelho3) {
                vencedor = "Coelho 1 venceu!";
                pontosCoelho1++;
            } else if (distanciaCoelho2 > distanciaCoelho1 && distanciaCoelho2 > distanciaCoelho3) {
                vencedor = "Coelho 2 venceu!";
                pontosCoelho2++;
            } else {
                vencedor = "Coelho 3 venceu!";
                pontosCoelho3++;
            }

            document.getElementById("pontos-coelho1").textContent = pontosCoelho1;
            document.getElementById("pontos-coelho2").textContent = pontosCoelho2;
            document.getElementById("pontos-coelho3").textContent = pontosCoelho3;
            resultado.textContent = `${vencedor} | Rodada ${rodada} finalizada!`;

            rodada++;
            if (rodada <= 5) {
                setTimeout(contagemRegressiva, 2000); 
            } else {
                resultado.textContent = `Corrida finalizada! Pontuação final: Coelho 1: ${pontosCoelho1}, Coelho 2: ${pontosCoelho2}, Coelho 3: ${pontosCoelho3}`;
            }
        }
    }, 100);
}

function contagemRegressiva() {
    let tempo = 3;
    contador.textContent = tempo;

    const intervaloContagem = setInterval(() => {
        tempo--;
        contador.textContent = tempo;

        if (tempo < 0) {
            clearInterval(intervaloContagem);
            contador.textContent = "";
            iniciarCorrida(); 
        }
    }, 1000);
}

window.onload = contagemRegressiva; 
