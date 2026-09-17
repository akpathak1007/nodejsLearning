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

  console.log(handler(5));
  console.log(handler(0));
  console.log(handler(1));
  console.log(handler(2));
  console.log(handler(20));
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
    selectionSort: true,
  };

  return testFunction;
}
