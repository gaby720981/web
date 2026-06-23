//algoritmo que devuelva cantidad de numeros positivos de un array

function cantidad(array) {

    if (!Array.isArray(array)) {
        return "Error: el parámetro debe ser un array";
    }

    let cantidad = 0;

    for (let numero of array) {
        if (numero > 0) {
            cantidad++
        }
    }
    return cantidad;
}

console.log(cantidad([5, -2, 0, 8, -1, 3]))   // 3
console.log(cantidad([-1, -2, -3]))           // 0
console.log(cantidad([1, 2, 3, 4, 5]))        // 5
console.log(cantidad([]))                     // 0 (o mensaje)
console.log(cantidad("hola"))                 // Error