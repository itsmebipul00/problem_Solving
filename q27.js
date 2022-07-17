// Two Sum
// Given an array of numbers, return all pairs that add up to a given sum.
// The numbers can be used more than once.

function twoSum(arr, target) {
	let m = new Map()

	let indicesPair = []

	for (let i = 0; i < arr.length; i++) {
		const counterPart = target - arr[i]

		if (m.has(counterPart)) {
			//return indices
			// indicesPair.push([m.get(counterPart), i])
			//return pair
			indicesPair.push([counterPart, arr[i]])
		}

		m.set(arr[i], i)
	}

	return indicesPair
}

console.log(twoSum([1, 2, 2, 3, 4], 4))
