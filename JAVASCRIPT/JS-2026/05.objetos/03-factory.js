//crear objetos de manera sencilla y no repetitiva

//factory function usan camelCase
function crearUsuario(name, email) {
    return {
        name,
        email,
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando clave...");
        },
    }
}

//crear objetos

let user1 = crearUsuario("Ga", "gaby_ag@live.com.ar")
console.log(user1)