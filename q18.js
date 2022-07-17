// > Given a valid (IPv4) IP `address`, return a defanged version of that IP address.
// >
// >
// > A *defanged IP address* replaces every period `"."` with `"[.]"`.

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

function defangedIP(address) {
	let newAdd = ''
	for (let i = 0; i < address.length; i++) {
		if (address[i] === '.') {
			newAdd += '[.]'
		} else {
			newAdd += address[i]
		}
	}
	return newAdd
}

console.log(defangedIP('255.100.50.0'))
