// algoritmo que devuelva valor menor y mayor de un array

// function minMax(array) { //receive an array, Recibir un array

//     if (array.length > 0) { //Validar array vacío

//         let min = array[0] //Inicializar min y max
//         let max = array[0]

//         for (i = 1; i < array.length; i++) { //Recorrer el array
//             if (array[i] < min) { //Actualizar mínimo
//                 min = array[i]
//             } else
//                 if (array[i] > max) { //Actualizar máximo
//                     max = array[i]
//                 }
//         } return { min: min, max: max }
//     } else {
//         return ("array inexistente");
//     }
// }

// console.log(minMax([5, 2, 9, 1, 7]))   // { min: 1, max: 9 }
// console.log(minMax([10, 20, 30]))      // { min: 10, max: 30 }
// console.log(minMax([-5, -2, -8]))      // { min: -8, max: -2 }
// console.log(minMax([]))                // "array inexistente"

//holamundo:
let array = [2, 5, 7, -10, -6, 55]

function getMenorMayor (arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor: numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor (array)
console.log(numero)