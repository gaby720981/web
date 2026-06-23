/** crear un array de longitud N, y que sus elementos sean
numeros del 1 al N
*/

//función que recibe un número N
function arrayDesdeUno(N) {
    
    // crea un array vacío donde guardar los números
    let array = [];
    
    // si N es mayor que 0
    if (N > 0) {
        
        // Bucle: i empieza en 1, y se repite mientras i sea menor o igual a N
        // Después de cada vuelta, i aumenta en 1 (i++)
        for (let i = 1; i <= N; i++) {
            
            // Agrego el valor actual de i al final del array
            array.push(i);
        }
    }
    
    // Devuelvo el array completo con todos los números
    return array;
}

console.log(arrayDesdeUno(5));   // [1, 2, 3, 4, 5]
console.log(arrayDesdeUno(3));   // [1, 2, 3]
console.log(arrayDesdeUno(1));   // [1]
console.log(arrayDesdeUno(0));   // []
console.log(arrayDesdeUno(-2));  // []

