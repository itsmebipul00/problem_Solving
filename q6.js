// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function mergedArray(arrayOne, arrayTwo) {
	let newArr = arrayOne
	let x = arrayOne.length
	let y = arrayTwo.length
	let z = arrayOne.length + arrayTwo.length
	let i, j

	for (i = x, j = 0; i < z && j < y; i++, j++) {
		newArr[i] = arrayTwo[j]
	}
	return newArr
}

console.log(mergedArray([1, 2, 3, 4], [4, 3, 2, 1]))
