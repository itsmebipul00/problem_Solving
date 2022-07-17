// Given an array of items, reverse the order.

function reverseArray(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i]
		arr[i] = arr[arr.length - 1 - i]
		arr[arr.length - 1 - i] = temp
	}
	return arr
}

console.log(reverseArray([1, 2, 3, 4, 5]))
