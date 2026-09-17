const visibility = isVisible();

practice(visibility.fibonacciSeries, () => {
  // Provide total number of time function called itself;
  // basic idea of fibonari fib(n)= fib(n-1)+fib(n-2)
  // here n is index of fibonacci series
  // ie. 3 comes on 4th index
  const handler = (n) => {
    let counter = 0;
    const fib = (index) => {
      counter++;
      if (index === 0 || index === 1) {
        return index;
      }
      return fib(index - 1) + fib(index - 2);
    };
    fib(n);
    return counter;
  };
  // Time complexity O(2 raise the power n)
  // space O(n)
  console.log(handler(5));
  console.log(handler(0));
  console.log(handler(1));
  console.log(handler(2));
  console.log(handler(20));
});

practice(visibility.stringPalindrome, () => {
  // basic idea is string is index based so
  // we can just compare left and right, if
  // any pair is not same we can say string is
  // not palindrome using parameterized recursion
  const handler = (string) => {
    if (!string) {
      return "Pleace profile valid string";
    }
    string = string.toLowerCase();
    const check = (left = 0, right = string.length - 1) => {
      if (left >= right) {
        return true;
      }
      if (string[left] !== string[right]) {
        return false;
      }
      return check(left + 1, right - 1);
    };
    return check();
  };

  // Complexity O(n/2)=> O(n); Space O(n)
  console.log(handler("Midnal"));
  console.log(handler(""));
  console.log(handler("nan"));
  console.log(handler("Nan"));
  console.log(handler("abcdeedcba"));
  console.log(handler("Anuj"));
});

practice(visibility.reverseArray, () => {
  // Key idea is we will swap the value left and right
  // recusively
  const handler = (arr, left = 0, right = arr.length - 1) => {
    if (arr.length === 0) {
      return "Array is empty nothing to reverse";
    }
    if (left >= right) {
      return arr;
    }
    const leftValue = arr[left];
    arr[left] = arr[right];
    arr[right] = leftValue;
    return handler(arr, left + 1, right - 1);
  };
  console.log(handler([1, 2, 3, 4, 5]));
  console.log(handler([]));
  console.log(handler([1]));
  console.log(handler([-1, -9, -12, 9, 7, 13, 4]));
  console.log(handler(["Apple", "Mango", "Lichi", "Grapse"]));
  console.log(handler([0]));
});
practice(visibility.factorialParameterizedRecurtion, () => {
  const handler = (number, factorial = 1) => {
    if (number === 0) {
      return factorial;
    }
    return handler(number - 1, factorial * number);
  };
  console.log(handler(5));
  console.log(handler(0));
});

practice(visibility.factorialFunctionalRecurtion, () => {
  const handler = (number) => {
    if (number === 0) {
      return 1;
    }
    return number * handler(number - 1);
  };
  console.log(handler(5));
  console.log(handler(0));
});
// ## this is example of functional recurtion
// here recursive function return value which is
// used by current function to constuct answer.
practice(visibility.sumOfNnumberRecursion2, () => {
  // Sum of integer
  let number = 5;
  const handler = (number) => {
    if (number === 0) {
      return number;
    }
    return number + handler(number - 1);
  };
  console.log(handler(number));
});
// ## this is the example of parameterized recursion
// Here we carry result or state through function parameter
practice(visibility.sumOfNnumberRecursion, () => {
  const number = 5;
  const handler = (number, sum) => {
    // Base condition
    if (number === 0) {
      return sum;
    }

    sum += number;
    return handler(number - 1, sum);
  };
  console.log("Sum of 5", handler(number, 0));
  console.log("Sum of 0", handler(0, 0));
  console.log("Sum of 111", handler(111, 0));
});

practice(visibility.countDownSimpleRecursion, () => {
  // Creating a count down with recursion
  const from = 10;
  const handler = (from) => {
    console.log(from);
    from--;
    if (from >= 0) {
      handler(from);
    }
    return;
    console.log(from);
  };
  const handler2 = (from) => {
    if (from === 0) {
      return;
    } else {
      console.log(from);
      handler2(--from);
    }
  };
  //  handler(from);
  handler2(from);
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
    countDownSimpleRecursion: false,
    sumOfNnumberRecursion: false,
    sumOfNnumberRecursion2: false,
    factorialParameterizedRecurtion: false,
    factorialFunctionalRecurtion: false,
    reverseArray: false,
    stringPalindrome: false,
    fibonacciSeries: true,
  };

  return testFunction;
}
