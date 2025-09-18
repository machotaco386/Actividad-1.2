import { potencia, factorial } from '../JS/math2.js';

const resultadoSuma = potencia(2,5);
const resultadoMultiplicacion = factorial(4);

const contenedorResultado = document.getElementById('resultado3');
contenedorResultado.innerHTML = `
    El resultado de la potencia es: <strong>${resultadoSuma}</strong>
    <br>
    El resultado del factorial es: <strong>${resultadoMultiplicacion}</strong>`;
