// Given a string of characters, return the character that appears the most often.

function maxChar(str) {
	let strCount = {}

	for (let char of str) {
		if (strCount[char]) {
			strCount[char] = strCount[char] + 1
		} else {
			strCount[char] = 1
		}
	}

	let maxCount = 0
	let maxChar = undefined

	for (let key in strCount) {
		if (strCount[key] > maxCount) {
			maxCount = strCount[key]
			maxChar = key
		}
	}

	return maxChar
}

console.log(maxChar('bIIPUL'))
