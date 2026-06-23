

// var es visible fuera de bloques pero no fuera de funciones
//let solo es visible dentro del bloque (recomendable)

if (true) {
    var nombre = "Javascript" // Declarado con var
}
console.log(nombre) // Funciona - imprime "Javascript"


if (true) {
    let nombree = "Javascript" // Declarado con let
}
console.log(nombree) // Error: nombree is not defined


function ejemplo() {
  var x = 10; // Alcance limitado a esta función
}
console.log(x); // Error: x is not defined (no es global)