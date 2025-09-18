// Archivo: ../JS/main4.js

// 1. Importa las funciones del módulo de cadenas
import { aMayusculas, aMinusculas } from '../JS/cadenas.js';

// 2. Selecciona el elemento del HTML por su ID
const contenedorTexto = document.getElementById('resultado4');

// 3. Define el texto a manipular y ejecuta las funciones
const miTexto = "JavaScript es Genial";
const textoMayusculas = aMayusculas(miTexto);
const textoMinusculas = aMinusculas(miTexto);

// 4. Escribe el resultado en el párrafo seleccionado
contenedorTexto.innerHTML = `
    Texto original: <strong>${miTexto}</strong>
    <br>
    En mayúsculas: <strong>${textoMayusculas}</strong>
    <br>
    En minúsculas: <strong>${textoMinusculas}</strong>
`;