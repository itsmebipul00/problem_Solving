//copying at any desired position of the bigger string
const insertString = (str, stringToBeInserted, pos) => {
	if (pos > str.length) {
		return 'Position exeeds string'
	}
	const str1 = str.slice(0, pos - 1)
	const str2 = str.slice(pos - 1)
	return str1 + stringToBeInserted + str2
}

const copySmallerStringToBigger = (str1, str2, pos) => {
	let res = ''
	if (str1.length >= str2.length) {
		res = insertString(str1, str2, pos)
	} else {
		res = insertString(str2, str1, pos)
	}
	return res
}
console.log(copySmallerStringToBigger('99', 'QuestionOfTheDay', 9))
