/** POO: ENCAPSULAR DATOS (propiedades) Y COMPORTAMIENTOS (atributos) COMUNES
ENTRE DENTRO DE UNA VARIABLE QUE ES UN OBJETO
 */ 

let user = {
    name: "Gaby",
    email: "gaby_ag@live.com.ar",
    direccion: {
        calle: "Pacifico Scozzina",
        numero: 4762,
    },
    activo: true,
    recuperarClave: function () {
        console.log("Recuperando clave...");
    },
}