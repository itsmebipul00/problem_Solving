// For a given number, find all the prime numbers from zero to that number.

function isPrime(n) {
	if (n == 1 || n == 0) {
		return false
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false
		}
	}
	return true
}

function allPrime(num) {
	for (let i = 1; i <= num; i++) {
		if (isPrime(i)) {
			console.log(i)
		}
	}
}
allPrime(12)

// Sieve of Eratosthenes todo
