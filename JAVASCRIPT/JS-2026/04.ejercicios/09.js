// algoritmo que devuelva un array de objetos en base a pares

let pairs = [
    [1, { name: "Marie Curie" }],
    [2, { name: "Rosa Parks" }],
    [3, { name: "Frida Kahlo" }],
    [4, { name: "Jane Austen" }],
    [5, { name: "Ada Lovelace" }]
]

// function fromPairs(arr) {
//     let resultado = []; //array vacío para guardar objetos nuevos
//     for (let par of arr) {  //recorre cada par del array que recibe
//         let id = par[0]; //extrae el id del par (primer elemento) y guarda en variable id
//         let objeto = par[1]; //extrae el objeto del par (segundo elemento)y lo guarda en variable objeto
//         let nuevoObjeto = { id: id, name: objeto.name }; //crea un nuevo objeto combinando el id y el nombre del objeto original
//         resultado.push(nuevoObjeto); //agrega el nuevo objeto al array resultado
//     }
//     return resultado;
// }
//     //devuelve el array con todos los objetos creados

// let resultado = fromPairs(pairs);
// console.log(resultado);


function toCollection(arr) {
    let collection = [],
    for (let idx in arr){
       let elemento = arr[idx];
       collection[idx] = elemento[1];
       collection[idx].id = elemento[0];
    }
    return   collection;
}
let resultado = toCollection(pairs);
console.log(collection);