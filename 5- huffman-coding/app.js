var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(comparator) {
        if (comparator === void 0) { comparator = function (a, b) { return a < b; }; }
        this.comparator = comparator;
        this.heap = [];
    }
    // Basic operations
    PriorityQueue.prototype.enqueue = function (data, priority) {
        this.heap.push({ priority: priority, data: data });
        this.bubbleUp(this.heap.length - 1);
    };
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty())
            return null;
        var min = this.heap[0];
        var end = this.heap.pop();
        if (this.heap.length > 0 && end) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min.data;
    };
    PriorityQueue.prototype.peek = function () {
        return this.isEmpty() ? null : this.heap[0].data;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    PriorityQueue.prototype.size = function () {
        return this.heap.length;
    };
    // Heap maintenance methods
    PriorityQueue.prototype.bubbleUp = function (index) {
        var element = this.heap[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent_1 = this.heap[parentIndex];
            if (this.comparator(element.priority, parent_1.priority)) {
                this.heap[index] = parent_1;
                index = parentIndex;
            }
            else {
                break;
            }
        }
        this.heap[index] = element;
    };
    PriorityQueue.prototype.sinkDown = function (index) {
        var length = this.heap.length;
        var element = this.heap[index];
        while (true) {
            var leftChildIndex = 2 * index + 1;
            var rightChildIndex = 2 * index + 2;
            var leftChild = void 0;
            var rightChild = void 0;
            var swap = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (this.comparator(leftChild.priority, element.priority)) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && this.comparator(rightChild.priority, element.priority)) || (swap !== null && leftChild && this.comparator(rightChild.priority, leftChild.priority))) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null)
                break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    };
    return PriorityQueue;
}());
var HeapNode = /** @class */ (function () {
    function HeapNode(data, freq) {
        this.data = data;
        this.freq = freq;
        this.leftNode = null;
        this.rightNode = null;
    }
    return HeapNode;
}());
var Huffman = /** @class */ (function () {
    function Huffman(message) {
        var _this = this;
        this.minHeap = new PriorityQueue();
        this.emptyChar = "";
        this.codes = new Map();
        var freqHash = new Map();
        for (var i = 0; i < message.length; i++) {
            var currentFreq = freqHash.get(message[i]);
            if (currentFreq === undefined) {
                freqHash.set(message[i], 1);
            }
            else {
                freqHash.set(message[i], currentFreq + 1);
            }
        }
        freqHash.forEach(function (freq, char) {
            var newNode = new HeapNode(char, freq);
            _this.minHeap.enqueue(newNode, freqHash.get(char));
        });
        var top, left, right;
        var newFreq;
        while (this.minHeap.size() != 1) {
            left = this.minHeap.dequeue();
            right = this.minHeap.dequeue();
            newFreq = left.freq + right.freq;
            top = new HeapNode(this.emptyChar, newFreq);
            top.leftNode = left;
            top.rightNode = right;
            this.minHeap.enqueue(top, top.freq);
        }
        this.generateCodes(this.minHeap.peek(), this.emptyChar);
    }
    Huffman.prototype.generateCodes = function (node, str) {
        if (node === null)
            return;
        if (node.data !== this.emptyChar) {
            this.codes.set(node.data, str);
        }
        this.generateCodes(node.leftNode, str + "0");
        this.generateCodes(node.rightNode, str + "1");
    };
    return Huffman;
}());
var h = new Huffman("internet");
h.codes.forEach(function (value, key) { return console.log(key + ": " + value); });
