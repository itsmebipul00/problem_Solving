// Given an array and two numbers,
// Your function should replace all entries of the first number in an array with the second number.

Array.prototype.replace = function (firstNo, secondNo) {
	let arr = []
	let idx = 0
	for (let i = 0; i < this.length; i++) {
		if (this[i] === firstNo) {
			idx++
			arr.push(secondNo)
			continue
		}
		arr.push(firstNo)
	}
	if (idx === 0) {
		return 'firstNo not found'
	} else {
		return arr
	}
}

console.log([1, 2, 3, 4, 5, 2, 2].replace(9, 5))
