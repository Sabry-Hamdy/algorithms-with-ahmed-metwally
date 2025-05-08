var items = [
    {
        name: "#1",
        weight: 1,
        profit: 4,
    },
    {
        name: "#2",
        weight: 3,
        profit: 9,
    },
    {
        name: "#3",
        weight: 5,
        profit: 12,
    },
    {
        name: "#4",
        weight: 4,
        profit: 11,
    },
];
var max_weight = 8;
var dp = [];
var n = items.length;
items.splice(0, 0, { name: "#0", weight: 0, profit: 0 });
for (var i_1 = 0; i_1 <= n; i_1++) {
    dp[i_1] = [];
    for (var j = 0; j <= max_weight; j++) {
        // first fill first row and column with 0
        if (i_1 === 0 || j === 0) {
            dp[i_1][j] = 0;
            continue;
        }
        var itemWeight = items[i_1].weight;
        var stageWeight = j;
        var itemProfit = items[i_1].profit;
        var top_1 = dp[i_1 - 1][j];
        var index = stageWeight - itemWeight;
        var value = dp[i_1 - 1][index];
        var profitValue = value + itemProfit;
        if (itemWeight <= stageWeight) {
            dp[i_1][j] = Math.max(top_1, profitValue);
        }
        else {
            dp[i_1][j] = top_1;
        }
    }
}
var solution = [];
var i = n;
var remain = max_weight;
while (remain >= 0) {
    var top_2 = dp[i - 1][remain];
    var currentValue = dp[i][remain];
    if (currentValue > top_2) {
        solution.push(items[i].name);
        remain = remain - items[i].weight;
        i--;
    }
    else {
        i--;
    }
}
console.log(solution);
