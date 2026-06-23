/*
a) Dada la cantidad de preguntas de un cuestionario de evaluación y la cantidad de
preguntas correctas que respondió un alumno, calcular el porcentaje obtenido por el
alumno y mostrarlo en consola con 2 decimales. Ej: 85.66%
*/

let preguntasTotales = 30;
let respuestasCorrectas = 17;

let porcentaje = (respuestasCorrectas / preguntasTotales) * 100;

console.log(`Porcentaje obtenido: ${porcentaje}%`); 

console.log(`Porcentaje obtenido: ${porcentaje.toFixed(2)}%`); 
 // Redondeo a 2 decimales (string)

console.log(`Redondeado: ${Math.round(porcentaje)}%`);  
        // Redondeo estándar
console.log(`Redondeado hacia arriba: ${Math.ceil(porcentaje)}%`); // Redondeo hacia arriba

console.log(`Redondeado hacia abajo: ${Math.floor(porcentaje)}%`); // Redondeo hacia abajo
