interface PriorityQueueItem<T> {
  priority: number;
  data: T;
}

class PriorityQueue<T> {
  private heap: PriorityQueueItem<T>[] = [];

  constructor(private comparator: (a: number, b: number) => boolean = (a, b) => a < b) {}

  // Basic operations
  public enqueue(data: T, priority: number): void {
    this.heap.push({ priority, data });
    this.bubbleUp(this.heap.length - 1);
  }

  public dequeue(): T | null {
    if (this.isEmpty()) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0 && end) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min.data;
  }

  public peek(): T | null {
    return this.isEmpty() ? null : this.heap[0].data;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public size(): number {
    return this.heap.length;
  }

  // Heap maintenance methods
  private bubbleUp(index: number): void {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (this.comparator(element.priority, parent.priority)) {
        this.heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
    this.heap[index] = element;
  }

  private sinkDown(index: number): void {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: PriorityQueueItem<T> | undefined;
      let rightChild: PriorityQueueItem<T> | undefined;
      let swap: number | null = null;

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

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }
}

interface HNode {
  data: string;
  freq: number;
  leftNode: HeapNode | null;
  rightNode: HeapNode | null;
}

class HeapNode implements HNode {
  data: string;
  freq: number;
  leftNode: HeapNode | null;
  rightNode: HeapNode | null;

  constructor(data: string, freq: number) {
    this.data = data;
    this.freq = freq;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class Huffman {
  minHeap: PriorityQueue<HeapNode> = new PriorityQueue<HeapNode>();
  emptyChar: string = "";
  codes: Map<string, string> = new Map();

  public constructor(message: string) {
    let freqHash = new Map<string, number>();

    for (let i = 0; i < message.length; i++) {
      const currentFreq = freqHash.get(message[i]);

      if (currentFreq === undefined) {
        freqHash.set(message[i], 1);
      } else {
        freqHash.set(message[i], currentFreq + 1);
      }
    }

    freqHash.forEach((freq, char) => {
      let newNode: HeapNode = new HeapNode(char, freq);
      this.minHeap.enqueue(newNode, freqHash.get(char)!);
    });

    let top: HeapNode, left: HeapNode, right: HeapNode;
    let newFreq: number;

    while (this.minHeap.size() != 1) {
      left = this.minHeap.dequeue()!;
      right = this.minHeap.dequeue()!;
      newFreq = left.freq + right.freq;
      top = new HeapNode(this.emptyChar, newFreq);
      top.leftNode = left;
      top.rightNode = right;
      this.minHeap.enqueue(top, top.freq);
    }

    this.generateCodes(this.minHeap.peek()!, this.emptyChar);
  }

  private generateCodes(node: HeapNode | null, str: string) {
    if (node === null) return;

    if (node.data !== this.emptyChar) {
      this.codes.set(node.data, str);
    }

    this.generateCodes(node.leftNode, str + "0");
    this.generateCodes(node.rightNode, str + "1");
  }
}

let h = new Huffman("internet");

h.codes.forEach((value, key) => console.log(key + ": " + value));
