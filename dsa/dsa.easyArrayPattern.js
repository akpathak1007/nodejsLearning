const visibility = isVisible();

practice(visibility.consecutiveOnes, () => {
  const handler = (arr) => {
    let len = arr.length;
    let consecutive = 0;
    let consecutiveSecond = 0;
    for (let i = 0; i < len; i++) {
      debugger;
      if (arr[i] === 1) {
        consecutive++;
        if (consecutive >= consecutiveSecond) {
          consecutiveSecond = consecutive;
        }
        debugger;
      } else if (arr[i] === 0) {
        consecutive = 0;
        debugger;
      }
      debugger;
    }

    const temp =
      consecutive > consecutiveSecond ? consecutive : consecutiveSecond;
    console.log(temp);
  };
  handler([0, 1, 0, 0, 1, 1, 0, 1]);
  handler([]);
  handler([1, 1, 0, 1, 1, 1]);
  handler([0, 1, 0, 0, 1, 0, 1]);
  handler([1, 0, 0, 0, 0, 0]);
  handler([0, 0, 0, 0, 0]);
  handler([1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1]);
});

// Solving with XOR operator
// baisc idea is to cancel all pairs which xor does
// perfactly. 5^5^2^6^6 = 2, xor works of bits.
// 1^1 = 0, 0^0= 0, 0^1=1, 1^0=1
// 5^5 => 101^101 => 000= 0,
// 5^0 => 101^000=>101 = 5
// XOR with same number gives 0
practice(visibility.findMissingNumber, () => {
  const handler = (arr) => {
    let len = arr.length;
    let xor = 0;
    for (let i = 0; i <= arr.length; i++) {
      xor ^= i;
      xor ^= arr[i];
    }
    console.log(xor);
  };
  handler([0, 1]);
  handler([9, 6, 4, 2, 3, 5, 7, 0, 1]);
  handler([3, 0, 1]);
});

//  Mathematical solution- basic idea is to sum
// all 0 to n values and minus the sum for array element
practice(visibility.findMissingNumberV2, () => {
  const handler = (arr) => {
    const len = arr.length;
    let elementsSum = 0;
    let indexSum = len;
    for (let i = 0; i < len; i++) {
      elementsSum += arr[i];
      indexSum += i;
    }
    console.log(indexSum - elementsSum);
  };
  handler([0, 1]);
  handler([9, 6, 4, 2, 3, 5, 7, 0, 1]);
  handler([3, 0, 1]);
});
// return a missing number - index re-arrangement solution
// A bit complex avoid it
practice(visibility.findMissingNumberV1, () => {
  const handler = (arr) => {
    arr.length = arr.length + 1;
    let len = arr.length;
    let emptyIndex = len;
    for (let i = 0; i < arr.length; i++) {
      let index = arr[i];
      debugger;
      if (!index) {
        emptyIndex = i;
      }
      [arr[i], arr[index]] = [arr[index], arr[i]];
      debugger;
    }
    console.log(arr, emptyIndex + 1);
  };
  handler([0, 1]);
  handler([9, 6, 4, 2, 3, 5, 7, 0, 1]);
  handler([3, 0, 1]);
});
practice(visibility.mergeTwoArrayWithoutDuplicate, () => {
  const handler = (arr1, arr2) => {
    let scanner1 = 0;
    let scanner2 = 0;
    let result = [];
    let scanRemainning = (index, arr) => {
      while (index < arr.length) {
        debugger;
        if (arr[index] !== arr[index - 1]) {
          result.push(arr[index]);
        }
        index++;
        debugger;
      }
    };
    while (scanner1 < arr1.length && scanner2 < arr2.length) {
      let a = arr1[scanner1];
      let b = arr2[scanner2];
      debugger;
      let insertValue = null;
      if (a < b) {
        insertValue = a;
        scanner1++;
      } else if (b < a) {
        insertValue = b;
        scanner2++;
      } else if (a == b) {
        insertValue = a;
        scanner1++;
        scanner2++;
      }
      if (result[result.length - 1] !== insertValue) result.push(insertValue);
      debugger;
    }
    // Array one remaining elements
    scanRemainning(scanner1, arr1);
    // Array two remaining elements
    scanRemainning(scanner2, arr2);
    return result;
  };
  log([1, 1, 2, 3], [2, 3, 3, 4]);
  log([1, 2, 3, 4, 5], [2, 3, 4, 6, 7, 7]);
  log([1, 2], [2, 2, 3]);
  log([0], [0]);
  log([1], [2]);
  log([0], [1]);
  function log(input, input2) {
    const result = handler(input, input2);
    console.log(result);
  }
});

