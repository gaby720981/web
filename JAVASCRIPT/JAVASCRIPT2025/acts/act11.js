
/* b) Realizar un programa que genere los primeros n números de la sucesión de
Fibonacci */

// Inicializamos los dos primeros números de la sucesión
let fib1 = 0;
let fib2 = 1;

//número de términos de la sucesión
n = 6

// Mostramos el primer término
console.log(fib1);

// Si n es mayor que 1, mostramos también el segundo término
if (n > 1) {
    console.log(fib2);
}

// Calculamos y mostramos el resto de los términos de la sucesión
for (let i = 3; i <= n; i++) {
    let fibSiguiente = fib1 + fib2;
    console.log(fibSiguiente);
    fib1 = fib2;
    fib2 = fibSiguiente;
}
