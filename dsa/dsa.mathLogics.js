const visibility = isVisible();

practice(visibility.arrayAsFrequncyTable, () => {
  // Array as frequecy table when input is reasonally small
  // constrant 0<= value <=100
  const arr = [2, 4, 2, 1, 4, 2, 5];
  const handler = (arr) => {
    // Right now frequecy of all value is 0
    // here index is a value
    const arrayFrequencyTable = Array(101).fill(0);
    for (let i = 0; i < arr.length; i++) {
      arrayFrequencyTable[arr[i]]++;
    }
    let mostFrequency = 0;
    let mostFrequent = 0;
    for (let j = 0; j < arrayFrequencyTable.length; j++) {
      let value = arrayFrequencyTable[j];
      if (mostFrequency < value) {
        console.log(mostFrequency, mostFrequent);
        mostFrequency = value;
        mostFrequent = j;
      }
    }
    return {
      mostFrequency,
      mostFrequent,
    };
  };
  // Time -> O(n+k), O(k)
  // k= value range / frequecy table
  // n = number of elements in input
  console.log(handler(arr));
});

practice(visibility.firstRepeatingElement, () => {
  const arr = [10, 5, 3, 4, 3, 5, 6];
  const handler = (arr) => {
    const seen = new Set();
    for (let i of arr) {
      if (seen.has(i)) {
        return i;
      } else {
        seen.add(i);
      }
    }
    return null;
  };
  // Time O(n) Space O(n)
  console.log(handler(arr));
  console.log(handler([1, 2, 3, 4, 5]));
  console.log(handler([2, 2, 2, 2, 2, 2]));
  console.log(handler([1, 2, 3, 4, 5, 6, 7, 7]));
  console.log(handler([1, 2, 3, 4, 5, 6, 7, 1]));
});

practice(visibility.groupAnagrams, () => {
  const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const handler = (arr) => {
    const group = new Map();
    for (let i of arr) {
      const key = i.split("").sort().join("");
      if (group.has(key)) {
        // Gives referect to array so we can modify
        //it directly without push
        group.get(key).push(i);
      } else {
        group.set(key, [i]);
      }
    }
    return group;
  };
  console.log(handler(arr));
  /**  Split O(k), sort O(k logk), join O(k) Map O(1) Average
       Complexity -> time O(n*k log k), space O(n*k)
  */
});

// ## Solution with Map + Frequecy
practice(visibility.firstUniqueWIthMap, () => {
  console.log("$$$ firstUniqueWithMap");
  const arr1 = [4, 5, 1, 2, 1, 4, 5];
  function firstUnique(arr) {
    let seen = new Map();
    for (let i of arr) {
      seen.set(i, (seen.get(i) ?? 0) + 1);
    }
    for (let [x, y] of seen) {
      if (y === 1) {
        return x;
      }
    }
    return null;
  }

  console.log(firstUnique(arr1));
  console.log(firstUnique([2, 3, 2, 4, 1, 5]));
  console.log(firstUnique([1, 2, 3, 4]));
  console.log(firstUnique([1, 1]));
  console.log(firstUnique([1, 2, 3, 4, 5, 6, 7, 8, 1]));
});

// ## Solution with one seen Set and unique
// with their insertions order and delete if duplicate found
practice(visibility.firstUniqueWithSet, () => {
  const arr1 = [4, 5, 1, 2, 1, 4, 5];
  function firstUnique(arr) {
    let unique = new Set();
    let seen = new Set();
    for (let i of arr) {
      if (!seen.has(i)) {
        unique.add(i);
      } else {
        unique.delete(i);
      }
      seen.add(i);
    }
    return unique.values().next().value ?? null;
  }

  console.log(firstUnique(arr1));
  console.log(firstUnique([2, 3, 2, 4, 1, 5]));
  console.log(firstUnique([1, 2, 3, 4]));
  console.log(firstUnique([1, 1]));
  console.log(firstUnique([1, 2, 3, 4, 5, 6, 7, 8, 1]));
});
practice(visibility.allFactorsEfficientAlgo, () => {
  // More efficient and correct solution than before
  const handler = (input) => {
    let i = 1;
    const factors = [];
    while (i * i <= input) {
      const check = input % i === 0;
      if (check) {
        factors.push(i);
        if (i !== input / i) {
          factors.push(input / i);
        }
      }
      i++;
    }
    return factors;
  };
  console.log(handler(36));
  console.log(handler(0));
  console.log(handler(724807033));
});

practice(visibility.allFactorsByBruteForce, () => {
  // Finding all factors by brute force
  const n = 7248070331;
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      console.log(i);
    }
    i++;
  }
});

