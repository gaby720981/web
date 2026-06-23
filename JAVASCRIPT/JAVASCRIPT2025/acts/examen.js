// let numero = 20

numero = prompt('Ingrese un número');

if (numero > 0) {
    console.log('El número es positivo');

    if (numero > 100) {
        console.log('Supera el límite');
    }

} else
    if (numero < 0) {
        console.log('El número es negativo');
    }
     
    else {
        console.log('El número es nulo');
    }
