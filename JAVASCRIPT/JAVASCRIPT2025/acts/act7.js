/* b) Realizar un programa en Javascript para la siguiente situación: Dadas las
cantidades de varones y el de mujeres de un curso, calcular el total de alumnos. Si
el total supera los 35 alumnos informar CURSO NUMEROSO.
En caso contrario, calcular e informar lo que se deberá pagar para realizar una
salida con todos, si cada alumno paga $55.
Plantear la cantidad mínima de 35, para considerar un curso numeroso, como una
Constante.*/ 

// Definimos la constante que indica el mínimo de alumnos para considerar el curso como numeroso
const CURSO_NUMEROSO = 35;

varones = 15;
mujeres = 15;

// Calculamos el total de alumnos
let totalAlumnos = varones + mujeres;

// Verificamos si el curso es numeroso o no
if (totalAlumnos > CURSO_NUMEROSO) {
    console.log("CURSO NUMEROSO");
} else {
    // Si no es numeroso, calculamos lo que se debe pagar por la salida
    let costoPorAlumno = 55;
    let totalPago = totalAlumnos * costoPorAlumno;
    console.log(`El total a pagar para la salida es: $${totalPago}`);
}
