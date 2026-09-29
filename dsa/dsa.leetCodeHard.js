const visibility = isVisible();
// LeetCode 3
practice(visibility.longestSubStringWithoutRepeat, () => {
  const handler = (s) => {
    const seen = new Set();
    let backup = "";
    const getString = (set) => {
      return Array.from(set).join("");
    };
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      debugger;
      if (seen.has(char)) {
        const temp = getString(seen);
        if (temp.length > backup.length) {
          backup = temp;
          debugger;
        }
        seen.clear();
        seen.add(char);
        debugger;
      } else {
        seen.add(char);
      }

      debugger;
    }
    let string = getString(seen);
    console.log(string.length > backup.length ? string : backup);
  };
  handler("1R1T7");
  handler("pwwkew");
  handler("AnujPathak");
  handler("abcabcbb");
  handler("eea");
  handler("OSo@");
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
    longestSubStringWithoutRepeat: false,
  };

  return testFunction;
}
