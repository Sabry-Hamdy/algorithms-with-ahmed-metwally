function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    // n
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === key) {
      return `your value is: ${array[mid]}, at index: ${mid} in the array`;
    } else if (array[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(x, 11));
