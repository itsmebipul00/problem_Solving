function reverseWords(str) {
	return str
		.split(' ')
		.map(word => word.split('').reverse().join(''))
		.join(' ')
}

console.log(reverseWords('I love javascript'))

function capitalizeEachWord(str) {
	let capitalizedArr = []
	for (let word of str.split(' ')) {
		capitalizedArr.push(word[0].toUpperCase() + word.slice(1))
	}
	return capitalizedArr.join(' ')
}

console.log(capitalizeEachWord('I love javascript'))
