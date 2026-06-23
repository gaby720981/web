//tipo de referencia, se almacena direccion donde se encuentra
//agrupacion de datos

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", //par llave-valor
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.anime); //acceder a una propiedad del objeto
console.log(personaje['anime']);

//modificar una propiedad
personaje.edad = 17;
personaje['edad'] = 18; 

//si no se conoce la propiedad, o se va a iterar todas las propiedades, conviene usar corchetes, por ejemplo:
let llave = 'edad';
personaje[llave] = 19;

//eliminar una propiedad
delete personaje.anime; 