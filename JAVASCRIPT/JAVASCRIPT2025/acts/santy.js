//DADOS 3 LADOS DE UN TRIÀNGULO, DETERMINAR DE TIPO SE TRATA SEGÙN SUS LADOS

L1 = prompt("introducir el 1er lado de un triangulo: ")
L2 = prompt("introducir el 2do lado de un triangulo: ")
L3 = prompt("introducir el 3ro lado de un triangulo: ")

if (L1 == L2 && L2 == L3) {
   consol.log("el triangulo es equilatero ")
}
else {
   if (L1 == L2 || L2 == L3 || L1 == L3) {
      consol.log("el triangulo es isosceles ")
   }
   else {
      consol.log("el triangulo es escaleno")
   }
}

//-----------------------------------------------------------------------


// MOSTRAR LOS NUMEROS DEL 5 AL 60 INCREMENTANDO DE 5 EN 5

for (let N = 5; N <= 60; N++) {
    console.log(N);
}

//-----------------------------------------------------------------------

// //LEER 3 NROS Y MOSTRAR UN MJE SI SE ENCUENTRAN EN ORDEN ASCENDENTE

let N1=8
let N2=7
let N3=10

if(N1 < N2 && N2 < N3) {
  console.log("los numeros son ascendentes")
}
else {
  console.log("no son acendentes")
}

//-----------------------------------------------------------------------

//PIDE AL USUARIO UN NRO HASTA QUE INGRESE UN NRO MAYOR A 100

let N = 0
while(N<100) {
   N = prompt("ingrese un numero ");
   console.log(`el numero es ${N}`)
}