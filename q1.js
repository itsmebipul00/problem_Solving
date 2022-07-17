// Given an array, your function should return the length of the array.

Array.prototype.myLength = function () {
	let len = 0
	for (let i = 0; i < this.length; i++) {
		if (this[i] !== undefined) {
			len++
		}
	}
	return len
}

console.log([1, 2, 3, 4, undefined, 5].myLength())
