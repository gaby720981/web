// Operador de Suma (+)
let a = 10;
let b = 5;
let resultado = a + b;
console.log("Suma:", resultado); // Resultado: 15

//no confundir con concatenacion
let num1 = 12;
let num2 = "5";
let resultado2 = num1 + num2;
console.log("Concatenacion numero y string nro:", resultado2); // Resultado: 125

// Operador de Resta (-)
a = 10;
b = 3;
resultado = a - b;
console.log("Resta:", resultado); // Resultado: 7

// Operador de Multiplicación (*)
a = 4;
b = 3;
resultado = a * b;
console.log("Multiplicación:", resultado); // Resultado: 12

// Operador de Potencia (**)
a = 2;
b = 3;
resultado = a ** b;
console.log("Potencia:", resultado); // Resultado: 8

// Operador de División (/)
a = 20;
b = 4;
resultado = a / b;
console.log("División:", resultado); // Resultado: 5

// Operador de Módulo (%)
a = 20;
b = 2;
resultado = a % b;
console.log("Resto de la división:", resultado); // Resultado: 0

// Operador de Incremento en 1 (++)
a = 5;
a++;
console.log("Incremento de 1 en 1 :", a); // Resultado: 6

// Operador de Incremento otro valor (++)
a = 5;
a += 2;
console.log("Incremento distinto de 1:", a); // Resultado: 7

// Operador de Decremento (--)
//a = 5; // Eliminado porque se vuelve a usar el valor de `a` en la siguiente línea
a--;
console.log("Decremento:", a); // Resultado: 4

// Operador de Asignación (=)
a = 10;
b = 20;
a = b; // Asigna el valor de b a a
console.log("Valor de a:", a); // Resultado: 20

// Operadores de Comparación (==, ===, !=)
a = 5;
b = '5';
console.log(a == b);  // true (compara solo los valores)
console.log(a === b); // false (compara también los tipos)
console.log(a != b);  // false (compara si no son iguales)

// Operador Lógico && (AND)
let c = true;
let d = false;
console.log(c && d);  // false (porque d es false)

// Operador Lógico || (OR)
console.log(c || d);  // true (porque c es true)

// Operador Lógico ! (NOT)
console.log(!c);  // false (porque c es true y el operador NOT lo invierte)

//comillas parte de la cadena

let miCadena = "Soy una cadena de caracteres \"con comillas\"";
console.log(miCadena)