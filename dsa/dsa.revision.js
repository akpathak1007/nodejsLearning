const visibility = isVisible();

// Leetcode 1636. Sort Array by Increasing Frequency
// Constraints: 1 <= nums.length <= 100, -100 <= nums[i] <= 100
practice(visibility.sortArrayByIncreasingFrequency, () => {
  const handler = (arr) => {
    // Sort array in decreasing order using array index
    // here array elements are index
    const OFFSET = 100;
    const LENGTH = 201; // -100 to 100 including 0
    const freq = new Array(LENGTH).fill(0);
    for (let i of arr) {
      let index = OFFSET + i;
      freq[index]++;
    }
    console.log(freq);
    // Sort by frequecy with array bucket
    // here frequencies are index
    const bucket = [];
    for (let i = 100; i >= -100; i--) {
      const el = i + OFFSET;
      const fr = freq[el];
      bucket[fr] = bucket[fr] ?? [];
      if (fr > 0) {
        bucket[fr].push(i);
      }
    }
    console.log(bucket);
    // Constructing final sorted array;
    const result = [];
    for (let i = 0; i < bucket.length; i++) {
      if (!bucket[i]) continue;
      bucket[i].forEach((v) => {
        console.log(v);
        for (let j = 0; j < i; j++) {
          result.push(v);
        }
      });
    }
    return result;
  };
  console.log(handler([-6, -6, -6]));
  //  console.log(handler([1, 1, 2, 2, 2, 3]));
  //  console.log(handler([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
});
// LeetCode 1207. Unique Number of Occurrences
practice(visibility.uniqeNumberOfOccurrences, () => {
  const handler = (arr) => {
    const freq = new Map();
    for (let i of arr) {
      let f = freq.get(i);
      freq.set(i, f ? f + 1 : 1);
    }
    const set = new Set();
    for (let [num, fr] of freq) {
      if (set.has(fr)) {
        return false;
      }
      set.add(fr);
    }
    return true;
  };
  console.log(handler([1, 2, 2, 1, 1, 3]));
  console.log(handler([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
});

// LeetCode 347. Top k frequent element
practice(visibility.topKFrequentElement, () => {
  const handler = (arr, k) => {
    const frequency = new Map();
    for (let i of arr) {
      if (frequency.has(i)) {
        frequency.set(i, frequency.get(i) + 1);
      } else {
        frequency.set(i, 1);
      }
    }
    const bucket = new Array(frequency.size);
    for (let [num, freq] of frequency) {
      if (bucket[freq]) {
        bucket[freq].push(num);
      } else {
        bucket[freq] = [num];
      }
    }
    let result = [];

    for (let j = bucket.length; j > 0; j--) {
      if (result.length === k) {
        break;
      }
      if (bucket[j]) {
        bucket[j].forEach((v) => {
          if (result.length < k) result.push(v);
        });
      }
    }
    return result;
  };
  console.log(handler([1, 1, 1, 2, 2, 3, 3, 3, 3], 2));
  console.log(handler([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
  console.log(handler([1], 1));
});

// LeetCode 1492. The kth Factor of n
practice(visibility.findFactors, () => {
  const handler = (n, k) => {
    const small = [];
    const large = [];
    for (let i = 1; i ** 2 <= n; i++) {
      if (n % i === 0) {
        small.push(i);
        if (i ** 2 !== n) {
          large.push(n / i);
        }
      }
    }
    let left = 0;
    let right = large.length - 1;
    for (let j = large.length - 1; j >= 0; j--) {
      small.push(large[j]);
    }
    return small[k - 1] ?? -1;
  };
  console.log(handler(12, 3));
  console.log(handler(25, 4));
});

// LeetCode 1134 Armstrong Number
practice(visibility.armstrongNumber, () => {
  const handler = (num) => {
    let digits = 0;
    const iterate = (num, cb) => {
      while (num > 0) {
        let lastDigit = num % 10;
        cb(lastDigit);
        num = Math.floor(num / 10);
      }
    };
    // Number of digits
    iterate(num, () => digits++);
    // Evaluation
    let result = 0;
    iterate(num, (lastDigit) => {
      result += lastDigit ** digits;
    });
    return result === num;
  };
  console.log("check", handler(153));
});

// LeetCode 9 : Palindrome Number
practice(visibility.integerPalindrome, () => {
  const handler = (num) => {
    let result = 0;
    let original = num;
    while (num > 0) {
      let lastDigit = num % 10;
      result = result * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    return original === result;
  };
  console.log(handler(121));
});

// LeetCode 258. Add Digits
practice(visibility.addDigits, () => {
  const handler = (num) => {
    if (Math.floor(num / 10) === 0) {
      debugger;
      return num;
    }
    let result = 0;
    debugger;
    while (num > 0) {
      let lastDigit = num % 10;
      result += lastDigit;
      num = Math.floor(num / 10);
      debugger;
    }
    debugger;
    return handler(result);
  };
  console.log(handler(38));
});

// Leetcode 233. Number of Digit One ## NOT COMPLETED
practice(visibility.numberOfDigitOne, () => {
  const handler = (num) => {
    let counter = 0;
    for (let i = num; i > 0; i--) {
      let temp = i;
      while (temp > 0) {
        let lastDigit = temp % 10;
        if (lastDigit === 1) {
          counter++;
        }
        temp = Math.floor(temp / 10);
      }
    }
    return counter;
  };
  console.log(handler(100));
});

// Leetcode 2520. Count the Digits That Divide a Number
practice(visibility.digitsThatDivideNum, () => {
  const handler = (num) => {
    let original = num;
    let counter = 0;
    while (num > 0) {
      let lastDigit = num % 10;
      if (original % lastDigit === 0) {
        counter++;
      }
      num = Math.floor(num / 10);
    }
    return counter;
  };
  console.log(handler(121));
  console.log(handler(1248));
});

// LeetCode 2535. Difference Between Element Sum and Digit Sum of an Array
practice(visibility.diffBetweenElementAndDigitSum, () => {
  const handler = (nums) => {
    let elementSum = 0;
    let digitSum = 0;
    nums.forEach((num) => {
      elementSum += num;
      while (num > 0) {
        digitSum += num % 10;
        num = Math.floor(num / 10);
      }
    });
    return Math.abs(elementSum - digitSum);
  };
  console.log(handler([1, 15, 6, 3]));
});

// LeetCode 2553. Separate the Digits in an Array
practice(visibility.seprateDigitsInNumArray, () => {
  const handler = (nums) => {
    let result = [];
    let num = "";
    nums.forEach((num) => {
      let temp = [];
      while (num > 0) {
        temp.unshift(num % 10);
        num = Math.floor(num / 10);
      }
      result.push(...temp);
    });
    return result;
  };
  console.log(
    handler([
      32, 43, 68, 8, 100, 84, 80, 14, 88, 42, 53, 98, 69, 64, 40, 60, 23, 99,
    ]),
  );
  console.log(handler([13, 25, 83, 77]));
});

// Extract Digits from an integer
practice(visibility.extractDigitsFromInteger, () => {
  const handler = (num) => {
    const result = [];
    while (num > 0) {
      // Extract Last digit
      let lastDigit = num % 10;
      result.push(lastDigit);
      // Remove last digit
      num = Math.floor(num / 10);
    }
    return result;
  };
  console.log(handler(1344251349876));
});

// Leetcode 217 | Easy
practice(visibility.findDuplicates, () => {
  const handler = (arr) => {
    const seen = new Set();
    for (let i of arr) {
      if (seen.has(i)) {
        return true;
      }
      seen.add(i);
    }
    return false;
  };

  log([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
  function log(input) {
    console.log("#### INPUT", input, "####");
    const result = handler(input);
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
    findDuplicates: 0,
    extractDigitsFromInteger: 0,
    seprateDigitsInNumArray: 0,
    diffBetweenElementAndDigitSum: 0,
    digitsThatDivideNum: 0,
    numberOfDigitOne: 0,
    addDigits: 0,
    integerPalindrome: 0,
    armstrongNumber: 0,
    findFactors: 0,
    topKFrequentElement: 0,
    uniqeNumberOfOccurrences: 0,
    sortArrayByIncreasingFrequency: 1,
  };

  return testFunction;
}
