const visibility = isVisible();

practice(visibility.allFactorsEfficientAlgo, () => {});

practice(visibility.allFactorsByBruteForce, () => {
  // Finding all factors by brute force
  const n = 366;
  let i = 1;
  while (i <= 366) {
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
    allFactorsEfficientAlgo: true,
  };

  return testFunction;
}
