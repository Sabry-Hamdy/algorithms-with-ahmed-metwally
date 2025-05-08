function mergeSort(array, start, end) {
  if (end <= start) return;

  let mid = Math.floor((start + end) / 2);

  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);

  merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
  let i, j, k;
  let leftLength = mid - start + 1;
  let rightLength = end - mid;

  let leftArray = [];
  let rightArray = [];

  for (i = 0; i < leftLength; i++) {
    leftArray[i] = array[start + i];
  }

  for (j = 0; j < rightLength; j++) {
    rightArray[j] = array[mid + 1 + j];
  }

  i = 0;
  j = 0;
  k = start;

  while (i < leftLength && j < rightLength) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];

      i++;
    } else {
      array[k] = rightArray[j];

      j++;
    }

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

let x = [7, 2, 8, 3, 88, 23, 534, 23];

console.log(x);
mergeSort(x, 0, x.length - 1);
console.log(x);
