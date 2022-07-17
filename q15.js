// Given an array and size k, break the array into chunks of k-length and return them as an array.

// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

Array.prototype.myPush = function (item) {
	this[this.length] = item
	return this
}

console.log([1, 2, 3].myPush(4))

function breakIntoKLengths(arr, breakPoint) {
	if (arr.length < breakPoint || breakPoint < 0)
		return 'Invalid Input'
	let newArr = []
	let tempArr = []
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		count++
		tempArr.myPush(arr[i])

		if (count === breakPoint) {
			newArr.myPush(tempArr)
			tempArr = []
			count = 0
		}
	}
	if (tempArr.length !== 0) {
		newArr.myPush(tempArr)
	}
	return newArr
}

console.log(breakIntoKLengths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
