// Given n numbers, your function should return the minimum of them all.
// The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

function findMin(...args) {
	// const args = Array.from(arguments) //before rest
	let min = Infinity
	for (let ele of args) {
		if (typeof ele !== 'number') return 'Incorrect input'
		if (ele < min) {
			min = ele
		}
	}
	if (min === Infinity) {
		return 'Incorrect input'
	} else {
		return min
	}
}

console.log(findMin(3, 5, 9, 1))
