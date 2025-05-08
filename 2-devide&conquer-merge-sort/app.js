function segregate(array, start, end) {
  // base case
  if (start >= end) return;

  let midpoint = Math.floor((start + end) / 2);

  segregate(array, start, midpoint);
  segregate(array, midpoint + 1, end);

  merge(array, start, midpoint, end);
}

function merge(array, start, midpoint, end) {
  let i, j, k;

  let leftLength = midpoint - start + 1;
  let rightLength = end - midpoint;

  let leftArray = [];
  let rightArray = [];

  for (i = 0; i < leftLength; i++) {
    leftArray[i] = array[start + i];
  }

  for (j = 0; j < rightLength; j++) {
    rightArray[j] = array[midpoint + 1 + j];
  }

  i = 0;
  j = 0;
  k = start;

  while (i < leftLength && leftArray[i] < 0) {
    array[k] = leftArray[i];

    i++;
    k++;
  }

  while (j < rightLength && rightArray[j] < 0) {
    array[k] = rightArray[j];

    j++;
    k++;
  }

  while (i < leftLength) {
    array[k] = leftArray[i];

    i++;
    k++;
  }

  while (j < rightLength) {
    array[k] = rightArray[j];

    j++;
    k++;
  }
}

let x = [3, 4, 2, -3, 2, -4, -6, -2];

console.log(x);
segregate(x, 0, x.length - 1);

console.log(x);
