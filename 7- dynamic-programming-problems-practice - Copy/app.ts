interface State {
  from: string;
  to: string;
  cost: number;
}

const labels: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const data: number[][] = [
  [0, 2, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 4, 6, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 1, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const n: number = data.length;
let states: State[] = [];
states[n - 1] = { from: "", to: "", cost: 0 };

for (let i = n - 2; i >= 0; i--) {
  states[i] = { from: labels[i], to: "", cost: Number.MAX_SAFE_INTEGER };

  for (let j = i + 1; j < n; j++) {
    if (data[i][j] === 0) continue;

    let newCost: number = data[i][j] + states[j].cost;

    if (newCost < states[i].cost) {
      states[i].cost = newCost;
      states[i].to = labels[j];
    }
  }
}

let path: string[] = ["A"];
let i: number = 0;
let j: number = 0;
while (j < n) {
  if (path[i] === states[j].from) {
    path[i + 1] = states[j].to;
    i++;
  }

  j++;
}

console.log(states);
console.log(path);
