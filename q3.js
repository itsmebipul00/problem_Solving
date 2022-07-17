// Given a sentence, your functions should return the number of words in the sentence.

String.prototype.myLength = function () {
	let len = 0
	for (let ele of this) {
		if (ele !== ' ') len++
	}
	return len
}

console.log('first'.myLength())