// Return the index for first occurrence
practice(visibility.linearSearchV1, () => {
  console.log("Linear Search");
  const handler = (arr, target) => {
    if (!Array.isArray(arr) || target === undefined) {
      return { message: "Array and target is required" };
    }
    if (arr.length == 0) {
      return -1;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  };
  log([], 1);
  log([9], 10);
  log([12, 4, 1, 5, 5], 5);
  function log(input, input2) {
    const result = handler(input, input2);
    console.log(result);
  }
});

practice(visibility.moveZeroToEnd, () => {
  console.log("Move leff to zero");
  const handler = (arr) => {
    let writeIndex = -1;
    let i = 0;
    while (i < arr.length) {
      const scanned = arr[i];
      if (scanned !== 0) {
        ++writeIndex;
        [arr[i], arr[writeIndex]] = [arr[writeIndex], arr[i]];
        debugger;
      }
      i++;
      debugger;
    }
    console.log(arr);
  };
  handler([0, 1, 0, 3, 12]);
  handler([1, 2, 3, 4, 5, 6, 7]);
  handler([0, 0, 0, 0, 8]);
  handler([0, 0, 0, 0, 0, 1]);
  handler([0, 0, 0, 0, 0, 0]);
  handler([0, 1, 0, 2, 0, 3, 4, 0, 5]);
  handler([0]);
  handler([1]);
  handler([]);
});

practice(visibility.moveZeroToEndV1, () => {
  console.log("Move leff to zero");
  const handler = (arr) => {
    let slowPointer = arr.length;
    let i = 0;
    while (i < slowPointer) {
      const scanned = arr[i];
      if (scanned === 0) {
        --slowPointer;
        [arr[i], arr[slowPointer]] = [arr[slowPointer], arr[i]];
        debugger;
      }
      i++;
      debugger;
    }
    console.log(arr);
  };
  handler([0, 1, 0, 2, 0, 3, 4, 0, 5]);
  handler([0, 1, 0, 3, 12]);
  handler([1, 2, 3, 4, 5, 6, 7]);
  handler([0, 0, 0, 0, 8]);
  handler([0, 0, 0, 0, 0, 1]);
  handler([0, 0, 0, 0, 0, 0]);

  handler([0]);
  handler([1]);
  handler([]);
});

practice(visibility.rightRotateWithKPlace, () => {
  console.log("K places right rotate");
  const handler = (arr, k) => {
    if (arr.length <= 1) {
      console.log(arr);
      return;
    }
    // here we are rotating by the remainder of
    //arr.length and k
    k = k % arr.length;
    let len = arr.length - 1;
    let partitionIndex = len - k;
    const swap = (leftIndex, rightIndex) => {
      while (leftIndex < rightIndex) {
        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
        leftIndex++;
        rightIndex--;
        debugger;
      }
    };
    // Left Partition Swap
    swap(0, partitionIndex);
    //Right Partition Swap
    swap(partitionIndex + 1, len);
    // Whole Array Swap
    swap(0, len);
    console.log(arr);
  };
  handler([1, 1, 2, 2, 3, 4, 4, 5], 7);
  handler([], 1);
  handler([1, 2, 3, 4, 5], 0);
  handler([1, 2, 3, 4, 5], 5);
  handler([1, 2, 3, 4, 5], 7);
  handler([1, 2, 3, 4, 5], 12);
});

// We are doing reverse traversing and update current
// value with previous value arr[i]= arr[i-1];
// storing last value in a variable for later update
practice(visibility.rightRotateWithOnePlaceV1, () => {
  console.log("Rotate right by One place");
  const handler = (arr) => {
    let len = arr.length;
    if (arr.length <= 1) {
      return arr;
    }
    const last = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      debugger;
      arr[i] = arr[i - 1];
      debugger;
    }
    arr[0] = last;
    return arr;
  };
  console.log(handler([1, 1, 2, 2, 3, 4, 4, 5]));
  console.log(handler([1, 1, 1, 1]));
  console.log(handler([1, 2, 3, 4]));
  console.log(handler([]));
  console.log(handler([5]));
  console.log(handler([-3, -3, -2, -2, 0, 1, 1]));
});
// Solve the problem with replacement method
// we are storing the current value in variable
// in each iteration we are updating arr[i] with
// replacement
practice(visibility.rightRotateWithOnePlace, () => {
  console.log("Rotate right by One place");
  const handler = (arr) => {
    let len = arr.length;
    if (arr.length <= 1) {
      return arr;
    }
    len = len - 1; // Zero based index
    let replacement = arr[len];
    for (let i = 0; i <= len; i++) {
      const current = arr[i];
      arr[i] = replacement;
      replacement = current;
    }
    return arr;
  };
  console.log(handler([1, 1, 2, 2, 3, 4, 4, 5]));
  console.log(handler([1, 1, 1, 1]));
  console.log(handler([1, 2, 3, 4]));
  console.log(handler([]));
  console.log(handler([5]));
  console.log(handler([-3, -3, -2, -2, 0, 1, 1]));
});

