// Given an array and an item, your function should return the index at which the item is present.
Array.prototype.myIndexOf = function (item) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === item) {
			return i
		}
	}
	return 'Item not found'
}

console.log([1, 2, 3, 4, 5].myIndexOf(3))
