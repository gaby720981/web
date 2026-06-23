
// Ejercicio 1: Imprimir los números impares entre 1 y 20
// Enunciado: Escribe un bucle `for` que imprima todos los números impares entre 1 y 20.
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
  
  // Ejercicio 2: Calcular la suma de los primeros 50 números
  // Enunciado: Escribe un bucle `for` que calcule la suma de los primeros 50 números enteros (del 1 al 50).
  let suma = 0;
  for (let i = 1; i <= 50; i++) {
    suma += i;
  }
  console.log(suma); // Imprime 1275
  
  // Ejercicio 3: Imprimir una tabla de multiplicar
  // Enunciado: Escribe un bucle `for` que imprima la tabla de multiplicar del número 7 (del 1 al 10).
  let numero = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  
  // Ejercicio 4: Contar cuántos números múltiplos de 3 hay entre 1 y 100
  // Enunciado: Escribe un bucle `for` que cuente cuántos números múltiplos de 3 hay entre 1 y 100.
  let contador = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      contador++;
    }
  }
  console.log(contador); // Imprime 33
  
  // Ejercicio 5: Imprimir los primeros 10 números de la secuencia Fibonacci
  // Enunciado: Escribe un bucle `for` que imprima los primeros 10 números de la secuencia de Fibonacci.
  let a = 0, b = 1;
  for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
  
  // Ejercicio 6: Invertir un arreglo
  // Enunciado: Escribe un bucle `for` que invierta un arreglo de números.
  let arr = [1, 2, 3, 4, 5];
  let arrInvertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrInvertido.push(arr[i]);
  }
  console.log(arrInvertido); // Imprime [5, 4, 3, 2, 1]
  
  // Ejercicio 7: Imprimir una pirámide de asteriscos
  // Enunciado: Escribe un bucle `for` que imprima una pirámide de asteriscos con 5 filas.
  let filas = 5;
  for (let i = 1; i <= filas; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += '*';
    }
    console.log(linea);
  }

  // Mostrar números del 1 al 5 en la consola
  
  // Definimos una variable para contar

  let i = 1;

  // Mientras i sea menor o igual a 5, seguimos repitiendo el bloque de código
  while (i <= 5) {
    console.log(i); // Mostramos el valor de i en la consola
    i++; // Incrementamos i en 1 para que el bucle avance
  }