// Array is sorted mean all the same value will
// be adjacent we can simply compare previous value
// if it is equal we can remove it and keep the unique
// boundry index to truncate array later
practice(visibility.removeDuplicatesFromSortedArray, () => {
  const handler = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let uniqueBoundry = 0;
    let previous = arr[0];
    for (let i = 1; i < arr.length; i++) {
      debugger;
      if (arr[i] !== previous) {
        uniqueBoundry++;
        arr[uniqueBoundry] = arr[i];
      }
      previous = arr[i];
      debugger;
    }
    arr.length = uniqueBoundry + 1;
    return { arr, len: arr.length };
  };
  console.log(handler([1, 1, 2, 2, 3, 4, 4, 5]));
  console.log(handler([1, 1, 1, 1]));
  console.log(handler([1, 2, 3, 4]));
  console.log(handler([]));
  console.log(handler([5]));
  console.log(handler([-3, -3, -2, -2, 0, 1, 1]));
});

// This solution is best when array is not sorted
// for sorted check v3
// One improvement we dont need to use delete and set
// we can simply keep the unique portion boundry index
// later we can trucate arr.length = boundry
practice(visibility.removeDuplicatesFromUnsortedArray, () => {
  const handler = (arr) => {
    if (arr.length <= 1) return arr;
    const seen = new Set();
    seen.add(arr[0]);
    let uniqueBoundry = 0;
    for (let i = 1; i < arr.length; i++) {
      debugger;
      if (!seen.has(arr[i])) {
        uniqueBoundry++;
        arr[uniqueBoundry] = arr[i];
        seen.add(arr[i]);
      }

      debugger;
    }
    arr.length = uniqueBoundry + 1;
    return { arr, len: arr.length };
  };
  console.log(handler([1, 9, 1, 7, 2, 7, 6, 9, 3, 4]));
  console.log(handler([5, 4, 2, 2, 3, 1, 4, 5]));
  console.log(handler([1, 1, 1, 1]));
  console.log(handler([]));
  console.log(handler([5]));
  console.log(handler([-3, -9, -3, -10, -9, -2, 0, 1, 1]));
});

practice(visibility.removeDuplicatesFromSortedArrayV1, () => {
  const handler = (arr) => {
    const seen = new Set();
    let deletedIndex;
    let deletedCount = 0;
    for (let i = 0; i < arr.length; i++) {
      debugger;
      if (seen.has(arr[i])) {
        delete arr[i];
        if (deletedIndex !== null) deletedIndex = i;
        deletedCount++;
        debugger;
      } else if (deletedIndex) {
        arr[deletedIndex] = arr[i];
        delete arr[i];
        deletedIndex = null;
        debugger;
      }
      seen.add(arr[i]);
      debugger;
    }

    return arr;
  };
  console.log(handler([1, 1, 2, 2, 3, 4, 4, 5]));
  console.log(handler([1, 1, 1, 1]));
  console.log(handler([1, 2, 3, 4]));
  console.log(handler([]));
  console.log(handler([5]));
  console.log(handler([-3, -3, -2, -2, 0, 1, 1]));
});

practice(visibility.checkArrayIsSorted, () => {
  const handler = (arr) => {
    let previous = arr[0];
    let ascending = true;
    let descending = true;
    for (let i of arr) {
      debugger;
      if (previous > i) {
        ascending = false;
      }
      if (previous < i) {
        descending = false;
      }
      previous = i;
      if (!ascending && !descending) {
        return false;
      }
      debugger;
    }
    return ascending || descending;
  };
  console.log(handler([-9, -8, -10, -7, -5]));
  console.log(handler([5, 4, 3, 2, 1])); // false
  console.log(handler([1, 2, 3, 4, 5])); // true
  console.log(handler([1, 2, 2, 4, 5])); // true
  console.log(handler([1, 3, 2, 4])); // false
  console.log(handler([-9, -8, -7, -5]));
  console.log(handler([])); // ?
  console.log(handler([7])); // ?
  console.log(handler([1, 1, 1, 1, 1]));
});

