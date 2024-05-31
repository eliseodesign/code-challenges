/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

// Cara - arca.
// Lácteo - coleta.
// Retener - enterré
// Castor - castro.
// Seto - esto.
// Nido - Odín.
// Lobo - bolo.

const countLetter = (word, letter) => {
    let counter = 0;
    word.split("").forEach(l => {
        if (l === letter) counter++;
    });
    return counter; 
}

const compareObjets = (obj1, obj2, properties) => {
    for (let p of properties) {
        if (obj1[p] !== obj2[p]) {
            return false;
        }
    }
    return true;
}

function isAnagrama(firstWord, secondWord){

    let firstObj = {}
    let wordList = []

    firstWord.split("").forEach( el => {
        if(firstObj[el] != null) return
        wordList.push(el)
        firstObj[el] = countLetter(firstWord, el)
    });

    let secondObj = {}

    secondWord.split("").forEach( el => {
        if(secondObj[el] != null) return

        secondObj[el] = countLetter(secondWord, el)
    });

    const result = compareObjets(firstObj, secondObj, wordList)
    return result

}

console.log(isAnagrama("perro", "rope"))
console.log(isAnagrama("cara", "arca"))

//! ESTA ES UNA MEJOR SOLUCÍÓN
// function isAnagram(wordOne, wordTwo) {
//     // Convertir ambas palabras a minúsculas para asegurar la comparación sin distinción de mayúsculas/minúsculas
//     const normalizedWordOne = wordOne.toLowerCase();
//     const normalizedWordTwo = wordTwo.toLowerCase();

//     // Si las palabras son exactamente iguales, no son anagramas
//     if (normalizedWordOne === normalizedWordTwo) {
//         return false;
//     }

//     // Convertir las palabras a arrays de caracteres, ordenarlos y compararlos
//     const sortedWordOne = normalizedWordOne.split('').sort().join('');
//     const sortedWordTwo = normalizedWordTwo.split('').sort().join('');

//     return sortedWordOne === sortedWordTwo;
// }
