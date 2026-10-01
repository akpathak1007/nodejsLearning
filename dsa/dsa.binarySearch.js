const visibility = isVisible();

//Find minimun in rotated sorted array in O(log n) time
practice(visibility.minInRotatedSortedArray2, () => {
  const handler = (arr) => {
    let min = Infinity;
    let left = 0;
    let right = arr.length - 1;
    debugger;
    while (left <= right) {
      let leftE = arr[left];
      let rightE = arr[right];
      let mid = left + Math.floor((right - left) / 2);
      let midE = arr[mid];
      // Check if left part is sorted
      debugger;
      if (leftE === midE && midE === rightE) {
        if (leftE < min) min = leftE;
        left++;
        right--;
      } else if (leftE <= midE) {
        if (leftE < min) min = leftE;
        left = mid + 1;
        debugger;
      } else {
        let temp = arr[mid + 1];
        min = temp && temp < min ? temp : min;
        right = mid;
        debugger;
      }
      debugger;
    }

    return min;
  };
  log([1, 3, 5]);
  log([1]);
  log([5, 6, 6, 7, 7, 1, 1, 2, 3, 5]);
  //  log([1, 1, 2, 3, 5, 5, 6, 6, 7, 7]);
  function log(arr) {
    console.log("#### INPUT", arr, "####");
    const result = handler(arr);
    console.log(result);
  }
});

//Find minimun in rotated sorted array in O(log n) time
practice(visibility.minInRotatedSortedArray, () => {
  const handler = (arr) => {
    let min = Infinity;
    let left = 0;
    let right = arr.length - 1;
    debugger;
    if (arr[left] <= arr[right]) {
      return arr[left];
    }
    while (left <= right) {
      let leftE = arr[left];
      let rightE = arr[right];
      let mid = left + Math.floor((right - left) / 2);
      let midE = arr[mid];
      // Check if left part is sorted
      debugger;
      if (leftE <= midE) {
        if (leftE < min) min = leftE;
        left = mid + 1;
        debugger;
      } else {
        let temp = arr[mid + 1];
        min = temp && temp < min ? temp : min;
        right = mid;
        debugger;
      }
      debugger;
    }

    return min;
  };
  log([5, 6, 7, 4, 1, 2, 3]);
  log([3, 4, 5, 1, 2]);
  log([5, 6, 7, 9, 1, 2, 3]);
  log([5, 6, 7, 0, 1, 2, 3]);

  log([4, 5, 6, 7, 0, 1, 2]);
  log([11, 13, 15, 17]);
  function log(arr) {
    console.log("#### INPUT", arr, "####");
    const result = handler(arr);
    console.log(result);
  }
});

// array contain duplicates
practice(visibility.searchInRotatedSortedArray2, () => {
  const handler = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let leftE = arr[left];
      let midE = arr[mid];
      let rightE = arr[right];
      debugger;
      if (midE === target) {
        return mid;
      } else if (midE === leftE && midE === rightE) {
        left++;
        right--;
        debugger;
      } else if (leftE <= midE) {
        if (leftE <= target && target < midE) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
        debugger;
      } else if (midE < rightE) {
        if (midE < target && target <= rightE) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
        debugger;
      }
      debugger;
    }
    return -1;
  };
  log([1, 0, 1, 1, 1], 0);
  log([5, 1, 3], 3);
  log([2, 5, 6, 0, 0, 1, 2], 0);

  log([4, 5, 6, 7, 0, 1, 2], 0); // 4
  log([4, 5, 6, 7, 0, 1, 2], 3); // -1
  log([1], 0); // -1
  log([1], 1); // 0
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
    const result = handler(arr, target);
    console.log(result);
  }
});

// Array contain distinct values
practice(visibility.searchInRotatedSortedArray, () => {
  const handler = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let leftE = arr[left];
      let midE = arr[mid];
      let rightE = arr[right];
      debugger;
      if (midE === target) {
        return mid;
      } else if (leftE <= midE) {
        if (leftE <= target && target < midE) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
        debugger;
      } else if (midE < rightE) {
        if (midE < target && target <= rightE) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
        debugger;
      }
      debugger;
    }
    return -1;
  };
  log([1, 0, 1, 1, 1], 0);
  log([5, 1, 3], 3);
  log([2, 5, 6, 0, 0, 1, 2], 0);

  log([4, 5, 6, 7, 0, 1, 2], 0); // 4
  log([4, 5, 6, 7, 0, 1, 2], 3); // -1
  log([1], 0); // -1
  log([1], 1); // 0
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
    const result = handler(arr, target);
    console.log(result);
  }
});

