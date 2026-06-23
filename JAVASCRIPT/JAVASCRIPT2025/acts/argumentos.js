function sumar(a, b) {
  suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

// sumar(5, 3);
// sumar(8, 9);
// sumar(2, 4);
// sumar(5, 5);

// Podemos pasar variables como argumentos
// y sus nombres no tienen que ser iguales a los
// parámetros.
var x = 5;
var y = 3;

// sumar(x, y);

// Ejemplo

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

//concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

function diferencia(num1, num2) {
 let diferencia = num1 - num2;
 console.log(`La diferencia entre ${num1} y ${num2} es: ${diferencia}. `)

}

diferencia (89, 108);
diferencia (100, 12);
