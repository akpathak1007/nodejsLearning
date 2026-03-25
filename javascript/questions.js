for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("With var keyword", i);
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("With let keyword", i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  const innerFunction = (i) => {
    setTimeout(function () {
      console.log("With clousure", i);
    }, 1000);
  };
  innerFunction(i);
}
