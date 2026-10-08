const visibility = isVisible();

practice(visibility.integerToRomanGreedy, () => {
  const handler = (num) => {
    const mapper = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"],
    ];

    let result = "";
    for (let [key, value] of mapper) {
      debugger;
      while (num >= key) {
        result += value;
        num -= key;
        debugger;
      }
      debugger;
    }
    return result;
  };
  log(58); // "LVIII"
  log(8);
  log(17);
  log(16);
  log(68);
  log(1994); // "MCMXCIV"
  log(2999);
  log(3999);
  log(1); // "I"
  log(3); // "III"
  log(4); // "IV"
  log(9); // "IX"
  log(40); // "XL"
  log(90); // "XC"
  log(2024); // "MMXXIV"
  log(3999); // "MMMCMXCIX"

  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.integerToRoman, () => {
  const maper = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  const mapper2 = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  };
  const handler = (num) => {
    let position = 1;
    let response = "";
    debugger;
    while (num > 0) {
      let result = "";
      let lastDigit = num % 10;
      debugger;
      if (lastDigit === 1 || lastDigit === 5) {
        result = maper[lastDigit * position];
        debugger;
      } else if (lastDigit * position in mapper2) {
        result = mapper2[lastDigit * position] + result;
        debugger;
      } else if (lastDigit > 1 && lastDigit < 5) {
        let base = maper[position];
        for (let i = 0; i < lastDigit; i++) {
          result += base;
        }
        debugger;
      } else if (lastDigit > 5) {
        let char = maper[5 * position];
        let base = maper[position];
        for (let i = 5; i < lastDigit; i++) {
          char += base;
        }
        result = char;
        debugger;
      }
      position *= 10;
      num = Math.floor(num / 10);
      debugger;
      response = result + response;
    }
    return response;
  };
  log(58); // "LVIII"
  log(8);
  log(17);
  log(16);
  log(68);
  log(1994); // "MCMXCIV"
  log(2999);
  log(3999);
  log(1); // "I"
  log(3); // "III"
  log(4); // "IV"
  log(9); // "IX"
  log(40); // "XL"

  log(90); // "XC"

  log(2024); // "MMXXIV"
  log(3999); // "MMMCMXCIX"
  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.romanInteger, () => {
  const handler = (s) => {
    const maper = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    const mapper2 = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
    };
    const mapper3 = new Set(["I", "X", "C"]);
    let result = 0;
    let len = s.length - 1;
    for (let i = 0; i <= len; i++) {
      let value;
      let ie = s[i];
      debugger;
      if (mapper3.has(ie) && i < len) {
        let nextValue = s[i + 1];
        let temp = ie + nextValue;
        debugger;
        if (temp in mapper2) {
          i++;
          value = mapper2[temp];
          debugger;
        } else {
          value = maper[ie];
        }
      } else {
        value = maper[ie];
        debugger;
      }
      result += value;
      debugger;
    }
    debugger;
    return result;
  };
  log("MCMXCIV");
  log("III");
  log("LVIII");
  log("III"); // 3
  log("IV"); // 4
  log("IX"); // 9
  log("LVIII"); // 58
  log("MCMXCIV"); // 1994
  log("I"); // 1
  log("V"); // 5
  log("X"); // 10
  log("XL"); // 40
  log("XC"); // 90
  log("CD"); // 400
  log("CM"); // 900
  log("XIII"); // 13
  log("XXVII"); // 27
  log("MMXXIV"); // 2024
  log("MMMCMXCIX"); // 3999

  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.depthOfParentheses, () => {
  const handler = (s) => {
    let maxCount = 0;
    let count = 0;
    debugger;
    for (let i of s) {
      if (i === "(") {
        count++;
        maxCount = Math.max(maxCount, count);
        debugger;
      } else if (i === ")") {
        count--;
        debugger;
      }
      debugger;
    }
    debugger;
    return maxCount;
  };

  log("(1)+((2))+(((3)))");
  log("()(())((()()))");
  log("(1+(2*3)+((8)/4))+1");
  log("(1+(2*3)+((8)/4))+1");
  log("(1)+((2))+(((3)))");
  log("1+(2*3)/(2-1)");
  log("1");
  log("");
  log("((()))");
  log("()");
  log("(())");
  log("(()())");
  log("((())())");
  log("1+(2)");
  log("(1+(2+(3+(4))))");
  log("(((1)))");
  log("1+2+3");

  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.depthOfParentheses, () => {
  const handler = (s) => {
    let arr = new Array();
    let count = 0;
    debugger;
    for (let i of s) {
      if (i === "(") {
        count++;
        arr[count] = "(";
        debugger;
      } else if (i === ")") {
        count--;
        arr[count] = "(";
        debugger;
      }
      debugger;
    }
    debugger;
    let len = arr.length - 1;
    return len - 1 < 0 ? 0 : len;
  };

  log("(1)+((2))+(((3)))");
  log("()(())((()()))");
  log("(1+(2*3)+((8)/4))+1");
  log("(1+(2*3)+((8)/4))+1");
  log("(1)+((2))+(((3)))");
  log("1+(2*3)/(2-1)");
  log("1");
  log("");
  log("((()))");
  log("()");
  log("(())");
  log("(()())");
  log("((())())");
  log("1+(2)");
  log("(1+(2+(3+(4))))");
  log("(((1)))");
  log("1+2+3");

  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.sortCharByFreq, () => {
  const handler = (s) => {
    const map = new Map();
    for (let i of s) {
      let frequency = map.get(i);
      map.set(i, frequency ? frequency + 1 : 1);
    }
    const arr = [];
    for (let [char, freq] of map) {
      let temp = arr[freq];
      if (temp) {
        temp.push(char);
      } else arr[freq] = [char];
    }
    console.log(arr);
    let result = "";
    for (let i = arr.length - 1; i > 0; i--) {
      let ie = arr[i];
      if (!ie) continue;
      ie.forEach((v) => {
        for (let j = 1; j <= i; j++) {
          result += v;
        }
      });
    }
    return result;
  };
  log("tree");
  log("cccaaa");
  log("Aabb");
  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.sortCharByFreqV1, () => {
  const handler = (s) => {
    const map = new Map();
    for (let i of s) {
      let frequency = map.get(i);
      map.set(i, frequency ? frequency + 1 : 1);
    }
    const arr = [...map];
    arr.sort((a, b) => b[1] - a[1]);
    let result = "";
    for (let i of arr) {
      result += i[0].padEnd(i[1], i[0]);
    }
    return result;
  };
  log("tree");
  log("cccaaa");
  log("Aabb");
  function log(str1) {
    console.log("#### INPUT", str1, "####");
    const result = handler(str1);
    console.log(result);
  }
});

practice(visibility.anagramCheck, () => {
  const handler = (s, t) => {
    if (s.length !== t.length) return false;
    const sMap = new Map();
    for (let i = 0; i <= s.length - 1; i++) {
      let sE = s[i];
      let frequency = sMap.get(sE);
      debugger;
      sMap.set(sE, frequency ? frequency + 1 : 1);
      debugger;
    }
    //    console.log(sMap);
    for (let j = 0; j <= t.length - 1; j++) {
      let tE = t[j];
      let tFrequency = sMap.get(tE);
      if (!tFrequency || tFrequency === 0) {
        return false;
      }
      debugger;
      sMap.set(tE, tFrequency - 1);
      debugger;
    }
    debugger;
    return true;
  };
  log("cat", "act");
  log("abcdf", "abced");
  log("anagram", "nagaram"); // true
  log("rat", "car"); // false

  log("a", "a"); // true
  log("a", "b"); // false
  log("", ""); // true
  log("", "a"); // false

  log("ab", "ba"); // true
  log("ab", "aa"); // false
  log("aab", "aba"); // true
  log("aab", "abb"); // false

  log("abc", "cba"); // true
  log("abc", "acb"); // true
  log("abc", "abcd"); // false

  log("aabbcc", "abcabc"); // true
  log("aabbcc", "aabbbc"); // false

  log("listen", "silent"); // true
  log("hello", "world"); // false

  log("aaabbb", "bbbaaa"); // true
  log("aaabbb", "aabbba"); // true
  log("aaabbb", "aabbaa"); // false

  log("aabb", "bbaa"); // true
  log("aabb", "abab"); // true
  log("aabb", "abbb"); // false
  function log(str1, str2) {
    console.log("#### INPUT", str1, str2, "####");
    const result = handler(str1, str2);
    console.log(result);
  }
});

practice(visibility.rotateStringCheck, () => {
  const findLPS = (t) => {
    let len = 0;
    let position = 1;
    const lps = new Array(t.length);
    lps[0] = 0;
    while (position <= t.length - 1) {
      let lenE = t[len];
      let pE = t[position];
      if (lenE === pE) {
        len++;
        lps[position] = len;
        position++;
      } else if (len > 0) {
        len = lps[len - 1];
      } else if (len === 0) {
        lps[position] = 0;
        position++;
      }
    }
    return lps;
  };
  const handler = (s, t) => {
    let s2 = s + s;
    let tlen = t.length - 1;
    if (s.length - 1 !== tlen) {
      return false;
    }
    const lps = findLPS(t);
    let s2Len = s2.length - 1;
    let i = 0;
    let rotation = 0;
    while (i <= s2Len) {
      let s2E = s2[i];
      let rE = t[rotation];
      if (rotation === s.length) {
        return true;
      } else if (s2E === rE) {
        rotation++;
        i++;
      } else if (rotation > 0) {
        rotation = lps[rotation - 1];
      } else if (rotation === 0) {
        i++;
      }
    }
    return rotation == s.length ? true : false;
  };
  log("aaaaab", "aaabaa");
  log("aaba", "aab");
  log("abcde", "cdeab"); // expected: true
  log("aaaaab", "aaabba");

  log("abcde", "abced"); // expected: false
  log("abc", "cab"); // expected: true
  log("abc", "bca"); // expected: true
  log("abc", "abc"); // expected: true
  log("aa", "aa"); // expected: true
  log("aa", "ab"); // expected: false
  log("a", "a"); // expected: true
  log("abc", "acb"); // expected: false
  log("aaba", "aaab");
  log("abc", "ab");
  log("uqbjvaxu", "xuuqbjva");
  log("eyy", "yey");
  log("abcde", "cdeab");
  log("abcde", "abced");

  function log(str1, str2) {
    console.log("#### INPUT", str1, str2, "####");
    const result = handler(str1, str2);
    console.log(result);
  }
});

practice(visibility.rotateStringCheckV1, () => {
  const handler = (s, t) => {
    //check for rotation
    let tlen = t.length - 1;
    if (tlen !== s.length - 1) {
      return false;
    }
    let rotation = 0;
    let i = 0;
    while (i <= tlen) {
      debugger;
      if (t[i] === s[rotation]) {
        rotation++;
        debugger;
      } else if (rotation > 0) {
        rotation = 0;
        debugger;
        continue;
      }
      i++;
      debugger;
    }
    let tc = 0;
    for (rotation; rotation <= tlen; rotation++) {
      if (s[rotation] !== t[tc]) {
        debugger;
        return false;
      }
      tc++;
      debugger;
    }
    debugger;
    return true;
  };
  log("aaaaab", "aaabba");
  log("abcde", "cdeab"); // expected: true
  log("abcde", "abced"); // expected: false
  log("abc", "cab"); // expected: true
  log("abc", "bca"); // expected: true
  log("abc", "abc"); // expected: true
  log("aa", "aa"); // expected: true
  log("aa", "ab"); // expected: false
  log("a", "a"); // expected: true
  log("abc", "acb"); // expected: false
  log("aaba", "aaab");
  log("abc", "ab");
  log("uqbjvaxu", "xuuqbjva");
  log("eyy", "yey");
  log("abcde", "cdeab");
  log("abcde", "abced");
  function log(str1, str2) {
    console.log("#### INPUT", str1, str2, "####");
    const result = handler(str1, str2);
    console.log(result);
  }
});

practice(visibility.isomorphicStrings, () => {
  const handler = (s, t) => {
    if (s === t) {
      return true;
    }
    let sLen = s.length - 1;
    let tLen = t.length - 1;
    if (sLen !== tLen) {
      return false;
    }
    let sMap = new Map();
    let tMap = new Map();
    for (let i = 0; i <= sLen; i++) {
      let se = s[i];
      let te = t[i];
      if (sMap.has(se)) {
        if (sMap.get(se) !== te) {
          debugger;
          return false;
        }
      }
      if (tMap.has(te)) {
        if (tMap.get(te) !== se) {
          debugger;
          return false;
        }
      }
      sMap.set(se, te);
      tMap.set(te, se);
      debugger;
    }
    debugger;
    return true;
  };
  log("", "a");
  log("abc", "de");
  log("paper", "title");
  log("foo", "bar");
  log("egg", "add");
  log("ab", "aa");
  log("badc", "baba");
  log("a", "a");
  log("a", "b");
  log("abc", "abc");
  log("abc", "def");
  log("", "");
  log("paper", "tiger");
  log("abab", "baba");
  log("aaaa", "bbbb");
  function log(str1, str2) {
    console.log("#### INPUT", str1, str2, "####");
    const result = handler(str1, str2);
    console.log(result);
  }
});

practice(visibility.isomorphicStringsV1, () => {
  const handler = (s, t) => {
    let sLen = s.length - 1;
    let tLen = t.length - 1;
    if (sLen !== tLen) {
      return false;
    }
    let seen = new Set();
    let map = new Map();
    for (let i = 0; i <= sLen; i++) {
      if (!seen.has(s[i])) {
        map.set(t[i], s[i]);
      }
      seen.add(s[i]);
      debugger;
    }
    let temp = "";
    for (let j = 0; j <= tLen; j++) {
      temp += map.get(t[j]) ?? "";
      debugger;
    }
    debugger;
    return s === temp;
  };
  log("", "a");
  log("foo", "bar");
  log("egg", "add");
  log("paper", "title");
  log("ab", "aa");
  log("badc", "baba");
  log("a", "a");
  log("a", "b");
  log("abc", "abc");
  log("abc", "def");
  log("abc", "de");
  log("", "");

  log("paper", "tiger");
  log("abab", "baba");
  log("aaaa", "bbbb");
  function log(str1, str2) {
    console.log("#### INPUT", str1, str2, "####");
    const result = handler(str1, str2);
    console.log(result);
  }
});

practice(visibility.longestCommonPrifix, () => {
  const handler = (strs) => {
    let indexScan = true;
    let index = 0;
    let prefix = "";
    while (indexScan) {
      let firstElementPrefix = true;
      let tempPrefix = "";
      debugger;
      for (let i of strs) {
        if (firstElementPrefix) {
          tempPrefix = i[index];
          firstElementPrefix = false;
          debugger;
        }
        if (!tempPrefix || i[index] !== tempPrefix) {
          indexScan = false;
          tempPrefix = "";
          break;
          debugger;
        }
      }
      prefix += tempPrefix;
      firstElementPrefix = true;
      index++;
      debugger;
    }
    debugger;
    return prefix;
  };
  log(["flower", "flow", "flight"]);
  log(["dog", "racecar", "car"]);
  log(["interspecies", "interstellar", "interstate"]);
  log(["apple", "app", "application"]);
  log(["a"]);
  log([""]);
  log(["", ""]);
  log(["abc"]);
  log(["abc", "abc", "abc"]);
  log(["car", "carpet", "carbon"]);
  log(["prefix", "pre"]);
  log(["hello", "world"]);
  function log(str) {
    console.log("#### INPUT", str, "####");
    const result = handler(str);
    console.log(result);
  }
});

practice(visibility.largetOddNumberInString, () => {
  const handler = (str) => {
    const len = str.length - 1;
    let strNum = "";
    let index = -1;
    let start = false;
    for (let i = len; i >= 0; i--) {
      if (str[i] % 2 > 0) {
        start = true;
      }
      if (start) {
        strNum = str[i] + strNum;
      }
    }
    return strNum;
  };
  log("52");
  log("4206");
  log("35427");
  function log(str) {
    console.log("#### INPUT", str, "####");
    const result = handler(str);
    console.log(result);
  }
});

practice(visibility.largetOddNumberInStringV1, () => {
  const handler = (str) => {
    const len = str.length - 1;
    const strNum = "";
    let index = -1;
    for (let i = len; i >= 0; i--) {
      if (str[i] % 2 > 0) {
        index = i;
        break;
      }
    }
    return index >= 0 ? str.slice(0, index + 1) : "";
  };
  log("52");
  log("4206");
  log("35427");
  log("1234");
  log("12345");
  log("24681");
  log("100");
  log("101");
  log("908172");
  log("7");
  log("0");
  function log(str) {
    console.log("#### INPUT", str, "####");
    const result = handler(str);
    console.log(result);
  }
});

practice(visibility.reverseWordsInString, () => {
  const handler = (str) => {
    const len = str.length - 1;
    let result = "";
    let word = "";
    debugger;
    for (let i = len; i >= 0; i--) {
      if (str[i] !== " ") {
        word = str[i] + word;
        debugger;
      }
      if ((i === 0 && word) || (word && str[i] === " ")) {
        debugger;
        word = !result ? word : " " + word;
        debugger;
        result += word;
        debugger;
        word = "";
        debugger;
      }
      debugger;
    }
    debugger;
    return result;
  };
  log("  hello   world  ");
  log("hello");
  log("the sky is blue");
  log("hello world");
  log("  hello");
  log("hello  ");
  function log(str) {
    console.log("#### INPUT", str, "####");
    const result = handler(str);
    console.log(result);
  }
});

// Uisng the depth of the primitive string
practice(visibility.removeOuterMostParanthesis, () => {
  const handler = (str) => {
    const len = str.length - 1;
    let result = "";
    let depth = 0;
    debugger;
    for (let i = 0; i <= len; i++) {
      if (str[i] === "(") {
        if (depth > 0) {
          result += str[i];
        }
        depth++;
        debugger;
      }
      if (str[i] === ")") {
        depth--;
        if (depth > 0) {
          result += str[i];
        }
        debugger;
      }
    }
    debugger;
    return result;
  };
  log("(()())(())(()(()))");
  log("(()())(())");
  log("()()");
  function log(str) {
    console.log("#### INPUT", str, "####");
    const result = handler(str);
    console.log(result);
  }
});

//using open and close bracket count
// when open and close count is equal use nested loop
// to insert value in result
practice(visibility.removeOuterMostParanthesisV2, () => {
  const handler = (str) => {
    const len = str.length - 1;
    let result = "";
    let start = 0;
    let open = 0;
    let close = 0;
    debugger;
    for (let i = 0; i <= len; i++) {
      if (str[i] === "(") {
        open++;
        debugger;
      }
      if (str[i] === ")") {
        close++;
        debugger;
      }
      if (open === close) {
        debugger;
        for (let j = start + 1; j < i; j++) {
          result += str[j];
          debugger;
        }
        start = i + 1;
        open = 0;
        close = 0;
        debugger;
      }
    }
    debugger;
    return result;
  };
  log("(()())(())(()(()))");
  log("(()())(())");
  log("()()");
  function log(str) {
    console.log("#### INPUT", str, "####");
    const result = handler(str);
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
    removeOuterMostParanthesis: 0,
    reverseWordsInString: 0,
    largetOddNumberInString: 0,
    largetOddNumberInStringV1: 0,
    longestCommonPrifix: 0,
    isomorphicStrings: 0,
    rotateStringCheck: 0,
    anagramCheck: 0,
    sortCharByFreq: 0,
    depthOfParentheses: 0,
    romanInteger: 0,
    integerToRoman: 0,
    integerToRomanGreedy: 1,
  };

  return testFunction;
}
