// polyfill for trim

String.prototype.myTrim = function () {
	let output = ''
	for (let char of this) {
		if (char === ' ') {
			continue
		} else {
			output += char
		}
	}
	if (output === '') {
		return undefined
	} else {
		return output
	}
}

console.log('  fd fd '.myTrim())
