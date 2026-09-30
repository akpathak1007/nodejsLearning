const visibility = isVisible();

practice(visibility.fourSum, () => {
  debugger;
  const margeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const midIndex = Math.floor(arr.length / 2);
    const leftSubArray = arr.slice(0, midIndex);
    const rightSubArray = arr.slice(midIndex, arr.length);
    const leftSorted = margeSort(leftSubArray);
    const rightSorted = margeSort(rightSubArray);
    let i = 0,
      j = 0;
    const result = [];
    while (i < leftSorted.length && j < rightSorted.length) {
      if (leftSorted[i] <= rightSorted[j]) {
        result.push(leftSorted[i]);
        i++;
      } else if (rightSorted[j] < leftSorted[i]) {
        result.push(rightSorted[j]);
        j++;
      }
    }
    while (i < leftSorted.length) {
      result.push(leftSorted[i]);
      i++;
    }
    while (j < rightSorted.length) {
      result.push(rightSorted[j]);
      j++;
    }
    return result;
  };
  let input = null;
  input = [-2, -1, -1, 0, 0, 1, 1, 2];
  input = [0, 0, 0, 0, 0];
  input = [-2, -1, -1, 1, 1, 2, 2];
  input = [2, 2, 2, 2, 2];
  const result = margeSort(input);
  console.log(result);
  let target = 8;
  const finalResult = [];
  for (let i = 0; i < result.length; i++) {
    if (i > 0 && result[i] === result[i - 1]) continue;
    let complement = target - result[i];
    debugger;
    for (let j = i + 1; j < result.length; j++) {
      if (j > i + 1 && result[j] === result[j - 1]) continue;
      let complement2 = complement - result[j];
      let left = j + 1,
        right = result.length - 1;
      while (left < right) {
        let leftE = result[left],
          rightE = result[right];
        let twoSum = leftE + rightE;
        if (complement2 === twoSum) {
          if (leftE !== result[left - 1] || rightE !== result[right + 1])
            finalResult.push([result[i], result[j], leftE, rightE]);
          left++;
          right--;
        } else if (twoSum < complement2) {
          left++;
        } else if (twoSum > complement2) {
          right--;
        }
      }
    }
  }
  console.log(finalResult);
});

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
  input = [0, 0, 0, 0];
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
    threeSum: 0,
    fourSum: 1,
  };

  return testFunction;
}
