// Given a string, determine if it is a palindrome, considering only alphanumeric characters

// console.log(isPallindrome(""))

function checkPalindrome(str) {
	let reverseStr = ''
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i]
	}
	if (str === reverseStr) return true
	else return false
}

console.log(checkPalindrome('madam121madam'))
