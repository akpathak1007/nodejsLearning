const visibility = isVisible();
practice(visibility.threeSum, () => {
  const qucikSort = (arr, start, end) => {
    if (start >= end) return;
    const partition = (start, end) => {
      const pivot = arr[end];
      const pivotIndex = end;
      let partitionIndex = start - 1;
      for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
          [arr[i], arr[partitionIndex + 1]] = [arr[partitionIndex + 1], arr[i]];
          partitionIndex++;
        }
      }
      [arr[partitionIndex + 1], arr[pivotIndex]] = [
        arr[pivotIndex],
        arr[partitionIndex + 1],
      ];
      return partitionIndex + 1;
    };
    let partitionIndex = partition(start, end);
    qucikSort(arr, start, partitionIndex - 1);
    qucikSort(arr, partitionIndex + 1, end);
  };
  let input = [-1, 0, 1, 2, -1, -4];
  input = [-2, 0, 1, 0, 0, 2, 2];
  input = [-4, -2, -2, -2, 0, 2, 2, 2, 4];
  let result = [];
  qucikSort(input, 0, input.length - 1); // time O(n log n)
  for (let i = 0; i < input.length; i++) {
    if (i > 0 && input[i] === input[i - 1]) continue;
    let start = i + 1;
    let end = input.length - 1;
    let fixed = input[i];
    let complement = 0 - fixed;
    while (start < end) {
      let startElement = input[start];
      let endElement = input[end];
      let sum = startElement + endElement;
      if (sum === complement) {
        if (startElement !== input[start - 1] || endElement !== input[end + 1])
          result.push([fixed, input[start], input[end]]);
        start++;
        end--;
      } else if (sum < complement) {
        start++;
      } else if (sum > complement) {
        end--;
      }
    }
  }
  console.log(result);
});

