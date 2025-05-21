console.log('--------')
console.log('pari e dispari')

function getRandomBetween(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const PCnumber = getRandomBetween(1,6)
const IDnumber = parseInt (prompt('Inserisci un numero intero da 1 a 6'))
console.log(IDnumber, PCnumber)