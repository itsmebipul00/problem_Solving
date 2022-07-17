// Mean, Median, and Mode
const stats = {
	mean: arr => {
		return (
			arr.reduce((acc, val) => acc + val, 0) / arr.length
		).toFixed(2)
	},
	median: arr => {
		const isEven = arr.length % 2 === 0
		let median
		if (isEven) {
			median = arr[arr.length / 2] + arr[arr.length / 2 - 1] / 2
		} else {
			median = arr[Math.floor(arr.length / 2)]
		}
		return median
	},
	mode: arr => {
		let m = new Map()
		let count = 0
		let max = 0

		for (let i = 0; i < arr.length; i++) {
			if (!m.has(arr[i])) {
				m.set(arr[i], 1)
			} else {
				m.set(arr[i], m.get(arr[i]) + 1)
			}
		}

		let modes = []
		for (key of m.keys()) {
			//finding the highest value(freq) and setting its key as a mode
			if (m.get(key) > max) {
				max = m.get(key)
				modes = [Number(key)]
				//if there are more nos having same high frequency, we push it inside the mode
			} else if (m.get(key) === max) {
				modes.push(Number(key))
			}
		}
		return modes
	},
}

console.log(stats.mean([1, 2, 3, 4, 4, 5, 5]))
console.log(stats.median([1, 2, 3, 4, 4, 5, 5])) //if not sorted do it first
console.log(stats.mode([1, 2, 3, 3, 3, 3, 5, 5, 5, 5, 4, 4, 4]))
