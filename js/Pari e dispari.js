console.log('--------')
console.log('pari e dispari')

function getRandomBetween(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function pari(num) {
    if (num % 2 === 0){
        return true
    } else {
        return false
    }
}

// const UserInput = prompt('Scegli pari o dispari ')
const PCnumber = getRandomBetween(1,6)
// const IDnumber = parseInt (prompt('Inserisci un numero intero da 1 a 6'))


const somma = IDnumber + PCnumber

if (pari(somma) && UserInput === 'pari') {
    console.log('hai vinto')
} else if (UserInput === "dispari" && !pari(somma)) {
    console.log('hai Vinto')
} else {
    console.log('Hai Perso')
}

console.log(somma)