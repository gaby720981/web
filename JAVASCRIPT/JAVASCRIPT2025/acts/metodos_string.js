let oracion = 'Hola Mundo desde JavaScript!';

/* 1. includes()
verifica si una subcadena está presente dentro de una cadena de texto.
*/

console.log(oracion.includes('Mundo')); // true
console.log(oracion.includes('mundo')); // false (es sensible a mayúsculas/minúsculas)
console.log(oracion.includes('Hola')); // true


/* 2. toUpperCase()
convierte todos los caracteres de una cadena de texto a mayúsculas.
*/

console.log(oracion.toUpperCase()); // "HOLA MUNDO"
console.log('javascript'.toUpperCase()); // "JAVASCRIPT"

/* 3. toLowerCase()
*/

console.log(oracion.toLowerCase()); // "hola mundo desde javascript!"

/* 4. trim()
elimina los espacios en blanco al inicio y al final de una cadena de texto.
*/

let textoConEspacios = '   Hola Mundo   ';
console.log(textoConEspacios.trim()); // "Hola Mundo"

// Combinando métodos
console.log(oracion.toLowerCase().includes('mundo')); // true