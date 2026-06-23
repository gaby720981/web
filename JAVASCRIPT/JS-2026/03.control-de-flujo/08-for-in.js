//iterar propiedades de un objeto

let user = {
    id: 1,
    name: 'Chanchito Feliz',
    age: 102,
};

for (let prop in user) {
    console.log(prop); // itera solo sus propiedades
}

for (let prop in user) {
    console.log(prop,user[prop]); // itera sus propiedades y tambien sus valores
}