function miFuncion() {
  var miVariableLocal = 4;
  console.log(miVariableLocal);
}

miFuncion(); // La variable está definida dentro de la función.

// ¡Error!
// Al ser una variable local, no se puede usar fuera de la función.
console.log(miVariableLocal); 