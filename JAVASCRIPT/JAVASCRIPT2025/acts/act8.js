/* c)Realizar un programa que, dado 2 números y la operación a realizar entre ellos,
muestre el resultado de la operación. */

// Definir los valores de los números y la operación
let num1 = 10;
let num2 = 5;
let operacion = "suma".toLowerCase(); //  cambiar esto "resta", "multiplicación" o "división"

let resultado;

if (operacion === "suma") {
    resultado = num1 + num2;
} else if (operacion === "resta") {
    resultado = num1 - num2;
} else if (operacion === "multiplicación") {
    resultado = num1 * num2;
} else if (operacion === "división") {
    // Verificamos que no haya división por cero
    resultado = num2 !== 0 ? num1 / num2 : "Error: No se puede dividir por cero.";
} else {
    resultado = "Operación no válida.";
}

// Mostramos el resultado
console.log(`Resultado: ${resultado}`);