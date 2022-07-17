// Ceaser chipher

function isUpperCase(char) {
	return char === char.toUpperCase()
}

function ceaser(str, key, i) {
	return String.fromCharCode(str.charCodeAt(i) + key)
}

let ceaserCipher = (str, key) => {
	let decipher = ''

	for (let i = 0; i < str.length; i++) {
		if (isUpperCase(str[i])) {
			decipher += ceaser(str, key, i)
		} else {
			decipher += ceaser(str, key, i)
		}
	}

	return decipher
}

console.log(ceaserCipher('aBcd', 2))
