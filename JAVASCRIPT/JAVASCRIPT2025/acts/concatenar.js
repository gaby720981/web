//  1. Usando el operador + (Concatenación clásica)
let nombre = "Gaby";
let saludo = "Hola, " + nombre + "!";
console.log(saludo); // Salida: Hola, Gaby!

//  2. Usando += (Concatenación acumulativa)
let mensaje = "Hola";
mensaje += ", ¿cómo estás?";
console.log(mensaje); // Salida: Hola, ¿cómo estás?

//  3. Usando Template Literals (Backticks) – Recomendado-----------------------
let edad = 25;
let mensaje2 = `Hola, ${nombre}. Tienes ${edad} años.`; //ALT + 96
console.log(mensaje2); // Salida: Hola, Gaby. Tienes 25 años.

//  4. Usando .concat()
let texto1 = "Hola";
let texto2 = "mundo";
let resultadoConcat = texto1.concat(" ", texto2, " desde JavaScript!");
console.log(resultadoConcat); // Salida: Hola mundo desde JavaScript!

//  5. Usando join() con arrays
let palabras = ["Hola", "mundo", "desde", "JavaScript"];
let fraseJoin = palabras.join(" "); // Une con un espacio
console.log(fraseJoin); // Salida: Hola mundo desde JavaScript

//  6. Usando charAt() para construir una nueva cadena
let palabra = "JavaScript";
let nuevaCadena = palabra.charAt(0) + palabra.charAt(1) + "!";
console.log(nuevaCadena); // Salida: Ja!
