interface State {
  from: string;
  to: string;
  cost: number;
}

const labels: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const data: number[][] = [
  [0, 2, 4, 3, 0, 0, 0, 0, 0, 0], // Connections from A
  [0, 0, 0, 0, 7, 4, 6, 0, 0, 0], // Connections from B
  [0, 0, 0, 0, 3, 2, 4, 0, 0, 0], // Connections from C
  [0, 0, 0, 0, 4, 1, 5, 0, 0, 0], // Connections from D
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 0], // Connections from E
  [0, 0, 0, 0, 0, 0, 0, 6, 3, 0], // Connections from F
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0], // Connections from G
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3], // Connections from H
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4], // Connections from I
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Connections from J (none)
];

let n: number = data.length;
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
let i = 0;
let j = 0;

while (i < n) {
  if (path[j] === states[i].from) {
    path[j + 1] = states[i].to;

    j++;
  }

  i++;
}

console.log(states);
console.log(path);
