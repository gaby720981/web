const esIsograma = (palabra) => {
    const letrasVistas = new Set();
    
    for(const letra of palabra){
        if(letrasVistas.has(letra)) {
            return false;
        }
        letrasVistas.add(letra);
    }
    return true;
}

console.log(esIsograma("gato")); // true (no tiene letras repetidas)
console.log(esIsograma("perro")); // false (la 'r' se repite)