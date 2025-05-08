class CharFreq {
  constructor() {}

  ASCIIMethod(message) {
    let charFreq = []; // the length will be 127

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (isNaN(charFreq[charCode])) charFreq[charCode] = 0;
      charFreq[charCode]++;
    }

    for (let i = 0; i < charFreq.length; i++) {
      if (charFreq[i] > 0) {
        let char = String.fromCharCode(i);

        console.log(char + ": " + charFreq[i]);
      }
    }
  }

  anyCodeMethod(message) {
    let charFreq = new Map();

    for (let i = 0; i < message.length; i++) {
      if (charFreq[message[i]] === undefined) {
        charFreq[message[i]] = 1;
      } else {
        charFreq[message[i]]++;
      }
    }

    for (let char in charFreq) {
      console.log(char + ": " + charFreq[char]);
    }

    return charFreq;
  }

  sortHashtable(hashtable) {
    let array = [];

    let i = 0;
    for (let char in hashtable) {
      array[i] = [char, hashtable[char]];
      i++;
    }

    this.sort(array, 0, array.length - 1);
    console.log(array);
  }

  sort(array, start, end) {
    if (start >= end) return;

    let midpoint = Math.floor((start + end) / 2);

    this.sort(array, start, midpoint);
    this.sort(array, midpoint + 1, end);

    this.merge(array, start, midpoint, end);
  }

  merge(array, start, midpoint, end) {
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

    while (i < leftLength && j < rightLength) {
      if (leftArray[i][1] <= rightArray[j][1]) {
        array[k] = leftArray[i];

        i++;
      } else {
        array[k] = rightArray[j];

        j++;
      }

      k++;
    }

    // move remaining
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
}

let charFreq = new CharFreq();
let msg = "Hello my name is sabry";

// charFreq.ASCIIMethod("Hello my name is sabry");
let cf = charFreq.anyCodeMethod(msg);
charFreq.sortHashtable(cf);
