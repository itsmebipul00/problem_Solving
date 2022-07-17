// Given an array of integer nums and an integer target,
// check if there are two numbers in the array such that they add up to target.
//  Return any one pair that add up to the target

function checkIfAdditionEqualsTarget(arr, target) {
	console.log(arr, target)
	let s = new Set()
	for (let i = 0; i < arr.length; i++) {
		let temp = target - arr[i]
		if (s.has(temp)) {
			return true
		}
		s.add(arr[i])
	}
	return false
}

console.log(checkIfAdditionEqualsTarget([4, 7, 11, 15], 15))
