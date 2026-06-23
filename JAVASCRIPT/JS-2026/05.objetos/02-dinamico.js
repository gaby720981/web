//se pueden agregar, quitar propiedades y modificar valores de los objetos

const user = { id: 1};

/** no podemos reasignar el valor de la variable CONST
 * por ejemplo:
 * user = 1;
 */

//agregamos nuevas propiedades
user.name = "Gaby",
user.apellido = "Aguilera"
user.guardar = function () {
    console.log("Guardando", user.name);
}

//llamamos a a funcion
user.guardar();

//eliminar propiedades
delete user.name;
console.log(user)

//si queremos restringir la modificacion de los objetos
const user2 = Object.freeze({ id: 2 });
user2.name = "Ga"; //intentamos agregar propiedad
user2.id = 3;    //intentamos cambiar valor de una propiedad
console.log(user2);

//si queremos propiedades fijas pero que se puedan modificar los valores
const user3 = Object.seal({ id: 3 });
user3.name = "Elizabeth"; //no podemos agregar propiedad
user3.id = 4;    //podemos cambiar valor de una propiedad
console.log(user3);




