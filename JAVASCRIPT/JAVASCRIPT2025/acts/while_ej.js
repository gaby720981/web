//Contar del 1 al 5 en consola

// let i = 1; // Iniciamos el contador

// while (i <= 5) { // Mientras i sea menor o igual a 5
//     console.log(i); // Mostramos el número en la consola
//     i++; // Aumentamos el valor de i en 1
// }


// // Generar una lista de números pares

// let numero = 2; 
// let contador = 1;

// while (contador <= 10) {
//     // Mostramos el número par
//     console.log(numero);
//     // Sumamos 2 para obtener el siguiente número par
//     numero += 2; 
//     // Aumentamos el contador
//     contador++; 
// }


// Leer tres números y mostrar un mensaje si se encuentran en orden ascendente.

// let n1 = 5;
// let n2 = 8;
// let n3 = 7;

// //verificar si los números están en orden ascendente
// if (n1 < n2 && n2 < n3) {
//     console.log("Los números están en orden ascendente");
// } else {
//     console.log("Los números no están en orden ascendente");
// }


// Pide al usuario un número hasta que ingrese uno mayor que 10.

// let numero = 0;
// while (numero <= 10) {
//     numero = Number(prompt("Ingresa un número mayor a 10"));
// }   
// console.log("El número ingresado es:", numero);



// Doblar un número hasta que sea mayor a 100

// let numero = 1;

// while (numero <= 100) {
//     console.log(numero);
//     // Multiplica por 2 en cada iteración
//     numero *= 2;  
// }

// console.log("Número final:", numero);



let molestar = "Bart y Lisa: ¿Nos llevas a Monte Splash?";
let respuesta;

do {
  respuesta = prompt(molestar);
} while (respuesta !== "Si los llevo cierran la boca y dejan de molestarme?");

alert("Bart y Lisa: ¡Sí, por supuesto! Entonces nos llevas a Monte Splash?");
alert("Homero: Sí, sí.");
alert("Bart y Lisa: ¡Gracias, papá!");