practice(visibility.findingAllFactors, () => {
  // Finding all factors of an integer
  // Basic idea factors comes in pairs
  // All you need find factors up to square root of number
  // Other factors are their complements num/factor
  const handler = (input) => {
    const iterator = Math.sqrt(input);
    let i = 1;
    const factors = [];
    while (i < iterator) {
      if (input % i === 0) {
        factors.push(i, input / i);
      }
      i++;
    }
    return factors;
  };
  console.log(handler(12));
});
practice(visibility.armsStrongCorrectLogic, () => {
  // in previous algo space compexity was O(d);
  // Here we will make it do O(1)
  const handler = (input) => {
    const original = input;
    let temp = input;
    // first get number for digits
    const getCount = (n) => {
      n = Math.abs(n);
      let count = 0;
      if (n === 0) {
        return 1;
      }
      while (n > 0) {
        count++;
        n = Math.floor(n / 10);
      }
      return count;
    };
    const count = getCount(input);
    // Lets check the number
    temp = original;
    let result = 0;
    while (temp > 0) {
      let lastDigit = temp % 10;
      result += lastDigit ** count;
      temp = Math.floor(temp / 10);
    }
    return original === result;
  };
  // Time => O(d)+O(d)=> O(2d)=>O(d)
  // Space => O(1)
  console.log("AFTER CORRECT", handler(370));
  console.log("AFTER CORRECT", handler(371));
  console.log("AFTER CORRECT", handler(0));
  console.log("AFTER CORRECT", handler(372));
});

practice(visibility.armstrongNumberCheck, () => {
  // ## Check if input is Armstrong Number
  const extractDigitsAndCount = (input) => {
    let temp = input;
    const extractedDigits = [];
    let count = 0;
    while (temp > 0) {
      count++;
      extractedDigits.push(temp % 10);
      temp = Math.floor(temp / 10);
    }
    // Logic to chech Armstrong number
    let result = 0;
    for (let i of extractedDigits) {
      result = i ** count + result;
    }
    return result === input;
  };
  // Time => O(d)+O(d)=> O(2d)=>O(d)
  // Space => O(d)
  console.log("MY LOGIC", extractDigitsAndCount(370));
  console.log("MY LOGIC", extractDigitsAndCount(371));
  console.log("MY LOGIC", extractDigitsAndCount(0));
  console.log("MY LOGIC", extractDigitsAndCount(372));
});

practice(visibility.checkIfNumberIsPalindrome, () => {
  /** Check if given integer is palindrome
	- Hanlde nagetive palindrome and positive palindrome integer
	- Handle single digits as they are palindrome
	- Main logic is reverse = reverse * 10 + extracted digits
	- This help to move digit to left by one place
*/
  const handler = (input, ignoreSign = false) => {
    if (ignoreSign) {
      input = Math.abs(input);
    }
    let reverse = 0;
    let temp = input;
    while (temp > 0) {
      const lastDigit = temp % 10;
      reverse = reverse * 10 + lastDigit;
      temp = Math.floor(temp / 10);
    }
    return reverse === input;
  };
  console.log("121", handler(121));
  console.log("0", handler(0));
  console.log("9", handler(9));
  console.log("33333", handler(33333));
  console.log("3434", handler(3434));
  console.log("-121 consider sign", handler(-121));
  console.log("-121 ignore sign", handler(-121, true));
});

practice(visibility.countDigitsOfAnInteger, () => {
  /**
       ## Promblem count the number of digits in an interger
       - An integer can be Positive
       - An integer can be zero
       - An integer can be negative
       We will be handling all these cases
     */
  const handler = (input) => {
    input = Math.abs(input);
    // If input is 0
    if (input === 0) {
      return 1;
    }
    let counter = 0;
    while (input > 0) {
      counter++;
      input = Math.floor(input / 10);
    }
    return counter;
  };
  console.log("n", handler(12345)); // 5
  console.log("n1", handler(7)); // 1
  console.log("n2", handler(1000)); // 4
  console.log("n3", handler(0)); // 1
  console.log("n4", handler(-9876)); // 4
  console.log("n4", handler(-1)); // 1
});

practice(visibility.extractDigitsFromInteger, () => {
  // ## Extract digits from and integer
  const input = 2349349809348;
  const handler = (value, reverseOrder = false) => {
    const extractedDigits = [];
    while (value > 0) {
      let lastDigit = value % 10;
      if (reverseOrder) {
        extractedDigits.push(lastDigit);
      } else {
        extractedDigits.unshift(lastDigit);
      }

      value = Math.floor(value / 10);
    }
    return extractedDigits;
  };
  console.log("Main Input", input);
  console.log("Extracted Digits", handler(input));
  console.log("Reverse Input", +handler(input, true).join(""));
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
    extractDigitsFromInteger: false,
    countDigitsOfAnInteger: false,
    checkIfNumberIsPalindrome: false,
    armstrongNumberCheck: false,
    armsStrongCorrectLogic: false,
    findingAllFactors: false,
    allFactorsByBruteForce: false,
    allFactorsEfficientAlgo: false,
    firstUniqueWithSet: false,
    firstUniqueWIthMap: false,
    groupAnagrams: false,
    firstRepeatingElement: false,
    arrayAsFrequncyTable: true,
  };

  return testFunction;
}
