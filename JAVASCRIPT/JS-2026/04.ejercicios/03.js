// funcion para obtener un elemento por su indice y array
// indice no debe ser menor que cero y el indice debe existir en el array

function obtenerElemento(array, indice) {

    // Validar que el índice no sea negativo
    // Validar que el índice exista en el array (menor que array.length)
    // Si todo está bien, devolver el elemento
    // Si algo falla, devolver un mensaje de error
}



let autores = ["Gabriel García Márquez", "Jorge Luis Borges", "Julio Cortázar", "Mario Vargas Llosa", "Isabel Allende"]

function obtenerElemento(array, indice) {

    if (!Array.isArray(array)) {
        return "Error: el primer parámetro debe ser un array"
    }

    if (indice >= 0 && indice < array.length) {
        return array[indice]
    } else {
        return "Índice inválido"
    }
}

let elemento = obtenerElemento(autores, 3)
console.log(elemento) 
