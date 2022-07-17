// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: nums = [0,2,0,3,12,0]
// Output: [2,3,12,0,0,0]
function swap(arr, i, j) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function moveZeros(arr) {
	let j = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			if (i !== j) swap(arr, i, j)
			j++
		}
	}
	return arr
}

console.log(moveZeros([0, 2, 0, 3, 12, 0]))
