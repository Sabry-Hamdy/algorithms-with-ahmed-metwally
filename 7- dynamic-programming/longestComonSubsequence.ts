let text_01: string = "HELLOWORLD";
let text_02: string = "OHELOD";
const n_1: number = text_01.length;
const n_2: number = text_02.length;

text_01 = " " + text_01;
text_02 = " " + text_02;

let dp: number[][] = [];

for (let i = 0; i <= n_2; i++) {
  dp[i] = [];

  for (let j = 0; j <= n_1; j++) {
    if (i === 0 || j === 0) {
      dp[i][j] = 0;
    } else if (text_02[i] === text_01[j]) {
      let topLeft: number = dp[i - 1][j - 1];

      dp[i][j] = 1 + topLeft;
    } else {
      let top: number = dp[i - 1][j];
      let left: number = dp[i][j - 1];

      dp[i][j] = Math.max(top, left);
    }
  }
}

let str: string = "";
let i: number = n_2;
let j: number = n_1;

while (i > 0 && j > 0) {
  if (dp[i][j] > dp[i][j - 1]) {
    if (dp[i][j] === dp[i - 1][j]) {
      // no match, move to top
      i--;
    } else {
      // the is a match, move to top row
      str = text_02[i] + str;
      i--;
      j--;
    }
  } else {
    // nothing, then move to next cell in the row (next column)
    j--;
  }
}

console.log(dp);
console.log(str);
