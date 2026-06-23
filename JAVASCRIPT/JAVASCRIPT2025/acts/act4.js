
/*b) Realizar un programa que permita hacer la conversión entre las temperaturas en:
Celsius, Fahrenheit y Kelvin. Dado un valor en Celsius convertir a las otras
unidades aplicando las fórmulas de conversión y mostrar los resultados en la
consola, de la siguiente manera:
x °C
y °F
z K 
*/ 

let celsius = 25
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(`${celsius} °C
${fahrenheit.toFixed(2)} °F
${kelvin.toFixed(2)} K`);
