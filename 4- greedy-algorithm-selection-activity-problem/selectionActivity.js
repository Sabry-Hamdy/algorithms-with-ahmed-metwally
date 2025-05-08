function selection(start, end) {
  let results = [0];

  let i = 1;
  j = 0;

  for (i; i < start.length; i++) {
    if (start[i] >= end[j]) {
      results.push(i);
      j = i;
    }
  }

  console.log(results);
}

let start = [9, 10, 11, 12, 13, 15];
let end = [11, 11, 12, 14, 15, 16];

selection(start, end);
