// 8. Write a Program to Print N Odd Number in Descending Order.

function nOdd(num) {
	for (let i = num; i > 0; i--) {
		let oddNo = i * 2 - 1

		console.log(oddNo)
	}
}

console.log(nOdd(4))
