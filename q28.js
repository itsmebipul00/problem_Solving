// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//check if min yess, do min
//If not min, sub no with min to check if it is ggreatest profit

var maxProfit = function (prices) {
	let profit = 0
	let min = prices[0]
	let profitPrices = []
	for (let i = 1; i < prices.length; ++i) {
		if (prices[i] < min) {
			min = prices[i]
			//prices[i] - min ensures selling price is on or atleast a day after buying price
		} else if (prices[i] - min > profit) {
			profit = prices[i] - min
			profitPrices = []
			profitPrices.push(min, prices[i])
		}
	}

	return profitPrices
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
