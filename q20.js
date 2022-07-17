//Anargrams

// Given two strings check if the second string is an anagram of first.
// ex: s1="below" s2= "elbow" -> true,
// ex: s1="gain" s2="pain" -> false

function checkAnargram(str1, str2) {
	let m = new Map()

	if (
		str1.length === 0 ||
		str2.length === 0 ||
		str1.length !== str2.length
	) {
		return false
	}

	for (let i = 0; i < str1.length; i++) {
		if (!m.has(str1[i])) m.set(str1[i], 1)
		else m.set(str1[i], m.get(str1[i]) + 1)
	}
	for (let i = 0; i < str2.length; i++) {
		if (!m.has(str1[i])) {
			return false
		} else {
			m.set(str2[i], m.get(str2[i]) - 1)
		}
	}

	let keys = m.keys()

	for (let key of keys) {
		if (m.get(key) !== 0) {
			return false
		}
	}

	return true
}

console.log(checkAnargram('below', 'eldfgbow'))
