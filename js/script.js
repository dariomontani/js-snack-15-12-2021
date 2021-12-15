// Partendo da questo array e aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
// Poi stampiamo in pagina
const arrayObj = [
    { name: 'Poppy', type: 'tshirt', color: 'red'},
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name:'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' },
];
function genRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}

let nameKey = 'age';

arrayObj.forEach((element) => {
    element.age = genRndInteger(3, 50);
    element = {[nameKey]: genRndInteger(3, 50)}
})

console.log(arrayObj);