function insertionSort(x) {
  for (let i = 1; i < x.length; i++) {
    let key = x[i]; // 2

    for (var j = i - 1; j >= 0; --j) {
      if (key < x[j]) {
        x[j + 1] = x[j];
      } else {
        break;
      }
    }

    x[j + 1] = key;
  }

  console.log(x);
}

insertionSort([5, 2, 6, 23, 7, 1, 8]);
