const visibility = isVisible();

practice(visibility.removeOuterMostParanthesis, () => {
  const handler = (arr, target) => {};
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
    removeOuterMostParanthesis: 0,
  };

  return testFunction;
}
