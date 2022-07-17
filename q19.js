//  Given a string `s`, reverse only all the vowels in the string and return it.

//  The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both cases.

// Input: s = "neoGCamp"
// Output: "naoGCemp"

// function reverseVowels(string) {
// 	let obj = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' }
// 	let tempArr = []
// 	let revString = ''
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === obj[string[i]]) {
// 			tempArr[tempArr.length] = string[i]
// 		}
// 	}
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === obj[string[i]]) {
// 			revString += tempArr[tempArr.length - 1]
// 			tempArr.length = tempArr.length - 1
// 		} else {
// 			revString += string[i]
// 		}
// 	}

// 	return revString
// }

function reverseVowels(stri) {
	let obj = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' }

	let i = 0
	let str = [...stri]
	let j = str.length - 1

	//wait until you get both vowels and then swap
	while (j > i) {
		// console.log(str[i])
		// console.log(obj[str[i]])
		if (str[i] !== obj[str[i]]) {
			console.log(str[i])
			i++
			continue
		}
		if (str[j] !== obj[str[j]]) {
			console.log(str[j])
			j--
			continue
		}

		let temp = str[i]
		str[i] = str[j]
		str[j] = temp

		i++
		j--
	}
	return str.join('')
}

// // Stack - lifo, filo
console.log(reverseVowels('neoGCamp'))
// let myArray = [1, 2, 3, 4, 5]
// let element = myArray[myArray.length - 1]
// myArray.length = myArray.length - 1
// console.log(element)
// console.log(myArray)
