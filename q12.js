// charAt polyfill

String.prototype.myCharAt = function (index) {
	return this[index]
}

console.log('first'.myCharAt(2))

//split polyfill

String.prototype.mySplit = function (char) {
	let firstStrSection = ''
	let lastStrSection = ''
	let flag = 0
	console.log(typeof char)
	for (let i = 0; i < this.length; i++) {
		if (this[i] === char) {
			flag = 1
			continue
		}
		if (flag === 0) {
			firstStrSection += this[i]
		}
		if (flag === 1) {
			lastStrSection += this[i]
		}
	}
	if (firstStrSection === this.toString()) return firstStrSection
	else return [firstStrSection, lastStrSection]
}

console.log('first'.mySplit(''))
// console.log('first'.split('f'))
