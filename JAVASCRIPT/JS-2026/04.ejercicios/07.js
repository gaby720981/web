//algoritmo que devuelva el precio del producto mas impuesto

function precioTotal (precio, impuesto){
    if (precio > 0 && impuesto > 0){
       let resultado = precio * (1 + impuesto);
       return resultado.toFixed(2)
    }
}

let precioFinal = precioTotal (19.9 , 0.15);
console.log(precioFinal)

//holamundo:

// function precioCompleto(precio, impuesto) {
//     return precio + precio + impuesto;
// }

// let resultado = precioCompleto (19.9 , 0.15)
// console.log(resultado)