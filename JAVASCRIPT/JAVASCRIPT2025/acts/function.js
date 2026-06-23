
let a, b, resultado;

a = Number(prompt("Ingrese el primer número: "));
b = Number(prompt("Ingrese el segundo número: "));

resultado = sumar(a, b);

console.log(`El resultado de la suma es: ${resultado}`); // prints the result of the sum in the console
alert(`El resultado de la suma es: ${resultado}`); // shows the result of the sum on the screen


function sumar(x, y) {
  return x + y;
}
