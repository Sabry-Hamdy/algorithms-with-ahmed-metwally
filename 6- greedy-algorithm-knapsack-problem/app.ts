function sort([...array]: Item[]) {
  mergeSort(array, 0, array.length - 1);

  return array;
}

function mergeSort(array: Item[], start: number, end: number) {
  if (start >= end) return;

  let mid: number = Math.floor((start + end) / 2);

  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);

  merge(array, start, mid, end);
}

function merge(array: Item[], start: number, mid: number, end: number) {
  let i: number, j: number, k: number;

  let leftLength: number = mid - start + 1;
  let rightLength: number = end - mid;

  let leftArray: Item[] = [];
  let rightArray: Item[] = [];

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
    if (leftArray[i].ratio >= rightArray[j].ratio) {
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

class Knapsack {
  public maxCapacity: number;
  public currentCapacity: number = 0;
  public totalValue: number = 0;
  public items: Item[] = [];

  constructor(maxCapacity: number) {
    this.maxCapacity = maxCapacity;
  }

  addItem(item: Item) {
    if (item.weight + this.currentCapacity > this.maxCapacity) {
      let diff: number = this.maxCapacity - this.currentCapacity;
      item.weight = diff;
      item.value = diff * item.ratio;
    }

    this.items.push(item);
    this.currentCapacity += item.weight;
    this.totalValue += item.value;
  }
}

class Item {
  public value: number;
  public weight: number;
  public name: string;
  public ratio: number;

  constructor(value: number, weight: number, name: string) {
    this.value = value;
    this.weight = weight;
    this.name = name;
    this.ratio = this.value / this.weight;
  }
}

let values: number[] = [4, 9, 12, 11, 6, 5];
let weights: number[] = [1, 2, 10, 4, 3, 5];

let items: Item[] = [];

// n
for (let i = 0; i < values.length; i++) {
  let newItem: Item = new Item(values[i], weights[i], "#" + (i + 1));
  items[i] = newItem;
}

let sortedItems = sort(items); // n * log n
let bag: Knapsack = new Knapsack(12);

let i = 0;
// n
while (bag.currentCapacity < bag.maxCapacity) {
  bag.addItem(sortedItems[i]);
  i++;
}

console.log(bag.items);
console.log(bag.currentCapacity);
console.log(bag.totalValue);
