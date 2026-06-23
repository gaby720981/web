/* d) Dados los 3 lados de un triángulo determinar de qué tipo de triangulo se trata según
sus lados. */

// Definir los valores de los lados del triángulo
let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

// Verificamos si los valores son válidos (si son números positivos)
if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Los lados deben ser números positivos.");
} else {
    // Determinamos el tipo de triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es equilátero.");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log("El triángulo es isósceles.");
    } else {
        console.log("El triángulo es escaleno.");
    }
}
