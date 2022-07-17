// Write a JavaScript program to get the length of a JavaScript object.

// Sample object:
// let student = {
// 	name: 'David Rayy',
// 	sclass: 'VI',
// 	rollno: 12,
// }

// function lengthOfObject(obj) {
// 	let count = 0
// 	for (let prop in obj) {
// 		if (obj.hasOwnProperty(prop)) {
// 			count++
// 		}
// 	}
// 	return count
// }

// console.log(lengthOfObject(student))

// Iterable vs emumerable //for in vs for of
let names = ['Ab', 'abc', 'abcd', 'abcde']

names.elf = 'abcdef'

Object.defineProperty(names, 'elf', {
	value: 'asdf',
	enumerable: false,
})

// let earth = {
// 	towns: ['A', 'B', 'C'],
// 	races: ['AS', 'DF', 'HJK'],
// }

// earth.creator = 'GOD'

// Object.defineProperty(earth, 'age', {
// 	value: 'third',
// 	enumerable: false,
// })

// for (let p in earth) {
// 	console.log(p)
// }

for (let p in names) {
	console.log('in names', p)
}
console.log(first)

// console.log()
//enumerables look up to the properties of the object, iterables look up to the values
// while defining objects en have en flag true, objects dont have built in iterators in their prototype objects
//while arrays, strings, nodelist, map, set do
//for in iterates over en prop of objs including inherited en props
// for of iterates over iterable objects

// Learning maps
