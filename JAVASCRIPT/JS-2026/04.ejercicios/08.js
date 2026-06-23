/**crear algoritmo que tome un array de objetos
 * y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: "Nicolas",
},{
    id: 2,
    name: "Felipe",
},{
    id: 3,
    name: "Lautaro"
}]


// let pares = [
//     [1, { id:1, name: "Nicolas"}],
//     [2, { id:2, name: "Felipe"}],
//     [3, { id:3, name: "Lautaro"}],
// ];

function toPairs (arr) {
    let resultado = [];
    for (let objeto of arr){
        let par = [objeto.id, objeto];
        resultado.push(par)
        
    }
     return resultado;
}

let resultado = toPairs(array);
console.log(resultado);