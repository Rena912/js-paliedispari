// const parolaUtente = prompt('Inserisci una parola')
console.log(invertiParola(parolaUtente))


if (parolaPalindroma(parolaUtente)) {
	console.log('La parola e palindroma')
} else {
	console.log('la parola non e palindroma')
}

function parolaPalindroma(parola) {
	parola = parola.toLowerCase()
	const parolaInvertita = invertiParola(parola)
	// console.log(parolaInvertita, parola)
	if (parolaInvertita === parola) {
		return true
	} else {
		return false
	}

}

function invertiParola(parola) {
	let parolaInvertita = ''

	for (let i = 0; i < parola.length; i++) {
		const char = parola.at(-1 - i)
		parolaInvertita += char
	}

	return parolaInvertita
}

