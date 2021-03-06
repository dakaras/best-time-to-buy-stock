// Say you have an array
// for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

//     Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Not 7 - 1 = 6, as selling price needs to be larger than buying price.
// Example 2:

//     Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this
// case, no transaction is done, i.e.max profit = 0.
var maxProfit = function (prices) {
    let buy = prices[0]
    prices[0] = 0
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i]
            prices[i] = 0
        } else {
            profit = Math.max(prices[i] - buy, profit)
        }
    }
    return profit
};
//Best Time to Buy and Sell Stock II
// Say you have an array
// for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

// Example 1:

//     Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
// Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.
// Example 2:

//     Input: [1, 2, 3, 4, 5]
// Output: 4
// Explanation: Buy on day 1(price = 1) and sell on day 5(price = 5), profit = 5 - 1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time.You must sell before buying again.
// Example 3:

//     Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this
// case, no transaction is done, i.e.max profit = 0.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = null;
    let max = null;
    let isUp = false;
    let profit = 0;

    for (let index = 0; index < prices.length; ++index) {
        let item = prices[index]
        if (min === null || max === null) {
            min = item;
            max = item;
            continue;
        }

        // ищем до понижения
        if (isUp) {
            // покупка и продажа
            if (item < max) {
                profit += max - min;
                isUp = false;
                max = item;
                min = item;
            } else {
                max = item;
            }
        } else { // ищем минималку
            if (item > max) {
                max = item;
                isUp = true
            } else {
                min = item;
                max = item;
            }
        }
    }
    if (isUp && max > min) {
        profit += max - min;
    }
    return profit;
};