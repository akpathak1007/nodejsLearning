const visibility = isVisible();

practice(visibility.quickSort, () => {
  // Quick sort is divide and conquer base algorithm
  // It works different from merge sort, here we create
  // partition using pivot which ensure samller value than pivot
  // on one side and greater on the other side pivot
  // it is an in place sorting algo
  const quickSort = (arr, low, high) => {
    // for in place sorting we
    if (low >= high) {
      return arr;
    }

    const partition = (arr, low, high) => {
      // Selecting pivot, last element of partition according
      // using Lomuto Partition Scheme

      const pivot = arr[high];
      let i = low - 1; // Boundary of small values partition
      let j = low; // scanning the partition
      for (j; j < high; j++) {
        // If current value small than pivot then increse the boundry
        const scanningElement = arr[j];
        if (scanningElement < pivot) {
          // and swap the small value in the small parition
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          debugger;
        }
      }
      // Once whole partion is scanned swap pivot with
      // high to put pivot at its correct potition
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      // finally return current pivot index
      return i + 1;
    };
    const partitionIndex = partition(arr, low, high);
    // Sorting left partition
    quickSort(arr, low, partitionIndex - 1);
    // Sorting right partition
    quickSort(arr, partitionIndex + 1, high);
  };
  const data = [2, 3, 9, 1, -1, 11, 0.1, 20, 1];
  quickSort(data, 0, data.length - 1);
  console.log("SORTED RESULT", data);
});

practice(visibility.quickSorts, () => {
  const data = [5, 3, 8, 4, 2, 7, 6];
  const quickSort = (arr, low, high) => {
    // if array has 0 and 1 element return bcs both are sorted
    if (low >= high) {
      return arr;
    }
    // Decide the pivot using lomuto partition scheme
    let counter = 0;
    const partition = (low, high) => {
      let pivot = arr[high];
      let boundry = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          boundry++;
          [arr[j], arr[boundry]] = [arr[boundry], arr[j]];
        }
      }
      [arr[boundry + 1], arr[high]] = [arr[high], arr[boundry + 1]];
      return boundry + 1;
    };
    let partitionIndex = partition(low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  };
  quickSort(data, 0, data.length - 1);
  console.log(data);
});

practice(visibility.mergeSort, () => {
  let data = [5, 4, 3, 9, 2, 1];
  const mergeSort = (arr) => {
    // If array has 0 and 1 element return bcs both are sorted
    if (arr.length <= 1) {
      return arr;
    }
    // Evaluate mid index
    const midIndex = Math.floor(arr.length / 2);
    // Create left and right array  : sallow copy
    const leftArray = arr.slice(0, midIndex);
    const rightArray = arr.slice(midIndex);
    // Apply mergesort on both array
    const leftSorted = mergeSort(leftArray);
    const rightSorted = mergeSort(rightArray);
    const mergeAlgo = (leftSorted, rightSorted) => {
      // Marge Both sorted array
      let result = [];
      //Creating two pointers one for left and one for right
      let i = 0;
      let j = 0;
      while (i < leftSorted.length && j < rightSorted.length) {
        if (leftSorted[i] < rightSorted[j]) {
          result.push(leftSorted[i]);
          i++;
        } else {
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
    return mergeAlgo(leftSorted, rightSorted);
  };
  log(data);
  function log(input) {
    console.log("### INPUT", input, "###");

    console.log("OUTPUT", mergeSort(input));
  }
});
practice(visibility.insertSortAlgo, () => {
  // Basic idea is to imagine array into two portion
  // Sorted and Unsorted, now take value from unsorted
  // portion and start comparing backward into sorted
  // array and shifting if sorted portion is greader then
  // Selected key from unsorted portion
  let data = [5, 4, 3, 9, 2, 1];
  const handler = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  };
  log(data);
  log([5]);
  log([]);
  log([2, 1]);
  log([3, 3, 1, 2]);
  log([-5, 3, -1, 2]);
  log([1, 2, 3, 4, 5]);
  function log(input) {
    console.log("### INPUT", input, "###");
    handler(input);
    console.log(input);
  }
});

practice(visibility.insertSortAlgoMyVersion, () => {
  let data = [5, 4, 3, 9, 2, 1];
  const handler = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > key) {
          arr[j + 1] = arr[j];
        }
        if (arr[j] < key) {
          arr[j + 1] = key;
          break;
        }
        if (j === 0 && arr[j] > key) {
          arr[j] = key;
        }
      }
    }
  };
  log(data);
  log([1, 2, 3, 4, 5]);
  function log(input) {
    console.log("### INPUT", input, "###");
    handler(input);
    console.log(input);
  }
});

// Bubble sort algorithm
practice(visibility.bubbleSortAlgo, () => {
  let arr = [5, 3, 4, 1, 2];
  // Basic idea compare adjacent elements and
  // swap if they are not in order
  const handler = (input) => {
    for (let i = 0; i < input.length; i++) {
      let jLimit = input.length - (i + 1);
      for (let j = 0; j < jLimit; j++) {
        let firstValue = input[j];
        let adjacentValue = input[j + 1];
        if (firstValue > adjacentValue) {
          [input[j], input[j + 1]] = [input[j + 1], input[j]];
        }
      }
    }
  };
  log(arr);
  log([5, 4, 3, 2, 1]);
  log([3, 2, 1, 4, 5]);
  function log(input) {
    handler(input);
    console.log(input);
  }
});

// Selection Sorting algorithm
practice(visibility.selectionSort, () => {
  const handler = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      // minIndex must always point to first index
      // of unsorted array
      let minIndex = i;
      let minElement = arr[i];

      for (let j = i + 1; j < arr.length; j++) {
        // comparing current index ele with entire arr
        //for actual min ele
        if (arr[j] < minElement) {
          minIndex = j;
          minElement = arr[j];
        }
      }
      // We can do swaping like this also
      //[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      let currentElement = arr[i];
      arr[i] = minElement;
      arr[minIndex] = currentElement;
    }
  };
  log([5, 3, 4, 1, 2]);
  log([1, 1, 1, 1, 1, 1]);
  log(["Manish", "Anuj", "Saurabh", "Sanjeev", "Men"]);
  log([]);
  log([1]);
  log([0]);
  function log(arr) {
    handler(arr);
    console.log(arr);
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
    selectionSort: false,
    bubbleSortAlgo: false,
    insertSortAlgo: false,
    insertSortAlgoMyVersion: false,
    mergeSort: false,
    quickSort: true,
  };

  return testFunction;
}
