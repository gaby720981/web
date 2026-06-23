//parametros: cuando referenciamos los valores dentro de la funcion

//function suma1(a) { 
  //  return a + 100;
//}

//argumentos: valores que le pasamos a la funcion

// let resultado = suma1 (25); 
//console.log(resultado);

//con mas de un parametro
// function suma(a, b) { 
//     return a + b;
// }

// let resultado2 = suma (90, 100);
// console.log(resultado2);
// console.log(typeof suma)

//variable argument: referenciar valores dentro de la funcion. 
//puedo acceder a todos los valores que se le pasan a la funcion
function suma (a,b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3) ;
console.log(resultado);
console.log(arguments);