practice(visibility.checkArrayIsSortedAscending, () => {
  const handler = (arr) => {
    let checker = arr[0];
    for (let i of arr) {
      debugger;
      if (checker > i) {
        return false;
      }
      checker = i;
      debugger;
    }
    return true;
  };
  console.log(handler([-9, -8, -10, -7, -5])); // false
  console.log(handler([5, 4, 3, 2, 1])); // false
  console.log(handler([1, 2, 3, 4, 5])); // true
  console.log(handler([1, 2, 2, 4, 5])); // true
  console.log(handler([1, 3, 2, 4])); // false
  console.log(handler([])); // true
  console.log(handler([7])); // true
  console.log(handler([1, 1, 1, 1, 1])); //true
});

// Here we will not use two pointers
// we will use signle pass which has the same complexity
// as last two solutions but cleaner code
practice(visibility.findSecondOnePass, () => {
  const handler = (arr) => {
    if (arr.length < 1) {
      return "Ivalid array or empty array";
    }
    let largest = -Infinity;
    let second = -Infinity;
    for (let i of arr) {
      if (i > largest) {
        second = largest;
        largest = i;
      } else if (i < largest && i > second) {
        second = i;
      }
      debugger;
    }
    if (second === -Infinity) second = null;
    return { largest, second: second };
  };

  console.log(handler([5, 5, 3]));
  console.log(handler([10, 10, 10]));

  console.log(handler([-1, -9, -8]));
  console.log(handler([1, 200]));
  console.log(handler([200, 1]));
  console.log(handler([0.1, 0, -1]));
  console.log(handler([5, 8, 2, 10, 9, 3, 7, 1]));
  console.log(handler([5, 8, 20, 10, 3, 7]));
  console.log(handler([]));
  console.log(handler([0]));
  console.log(handler([9]));
});

// Here the idea after asking chatgpt
// once the largest is updated then what happen to the last largest value
// this one has still issue and heavy logics
practice(visibility.findSecondLargestLeftAndRightCorrect, () => {
  const data = [5, 8, 2, 10, 9, 3, 7, 1];
  const handler = (arr) => {
    if (arr.length < 2) {
      return "Array length should be 2";
    }
    let left = 0;
    let right = arr.length - 1;
    let largest = arr[0];
    let second = null;
    while (left <= right) {
      let leftValue = arr[left];
      let rightValue = arr[right];
      debugger;

      if (leftValue > largest) {
        second = largest;
        largest = leftValue;
      }
      if (rightValue > largest) {
        second = largest;
        largest = rightValue;
      }

      debugger;
      left++;
      right--;
    }
    debugger;
    return { largest, second };
  };

  console.log(handler([10, 10]));
  console.log(handler([10, 10, 10]));
  console.log(handler([5, 5, 3]));
  console.log(handler([-1, -9, -8]));
  console.log(handler([1, 200]));
  console.log(handler([200, 1]));
  console.log(handler([0.1, 0, -1]));
  console.log(handler(data));
  console.log(handler([5, 8, 20, 10, 3, 7]));
  console.log(handler([]));
  console.log(handler([0]));
  console.log(handler([9]));
});

// My Logic without help
practice(visibility.findSecondLargestLeftAndRight, () => {
  const data = [5, 8, 2, 10, 9, 3, 7, 1];
  const handler = (arr) => {
    if (arr.length < 2) {
      return "Array length should be 2";
    }
    let left = 0;
    let right = arr.length - 1;
    let largest = arr[0];
    let second = arr[0];
    while (left <= right) {
      let leftValue = arr[left];
      let rightValue = arr[right];
      debugger;
      if (leftValue > largest) {
        largest = leftValue;
      }
      if (rightValue > largest) {
        largest = rightValue;
      }
      debugger;
      if (leftValue < largest && leftValue > second) {
        second = leftValue;
      }
      if (rightValue < largest && rightValue > second) {
        second = rightValue;
      }

      debugger;
      left++;
      right--;
    }
    debugger;
    return { largest, second };
  };
  console.log(handler([1, 200]));
  console.log(handler([200, 1]));
  console.log(handler([0.1, 0, -1]));
  console.log(handler(data));
  console.log(handler([5, 8, 20, 10, 3, 7]));
  console.log(handler([]));
  console.log(handler([0]));
  console.log(handler([9]));
});

