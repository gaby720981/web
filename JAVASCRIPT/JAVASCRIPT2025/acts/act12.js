/* c) Calcular el promedio de n números enteros generados al azar. La fórmula para
generar un número entero aleatorios en Javascript es la siguiente:
Math.floor(Math.random() * (max - min)) + min;
Por ejemplo, para generar números aleatorios entre 1 y 10, max debería ser 11 y
min debería ser 1. */

// Definir la cantidad de números a generar
let n = 5; 

// Definir los valores mínimo y máximo 
let min = 1;
let max = 11;

// Inicializar la suma
let suma = 0;

// Generar los n números aleatorios, sumarlos y mostrarlos
for (let i = 0; i < n; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
    suma += numeroAleatorio; // Sumar el número aleatorio a la suma total
    console.log("Número aleatorio generado:", numeroAleatorio);
}

// Calcular el promedio
let promedio = suma / n;

// Mostrar el resultado
console.log("El promedio de los números generados es:", promedio.toFixed(2));
