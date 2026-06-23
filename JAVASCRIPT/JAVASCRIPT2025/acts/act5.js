// Lado del triángulo equilátero
let lado = 8;  

// Altura del triángulo equilátero
let a = Math.sqrt(3) * lado / 2;

// Fórmula del área del triángulo equilátero
let area = (Math.sqrt(3) / 4) * Math.pow(a, 2);  

// Mostrar el resultado en la consola
// Mostramos dos decimales

console.log(`El área del triángulo equilátero con lado ${lado} y altura ${a.toFixed(2)} es: ${area.toFixed(2)}`);

