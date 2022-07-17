//polyfill for slice string

String.prototype.mySlice = function (firstIdx, lastIdx) {
	if (lastIdx < 0) {
		lastIdx = this.length + lastIdx
	}
	if (firstIdx < 0) {
		firstIdx = this.length + firstIdx
	}

	let str = ''
	if (lastIdx === undefined) {
		for (let i = firstIdx; i < this.length; i++) {
			str += this[i]
		}
	} else {
		for (let i = firstIdx; i < lastIdx; i++) {
			str += this[i]
		}
	}
	return str
}

console.log('first'.mySlice(-2, -1))

console.log('first'.slice(-2, -1))
