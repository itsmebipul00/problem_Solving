// Given an array nums with length n, return the element which occurred at least n/2 times in the array.

function atleatHalfTimes(arr) {
	let m = new Map()
	let target = arr.length / 2

	for (let i = 0; i < arr.length; i++) {
		if (!m.has(arr[i])) {
			m.set(arr[i], 1)
		} else {
			let count = m.get(arr[i])
			m.set(arr[i], count + 1)
		}
	}

	for (let k of m) {
		if (k[1] > target) {
			return k[0]
		}
	}
}

console.log(atleatHalfTimes([2, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3]))
