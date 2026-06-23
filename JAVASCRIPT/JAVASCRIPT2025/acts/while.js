/*permite ejecutar un bloque de codigo en forma repetitiva mientras una condicion sea verdadera,
la condicion se evalúa al principio,
*/


// var contador = 0;

// while (contador <=10) {
//     console.log('Vuelta Nro.' + contador);
//     contador++;
// }

// var entrada = '';

// while (entrada !== 'fin') {
//     entrada = prompt('Escribe "fin" para salir del bucle');
//     console.log('Aún no escribiste "fin".');
// }
// console.log('Has salido del bucle.');


// let entrada;

// while (entrada !== 'salir') {
//     entrada = prompt('Ingresa un valor (escribe "salir" para terminar):');
    
//     if (entrada !== 'salir') {
//         console.log(`Ingresaste: ${entrada}`);
//     }
// }

// console.log('Has salido del bucle.');

let entrada;
let suma = 0;

while (entrada !== 'salir') {
    entrada = prompt('Ingresa un número (o escribe "salir" para terminar):');

    // Verifica si el usuario ingresó un número válido antes de sumarlo
    let numero = parseFloat(entrada);
    if (!isNaN(numero)) {
        suma += numero;
        console.log(`Número agregado: ${numero}`);
    } else if (entrada !== 'salir') {
        console.log('Por favor, ingresa un número válido.');
    }
}

console.log(`Has salido del bucle. La suma total es: ${suma}`);

