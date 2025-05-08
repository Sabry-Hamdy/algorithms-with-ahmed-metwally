var labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var data = [
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
var n = data.length;
var states = [];
states[n - 1] = { from: "", to: "", cost: 0 };
for (var i_1 = n - 2; i_1 >= 0; i_1--) {
    states[i_1] = { from: labels[i_1], to: "", cost: Number.MAX_SAFE_INTEGER };
    for (var j_1 = i_1 + 1; j_1 < n; j_1++) {
        if (data[i_1][j_1] === 0)
            continue;
        var newCost = data[i_1][j_1] + states[j_1].cost;
        if (newCost < states[i_1].cost) {
            states[i_1].cost = newCost;
            states[i_1].to = labels[j_1];
        }
    }
}
var path = ["A"];
var i = 0;
var j = 0;
while (j < n) {
    if (path[i] === states[j].from) {
        path[i + 1] = states[j].to;
        i++;
    }
    j++;
}
console.log(states);
console.log(path);
