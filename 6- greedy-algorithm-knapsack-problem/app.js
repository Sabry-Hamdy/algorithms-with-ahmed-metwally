function sort(_a) {
    var array = _a.slice(0);
    mergeSort(array, 0, array.length - 1);
    return array;
}
function mergeSort(array, start, end) {
    if (start >= end)
        return;
    var mid = Math.floor((start + end) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
}
function merge(array, start, mid, end) {
    var i, j, k;
    var leftLength = mid - start + 1;
    var rightLength = end - mid;
    var leftArray = [];
    var rightArray = [];
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
        }
        else {
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
var Knapsack = /** @class */ (function () {
    function Knapsack(maxCapacity) {
        this.currentCapacity = 0;
        this.totalValue = 0;
        this.items = [];
        this.maxCapacity = maxCapacity;
    }
    Knapsack.prototype.addItem = function (item) {
        if (item.weight + this.currentCapacity > this.maxCapacity) {
            var diff = this.maxCapacity - this.currentCapacity;
            item.weight = diff;
            item.value = diff * item.ratio;
        }
        this.items.push(item);
        this.currentCapacity += item.weight;
        this.totalValue += item.value;
    };
    return Knapsack;
}());
var Item = /** @class */ (function () {
    function Item(value, weight, name) {
        this.value = value;
        this.weight = weight;
        this.name = name;
        this.ratio = this.value / this.weight;
    }
    return Item;
}());
var values = [4, 9, 12, 11, 6, 5];
var weights = [1, 2, 10, 4, 3, 5];
var items = [];
// n
for (var i_1 = 0; i_1 < values.length; i_1++) {
    var newItem = new Item(values[i_1], weights[i_1], "#" + (i_1 + 1));
    items[i_1] = newItem;
}
var sortedItems = sort(items); // n * log n
var bag = new Knapsack(12);
var i = 0;
// n
while (bag.currentCapacity < bag.maxCapacity) {
    bag.addItem(sortedItems[i]);
    i++;
}
console.log(bag.items);
console.log(bag.currentCapacity);
console.log(bag.totalValue);
