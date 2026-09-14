const visibiltiy = isVisible();

// ## find out frequecy of elements in array with objects
practice(visibiltiy.frequencyCheckWithObject, () => {
  const arr = [1, 45, 65, 12, 3, 44, 25, 1, 66, 12, 3, 1, 65, 66, 44, 65];
  const findFrequency = (arr) => {
    const finder = {};
    for (let i of arr) {
      finder[i] = (finder[i] || 0) + 1;
    }
    return finder;
  };
  console.log(findFrequency(arr));
});

// ## find out frequecy of elements in array with map
practice(visibiltiy.frequencyCheckWithMap, () => {
  const arr = [1, 45, 65, 12, 3, 44, 25, 1, 66, 12, 3, 1, 65, 66, 44, 65];
  const findFrequency = (arr) => {
    const finder = new Map();
    for (let i of arr) {
      finder.set(i, (finder.get(i) || 0) + 1);
    }
    return finder;
  };
  console.log(findFrequency(arr));
});

// ## here we will check if duplicates exists with Map and store associated data
practice(visibiltiy.checkIfDuplicateExistsUsingSet, () => {
  // Using Map we can store other value
  const arr = [11, 90, 30, 20, 10, 10];
  const funUsingMap = (arr) => {
    const seen = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (seen.has(arr[i])) {
        const res = seen.get(arr[i]);
        res.duplicateExists = true;
        res.duplicateValue = arr[i];
        res.duplicateIndex.push(i);
        return res;
      } else {
        seen.set(arr[i], {
          duplicateIndex: [i],
        });
      }
    }
  };
  const mapResult = funUsingMap(arr);
  console.log("Using Map with Info", mapResult);
});

// ## here we will check if duplicates exists with Set
practice(visibiltiy.checkIfDuplicateExistsUsingSet, () => {
  // Using Set Complexity will return only boolen
  const arr = [11, 90, 30, 20, 10, 10];
  const funUsingSet = (arr) => {
    const seen = new Set();
    for (let i of arr) {
      if (seen.has(i)) {
        return {
          duplicateExists: true,
          message: "Set can not store other info",
        };
      }
      seen.add(i);
    }
  };
  const result = funUsingSet(arr);
  console.log("Find Duplicates using set", result);
});

// ## here we will check if duplicates exists with brute force
practice(visibiltiy.checkIfDuplicateExistsUsingSet, () => {
  const arr = [11, 90, 30, 20, 10, 10];
  // With Brute force (Two loops)
  const funBruteForce = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return {
            duplicateExists: true,
            duplicateValue: arr[i],
            duplicateIndex: [i, j],
          };
        }
      }
    }
  };
  console.log("BRUTE FORCE", funBruteForce(arr));
});

// ## Check is array contain elements whoes sum is 9, return bool
practice(visibiltiy.twoNumberSumWithMapReturnBool, () => {
  const arr = [2, 8, 11, 15];
  const target = 9;

  const findSum = (arr, target) => {
    const seen = new Map();
    for (let i of arr) {
      if (seen.get(target - i)) {
        return true;
      }
      seen.set(i, true);
    }
    return false;
  };

  const result = findSum(arr, target);
  console.log(result);
});

// ## Return only true and false if sum is exists with brute force
practice(visibiltiy.twoNumberSumWithBruteForce, () => {
  const arr = [2, 7, 11, 15];
  const target = 9;
  let counter = 0;
  const findSum = (arr, target) => {
    for (let i of arr) {
      for (let j of arr) {
        counter++;
        console.log(i, j);
        if (i + j === target) {
          return true;
        }
      }
    }
    return false;
  };
  const result = findSum(arr, target);
  console.log(result);
});
// ## Find the target which is sum of two values in array
practice(visibiltiy.twoSumWithMap, () => {
  const arr = [100, 87, 54, 33, 11, 3, 93, 67, 2, 12, 3];
  const directory = new Map();
  const findSumOfTwoElements = (array, target) => {
    for (let i = 0; i < array.length; i++) {
      // Complement will be other value in the array
      const complement = target - array[i];
      if (directory.has(complement)) {
        return {
          target,
          elements: [complement, array[i]],
          index: [directory.get(complement), i],
        };
      }
      directory.set(array[i], i);
    }
  };
  const result = findSumOfTwoElements(arr, 14);
  console.log(result);
  // ANSWER { target: 14, elements: [ 11, 3 ], index: [ 4, 5 ] }
});

// ### Find a number in array without algo just loop
practice(visibiltiy.findNumInArrayNormalLoop, () => {
  const numbers = [10, 20, 30, 40, 50];
  const fun = (array, target) => {
    for (let num of numbers) {
      if (num === target) {
        return true;
      }
    }
    return false;
  };
  console.log("Normal loop", fun(numbers, 40));
});

// ### Find in array has duplicates elements;
practice(visibiltiy.findArrayHasDuplicates, () => {
  const arr = [12, 43, 77, 88, 11, 34, 90, 67];
  const findDuplicate = (arr) => {
    const seen = new Set();
    for (let i of arr) {
      if (seen.has(i)) {
        return true;
        break;
      } else {
        seen.add(i);
      }
    }
    return false;
  };
  console.log(findDuplicate(arr, 34));
});

// ### binary search of sorted array
practice(visibiltiy.searchingTarget, () => {
  const arr = [10, 20, 30, 40, 50];
  const target = 40;
  let counter = 0;
  let targetIndex = null;
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      counter++;
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        targetIndex = mid;
        break;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    console.log("Target Index", targetIndex);
    console.log("Operation Count", counter);
  };
  binarySearch(arr, 10);
});

// ### Find Largest Value in Array;
practice(visibiltiy.findLargestInArray, () => {
  const array = [100, 10, 60, 20, 30, 40, 50];
  let largest = array[0];
  let counter = 0;
  for (let i = 1; i < array.length; i++) {
    counter++;
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  console.log("Largest Number is ", largest);
  console.log("Operations count", counter);
});

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
    searchingTarget: false,
    findLargestInArray: false,
    findArrayHasDuplicates: false,
    findNumInArrayNormalLoop: false,
    twoSumWithMap: false,
    twoNumberSumWithBruteForce: false,
    twoNumberSumWithMapReturnBool: false,
    checkIfDuplicateExistsUsingSet: false,
    frequencyCheckWithMap: false,
    frequencyCheckWithObject: true,
  };

  return testFunction;
}
