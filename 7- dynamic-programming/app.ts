interface Item {
  name: string;
  weight: number;
  profit: number;
}

let items: Item[] = [
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

let max_weight: number = 8;
let dp: number[][] = [];
let n: number = items.length;

items.splice(0, 0, { name: "#0", weight: 0, profit: 0 });

for (let i = 0; i <= n; i++) {
  dp[i] = [];

  for (let j = 0; j <= max_weight; j++) {
    // first fill first row and column with 0
    if (i === 0 || j === 0) {
      dp[i][j] = 0;

      continue;
    }

    let itemWeight: number = items[i].weight;
    let stageWeight: number = j;
    let itemProfit: number = items[i].profit;
    let top: number = dp[i - 1][j];
    let index: number = stageWeight - itemWeight;
    let value: number = dp[i - 1][index];
    let profitValue: number = value + itemProfit;

    if (itemWeight <= stageWeight) {
      dp[i][j] = Math.max(top, profitValue);
    } else {
      dp[i][j] = top;
    }
  }
}

let solution: string[] = [];
let i: number = n;
let remain: number = max_weight;

while (remain >= 0) {
  let top: number = dp[i - 1][remain];
  let currentValue: number = dp[i][remain];

  if (currentValue > top) {
    solution.push(items[i].name);

    remain = remain - items[i].weight;
    i--;
  } else {
    i--;
  }
}
console.log(solution);
