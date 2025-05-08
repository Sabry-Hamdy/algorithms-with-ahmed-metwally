// Lesson
// x = [];
// ave, a, b, sd, n, i = 0;

// function sqr(n) {
//   return n + n;
// }

// let x = [];
// let ave = (sum = b = sd = n = 0);

// n = Number(prompt("n = ?"));

// for (let i = 0; i < n; i++) {
//   x[i] = Number(prompt("x[" + i + "]"));

//   ave = Number(ave) + Number(x[i]);
// }

// ave = ave / n;

// for (let i = 0; i < n; i++) {
//   sum += Math.pow(x[i] - ave, 2); // 1, 0, 3 - = -2
// }

// b = sum / n;

// sd = Math.sqrt(b);

// console.log(sd);

// -----------------------------------

// Assignment
// data=string ,x=[], y=[],meanX, meanY, n, i, nom, den, aSum, bSum, rxy=0

let x = [];
let y = [];
let meanX = (meanY = n = nominator = denominator = aSum = bSum = rxy = 0);

const data = prompt("enter data in this form:(14.2,215) (16.4,325) (11.9,185)");
let formattedData = data.replaceAll("(", "").replaceAll(")", "").split(" ");
n = formattedData.length;

for (let i = 0; i < n; i++) {
  x[i] = formattedData.at(i).split(",").at(0);
  y[i] = formattedData.at(i).split(",").at(1);

  meanX += Number(x[i]);
  meanY += Number(y[i]);
}

meanX = meanX / n;
meanY = meanY / n;

for (let i = 0; i < n; i++) {
  nominator += (x[i] - meanX) * (y[i] - meanY);
  aSum += Math.pow(x[i] - meanX, 2);
  bSum += Math.pow(y[i] - meanY, 2);
}

denominator = Math.sqrt(aSum * bSum);

rxy = nominator / denominator;

console.log(rxy);
