/* a) Almacenar en variables el nombre de un alumno y sus notas de Historia, Química y
Física. Luego calcular el promedio y emitir un mensaje con la condición del alumno
según su valor: Entre 0 y menos de 6: Libre, Entre 6 y menos de 8: Regular y
Entre 8 y 10: Promocionado. */

// Almacenamos el nombre del alumno y sus notas
let nombreAlumno = "Juan Pérez";
let notaHistoria = 5;
let notaQuimica = 7;
let notaFisica = 9;

// Calculamos el promedio
let promedio = (notaHistoria + notaQuimica + notaFisica) / 3;

// Determinamos la condición del alumno según su promedio
let condicion;

if (promedio < 6) {
    condicion = "Libre";

} else if (promedio >= 6 && promedio < 8) {
    condicion = "Regular";
    
} else if (promedio >= 8 && promedio <= 10) {
    condicion = "Promocionado";
}

// Emitimos un mensaje con el resultado
console.log(`El alumno ${nombreAlumno} tiene un promedio de ${promedio.toFixed(2)} y su condición es: ${condicion}`);
