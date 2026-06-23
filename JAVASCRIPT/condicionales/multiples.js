let nota = 8;
let calificacion = ""; // declaramos la variable al inicio

console.log("He realizado mi examen.");

// Condiciones
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificacion = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota < 10) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}

console.log(`He obtenido un ${calificacion}`);

