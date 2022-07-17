// Write a program that converts the string into uppercase.
function convertToUpperCase(str) {
	let output = ''
	for (let i = 0; i < str.length; i++) {
		output += String.fromCharCode(
			str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
				? str.charCodeAt(i) - 32
				: str.charCodeAt(i)
		)
	}
	return output
}

console.log(convertToUpperCase('bipul'))