practice(visibility.findTheLargestLeftAndRight, () => {
  const data = [5, 8, 2, 10, 3, 7, 1];
  const handler = (arr) => {
    if (arr.length <= 1) {
      return arr[0] ?? null;
    }
    let left = 0;
    let right = arr.length - 1;
    let largest = arr[0];
    while (left <= right) {
      let leftValue = arr[left];
      let rightValue = arr[right];
      if (leftValue > largest) {
        largest = leftValue;
      }
      if (rightValue > largest) {
        largest = rightValue;
      }
      left++;
      right--;
    }
    debugger;
    return largest;
  };
  console.log(handler([-1, -2, -9]));
  console.log(handler([]));
  console.log(handler(data));
  console.log(handler([5, 8, 20, 10, 3, 7]));
  console.log(handler([0]));
  console.log(handler([9]));
  console.log(handler([1, 200]));
  console.log(handler([0.1, 0, -1]));
});
practice(visibility.findTheLargestFromMid, () => {
  const data = [5, 8, 2, 10, 3, 7, 20];
  const handler = (arr) => {
    let midIndex = Math.floor(arr.length / 2);
    let left = midIndex;
    let right = midIndex;
    let largest = 0;
    while (left >= 0 || right <= arr.length) {
      let leftValue = arr[left];
      let rightValue = arr[right];
      if (leftValue > largest) {
        largest = leftValue;
      }
      if (rightValue > largest) {
        largest = rightValue;
      }
      left--;
      right++;
    }
    debugger;
    return largest;
  };
  console.log(handler(data));
  console.log(handler([0]));
  console.log(handler([9]));
  console.log(handler([1, 200]));
  console.log(handler([0.1, 0, -1]));
});

practice(visibility.reverseTwoPointer, () => {
  const data = [1, 2, 3, 4, 5];

  const handler = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  log(data);
  log([4, 1, 9, 0]);
  log([]);
  log([1]);
  function log(input) {
    console.log("### INPUT", "###");
    handler(input);
    console.log(input);
  }
});

practice(visibility.reverseArray, () => {
  const data = [1, 2, 3, 4, 5];
  const handler = (arr) => {
    const len = arr.length;
    const mid = len / 2;
    let i = 0;
    while (i < len) {
      let evenLenCheck = i > mid;
      let oddLenCheck = i === Math.ceil(mid);
      if (oddLenCheck || evenLenCheck) {
        break;
      }
      let temp = len - 1;
      [arr[i], arr[temp - i]] = [arr[temp - i], arr[i]];
      i++;
    }
  };

  log(data);
  log([4, 1, 9, 0]);
  log([]);
  log([1]);
  function log(input) {
    console.log("### INPUT", "###");
    handler(input);
    console.log(input);
  }
});

/**
// Template
   practice(visibility, () => {
  let data = null;
  const handler = (data) => {};
log(data);
  function log(input) {
  console.log('### INPUT', '###')
    handler(input);
    console.log(arr);
  }
});
*/
function practice(visibility, cb) {
  if (!visibility) return;
  const startTime = performance.now();
  cb();
  let time = performance.now() - startTime;
  time = time.toFixed(3) + " ms";
  console.log("## Execution Time", time, "\n");
}
function isVisible(name) {
  const testFunction = {
    reverseTwoPointer: false,
    reverseArray: false,
    findTheLargestFromMid: false,
    findTheLargestLeftAndRight: false,
    findSecondLargestLeftAndRight: false,
    findSecondLargestLeftAndRightCorrect: false,
    findSecondOnePass: false,
    checkArrayIsSortedAscending: false,
    checkArrayIsSorted: false,
    removeDuplicatesFromSortedArray: false,
    removeDuplicatesFromUnsortedArray: false,
    rightRotateWithOnePlace: false,
    rightRotateWithOnePlaceV1: false,
    rightRotateWithKPlace: false,
    moveZeroToEnd: false,
    moveZeroToEndV1: false,
    linearSearch: false,
    mergeTwoArrayWithoutDuplicate: false,
    findMissingNumber: false,
    consecutiveOnes: true,
  };

  return testFunction;
}