// More cleaner approach then before
// Here we will using bountries
practice(visibility.printMatrixInSpiralOrderCleaner, () => {
  const handler = (arr) => {
    const height = arr.length;
    const width = arr[0].length;
    let top = 0;
    let right = width - 1;
    let bottom = height - 1;
    let left = 0;
    let result = [];
    while (left <= right && top <= bottom) {
      for (let j = top; j <= right; j++) {
        result.push(arr[top][j]);
      }
      top++;
      let i = top;
      for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
      }
      right--;
      if (top <= bottom) {
        for (let j = right; j >= left; j--) {
          result.push(arr[bottom][j]);
        }
        bottom--;
      }
      if (left <= right && top <= bottom) {
        for (let i = bottom; i >= top; i--) {
          result.push(arr[i][left]);
        }
        left++;
      }
    }
    return result;
  };
  const result6 = handler([[1, 2, 3, 4, 5]]);
  console.log(result6);

  const result3 = handler([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ]);

  console.log(result3);
  const result2 = handler([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
    [13, 14, 15],
    [88, 99, 100],
  ]);
  console.log(result2);

  const result1 = handler([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]);
  console.log(result1);
  const result4 = handler([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  console.log(result4);
});

// Here we use boundry state and iterating.
practice(visibility.printMatrixInSpiralOrder, () => {
  const handler = (arr) => {
    const length = arr.length;
    const matrixWidth = arr[0].length;
    const layers = Math.floor(Math.min(length, matrixWidth) / 2);
    const result = [];
    for (let layer = 0; layer < layers; layer++) {
      let i = layer;
      let j = layer;
      let width = matrixWidth - 1 - i;
      let height = length - 1 - i;
      let isLayerProcessing = true;
      let top = true;
      let left = false;
      let bottom = false;
      let right = false;
      while (isLayerProcessing) {
        if (i == layer + 1 && j === layer) {
          isLayerProcessing = false;
        }
        if (top) {
          result.push(arr[i][j]);
          if (j == width) {
            i++;
            top = false;
            left = true;
            continue;
          }
          j++;
        }
        if (left) {
          result.push(arr[i][j]);
          if (i === height) {
            j--;
            left = false;
            bottom = true;
            continue;
          }
          i++;
        }
        if (bottom) {
          result.push(arr[i][j]);
          if (j === layer) {
            i--;
            bottom = false;
            right = true;
            continue;
          }
          j--;
        }
        if (right) {
          result.push(arr[i][j]);
          if (i === layer + 1) {
            right = false;
            continue;
          }
          i--;
        }
      }
    }
    // Push the remaining elements
    const remainingRow = length - layers * 2;
    const remainingColumns = matrixWidth - layers * 2;
    if (remainingColumns === 0 || remainingRow === 0) {
    } else if (remainingRow === 1 && remainingColumns === 1) {
      result.push(arr[layers][layers]);
    } else if (remainingColumns > remainingRow) {
      for (let k = layers; k < layers + remainingColumns; k++) {
        result.push(arr[layers][k]);
      }
    } else if (remainingRow > remainingColumns) {
      for (let k = layers; k < layers + remainingRow; k++) {
        result.push(arr[k][layers]);
      }
    }
    return result;
  };
  const result3 = handler([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ]);
  console.log(result3);
  const result2 = handler([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
    [13, 14, 15],
    [88, 99, 100],
  ]);
  console.log(result2);

  const result1 = handler([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]);
  console.log(result1);
  const result = handler([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  console.log(result);
});
practice(visibility.rotateImageCleaner, () => {
  const handler = (arr) => {
    const length = arr.length;
    const layersToRotate = Math.floor(length / 2);
    for (let i = 0; i < layersToRotate; i++) {
      for (let j = i; j < length - 1 - i; j++) {
        let originalElement = null;
        let shiftedI = i;
        let shiftedJ = j;
        debugger;
        originalElement = arr[i][j];
        debugger;
        let shiftWithNextElement = () => {
          debugger;
          const temp = shiftedI;
          shiftedI = shiftedJ;
          shiftedJ = length - 1 - temp;
          let shiftedElement = arr[shiftedI][shiftedJ];
          arr[shiftedI][shiftedJ] = originalElement;
          originalElement = shiftedElement;
          debugger;
        };
        // First Element rotate in current cycle;
        shiftWithNextElement();
        debugger;
        // second Element rotate in current cycle;
        shiftWithNextElement();
        debugger;
        // third Element rotate in current cycle;
        shiftWithNextElement();
        debugger;
        // fourth Element rotate in current cycle;
        shiftWithNextElement();
        debugger;
      }
    }
  };
  log([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  log([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    handler(arr);
    for (let i of arr) {
      console.log(i);
    }
  }
});

// Basic idea is to shift element with the correct element after rotate;
// After visually analyze each shift element has patter;
// to decide the current element next location is try these
// i = j & j= n-1-i this will you the location of the shift;
// to decide how many layer we have to shift use Math.floor(n/2);
// if n is even then all layers must rotate
// if n is odd there is alway one center element left
// for there is no need to rotate;
practice(visibility.rotateImage, () => {
  const handler = (arr) => {
    const length = arr.length;
    const layersToRotate = Math.floor(length / 2);

    // i is to rotate layers;
    for (let i = 0; i < layersToRotate; i++) {
      // j is to rotate elements in a layer
      // j starting and end point depend of i;
      // after analyzing the image we got j=i, j<length-1-i
      for (let j = i; j < length - 1 - i; j++) {
        // In each j iteration we are moving 4 elements cycle through matrix
        // to their right place
        // First Element rotate;
        let shift1I = j;
        let shift1J = length - 1 - i;
        let shiftElement1 = arr[shift1I][shift1J];
        arr[shift1I][shift1J] = arr[i][j];
        // Second Element rotate;
        let shift2I = shift1J;
        let shift2J = length - 1 - shift1I;
        let shiftElement2 = arr[shift2I][shift2J];
        arr[shift2I][shift2J] = shiftElement1;
        // Thirt Element rotate;
        let shift3I = shift2J;
        let shift3J = length - 1 - shift2I;
        let shiftElement3 = arr[shift3I][shift3J];
        arr[shift3I][shift3J] = shiftElement2;
        // Fourth Element rotate;
        let shift4I = shift3J;
        let shift4J = length - 1 - shift3I;
        arr[shift4I][shift4J] = shiftElement3;
      }
    }
  };
  log([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  log([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    handler(arr);
    for (let i of arr) {
      console.log(i);
    }
  }
});

/**
 1- Here we will use first row and column to mark
  with zero so we can identify which row and column
  needs to be zero
 2- First row marks tell which column need to zero
 3- First column marks tell which row need to zero
 3- after marking we will start modify matrix from
  i = 1 and j = 1 espacing first row and column
  we are using it to store information
 4- if first column and row originally has zero for
 that we will maintain to separte boolean variable
 */
practice(visibility.setMaxtrixZero, () => {
  const handler = (arr) => {
    let firstRowHasZero = false;
    let firstColumnHasZero = false;
    const traverse = (start, cb) => {
      for (let i = start; i < arr.length; i++) {
        for (let j = start; j < arr[i].length; j++) {
          cb(arr[i][j], i, j);
        }
      }
    };
    // Marking matrix
    traverse(0, (value, i, j) => {
      if (i === 0 && value === 0) firstRowHasZero = true;
      if (j === 0 && value === 0) firstColumnHasZero = true;
      if (value === 0) {
        arr[0][j] = 0;
        arr[i][0] = 0;
      }
    });
    // modifying matrix
    traverse(1, (value, i, j) => {
      if (arr[0][j] === 0 || arr[i][0] === 0) {
        arr[i][j] = 0;
      }
    });
    //    console.log(firstColumnHasZero, firstRowHasZero);
    let numRows = arr.length;
    let numColumns = arr[0].length;
    if (firstColumnHasZero)
      for (let k = 0; k < numRows; k++) {
        arr[k][0] = 0;
      }
    if (firstRowHasZero)
      for (let k = 0; k < numColumns; k++) {
        arr[0][k] = 0;
      }
  };
  log([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]);
  log([
    [0, 1, 2, 1],
    [3, 4, 1, 1],
    [6, 7, 0, 1],
  ]);

  function log(arr) {
    console.log("### INPUT", arr, "###");
    handler(arr);
    for (let i of arr) {
      console.log(i);
    }
  }
});

// LetCode 73 set matrix zero
// Complexity Time O(R+C)
// Space O(R+C) rowSet and columnSet
practice(visibility.setMaxtrixZeroV1, () => {
  const handler = (matrix) => {
    let zeroRowSet = new Set();
    let zeroColumnSet = new Set();
    const traverse = (arr, cb) => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          cb(arr[i][j], i, j, arr);
        }
      }
    };
    // Get all the zero
    traverse(matrix, (value, i, j, arr) => {
      if (value === 0) {
        zeroRowSet.add(i);
        zeroColumnSet.add(j);
      }
    });
    // Update required index
    traverse(matrix, (value, i, j, arr) => {
      if (zeroRowSet.has(i) || zeroColumnSet.has(j)) {
        arr[i][j] = 0;
      }
    });
    return matrix;
  };
  log([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]);
  log([
    [0, 1, 2, 1],
    [3, 4, 1, 1],
    [6, 7, 0, 1],
  ]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    handler(arr);
    for (let i of arr) {
      console.log(i);
    }
  }
});

// Leet Code 123 Longest consecutive sequence
// Return value will integer
practice(visibility.longestConsecuteSequence, () => {
  const handler = (arr) => {
    const seen = new Set(arr);
    let maxSequence = 0;
    for (let i of seen) {
      let sequence = 1;
      // Identifying i is starting or sequence or no
      // i-1 should not exists;
      if (!seen.has(i - 1)) {
        let sequenceEnd = false;
        let temp = i;
        while (sequenceEnd !== true) {
          if (seen.has(temp + 1)) {
            sequence++;
            temp++;
          } else {
            sequenceEnd = true;
            if (sequence > maxSequence) {
              maxSequence = sequence;
            }
          }
        }
      }
    }
    return maxSequence;
  };
  log([100, 4, 200, 1, 3, 2]);
  log([1, 0, 100, 2, 30, 101, 3, 31, 102, 33, 103, 34, 104]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    const result = handler(arr);
    console.log(result);
  }
});

//LeetCode problem 2149
// Sign should be alternative first positive second negative..
// their order should preserve
practice(visibility.rearrangeElementsBySign, () => {
  const handler = (arr) => {
    const result = [];
    let nextNegativeIndex = 1;
    let nextPositivenIndex = 0;

    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      debugger;
      if (value > 0) {
        result[nextPositivenIndex] = value;
        nextPositivenIndex += 2;
        debugger;
      } else {
        result[nextNegativeIndex] = value;
        nextNegativeIndex += 2;
        debugger;
      }
      debugger;
    }
    return result;
  };
  log([-1, 1]);
  log([3, 1, -2, -5, 2, -4]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    const result = handler(arr);
    console.log(result);
  }
});

// Leet code problem 121
// Tracking the profit
practice(visibility.bestTimeToBuyAndSellStock, () => {
  const handler = (arr) => {
    let buy = arr[0];
    let profit = 0;
    for (let i = 0; i < arr.length; i++) {
      debugger;
      if (buy > arr[i]) {
        buy = arr[i];
        debugger;
      } else if (arr[i] - buy > profit) {
        profit = arr[i] - buy;
        debugger;
      }
    }
    debugger;
    return profit;
  };
  log([7, 1, 5, 3, 6, 4]);
  log([7, 5, 10, 1, 8]);
  log([9, 8, 7, 6, 5]);
  log([]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    const result = handler(arr);
    console.log(result);
  }
});

// Leet Code problem 121
// Here we are tracking the instead of profit
// this is good solution for highest price and lowest price
// after buying at mininum what will be the highest price
practice(visibility.bestTimeToBuyAndSellStockV1, () => {
  const handler = (arr) => {
    let buy = arr[0];
    let buyIndex = 0;
    let sell = 0;
    for (let i = 0; i < arr.length; i++) {
      debugger;
      if (buy > arr[i]) {
        buy = arr[i];
        buyIndex = i;
        debugger;
      } else if (sell < arr[i] && buyIndex < i) {
        sell = arr[i];
        debugger;
      }
    }
    debugger;
    return sell - buy;
  };
  log([7, 1, 5, 3, 6, 4]);
  log([7, 5, 10, 1, 8]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    const result = handler(arr);
    console.log(result);
  }
});

// Leet code problem 53
practice(visibility.largestSumOfContiguousSubArray, () => {
  const handler = (arr) => {
    let maxSum = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      let temp = currentSum + value;
      debugger;
      if (value > temp) {
        currentSum = value;
        debugger;
      } else {
        currentSum += value;
      }
      if (maxSum < currentSum) maxSum = currentSum;
      debugger;
    }

    debugger;
    return maxSum;
  };
  log([-9, -8, -1, -4, -2, -7]);
  log([-2, -9, -5]);
  log([0, -1, -4]);
  log([0]);
  log([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  function log(arr) {
    console.log("### INPUT", arr, "###");
    const result = handler(arr);
    console.log(result);
  }
});

// Leet Code problem 1
practice(visibility.twoSum, () => {
  const handler = (arr, target) => {
    const seen = new Map();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const complement = target - arr[i];
      if (seen.has(complement)) {
        return [seen.get(complement), i];
      }
      seen.set(arr[i], i);
    }
    return null;
  };

  log([2, 7, 11, 15], 9);
  log([3, 2, 4], 6);
  log([3, 3], 6);
  log([1, 5, 8, 3], 11);
  log([2, 7, 11, 15], 20);
  function log(arr, target) {
    console.log("### INPUT", arr, "###");
    const result = handler(arr, target);
    console.log(result);
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
    twoSum: false,
    largestSumOfContiguousSubArray: false,
    bestTimeToBuyAndSellStock: false,
    rearrangeElementsBySign: false,
    longestConsecuteSequence: false,
    setMaxtrixZero: false,
    setMaxtrixZeroV1: false,
    rotateImage: false,
    rotateImageCleaner: false,
    printMatrixInSpiralOrder: false,
    printMatrixInSpiralOrderCleaner: false,
    threeSum: true,
  };

  return testFunction;
}