practice(visibility.firstLastPosition, () => {
  const handler = (arr, target) => {
    const len = arr.length - 1;
    const lowerBound = () => {
      let left = 0;
      let right = len;
      let lowerBound = arr.length;
      while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midE = arr[mid];
        if (midE < target) {
          left = mid + 1;
        } else if (midE >= target) {
          lowerBound = mid;
          right = mid - 1;
        }
      }
      return lowerBound;
    };
    const upperBound = () => {
      let left = 0;
      let right = len;
      let upperBound = arr.length;
      while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midE = arr[mid];
        if (midE <= target) {
          left = mid + 1;
        } else if (midE > target) {
          right = mid - 1;
          upperBound = mid;
        }
      }
      return upperBound;
    };
    const lower = lowerBound();
    const upper = upperBound();
    const duplicate = upper - lower;
    let first = -1;
    let last = -1;
    if (duplicate === 0) {
      return [first, last];
    } else {
      return [lower, upper - 1];
    }
  };

  log([1, 2, 4, 4, 4, 4, 4, 7, 9], 4); // 2
  log([1, 2, 4, 4, 4, 4, 4, 7, 9], 0); // 2
  log([1, 2, 4, 4, 4, 4, 4, 7, 9], 9); // 2
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
    const result = handler(arr, target);
    console.log(result);
  }
});

// floor = largest value that is >= target
// ceil = smalled value that is <= target
practice(visibility.findFloorCeil, () => {
  const handler = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let floor;
    let ceil;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
        return [arr[mid], arr[mid]];
      } else if (arr[mid] < target) {
        floor = arr[mid];
        left = mid + 1;
      } else {
        ceil = arr[mid];
        right = mid - 1;
      }
    }
    return [floor, ceil];
  };
  log([1, 3, 5, 7, 9], 6); // [5, 7]
  log([1, 3, 5, 7, 9], 5); // [5, 5]
  log([1, 3, 5, 7, 9], 0.09); // [undefined, 1]
  log([1, 3, 5, 7, 9], 100); // [9, undefined]
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
    const result = handler(arr, target);
    console.log(result);
  }
});

practice(visibility.findUpperBound, () => {
  const handler = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let upperBound = arr.length;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else if (arr[mid] > target) {
        upperBound = mid;
        right = mid - 1;
      }
    }
    return upperBound;
  };
  log([1, 2, 4, 4, 4, 4, 4, 7, 9], 4); // 2
  console.log("this");
  log([1, 2, 4, 4, 4, 7, 9], 4); // 2
  log([1, 2, 4, 4, 4, 7, 9], 3); // 2
  log([1, 2, 4, 4, 4, 7, 9], 8); // 6
  log([1, 2, 4, 4, 4, 7, 9], 10); // 7
  log([], 5); // 0
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
    const result = handler(arr, target);
    console.log(result);
  }
});

practice(visibility.findLowerBound, () => {
  const handler = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let lowerBound = arr.length;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] >= target) {
        lowerBound = mid;
        right = mid - 1;
      }
    }
    return lowerBound;
  };
  log([1, 2, 4, 4, 4, 4, 4, 7, 9], 4); // 2
  console.log("that");
  log([1, 3, 5, 6], 5);
  log([1, 3, 5, 6], 2);
  log([1, 3, 5, 6], 1);

  log([1, 2, 4, 4, 4, 7, 9], 3); // 2
  log([1, 2, 4, 4, 4, 7, 9], 8); // 6
  log([1, 2, 4, 4, 4, 7, 9], 10); // 7
  log([], 5); // 0
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
    const result = handler(arr, target);
    console.log(result);
  }
});

practice(visibility.binarySearch, () => {
  const handler = (arr, target) => {
    let left = 0,
      right = arr.length - 1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      debugger;
      if (arr[mid] === target) {
        debugger;
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
        debugger;
      } else if (arr[mid] > target) {
        right = mid - 1;
        debugger;
      }
      debugger;
    }
    debugger;
    return -1;
  };
  log([1, 2, 3, 4, 5], 2); // target at last index → 4
  log([-5, -3, -1, 0, 2], -3);
  log([1, 2, 3, 4, 5], 2);
  log([1, 2, 3, 4, 5], 5);
  log([1, 2, 3, 4, 5], 1);
  log([1, 2, 3, 4, 5], 6);
  log([1, 2, 3, 4, 5], -1);
  log([], 5);
  function log(arr, target) {
    console.log("#### INPUT", arr, target, "####");
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
    binarySearch: 0,
    findLowerBound: 0,
    findUpperBound: 0,
    findFloorCeil: 0,
    firstLastPosition: 0,
    searchInRotatedSortedArray: 0,
    searchInRotatedSortedArray2: 0,
    minInRotatedSortedArray: 0,
    minInRotatedSortedArray2: 1,
  };

  return testFunction;
}
