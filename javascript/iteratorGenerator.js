const basicIteretorExampleFlag = false;
const generatorFunctionExampleFlag = false;
const symbolIterableExampleFlag = false;
const forOfLoopWithIteratorFlag = false;
const iteratorLogSignatureForDiffObjectFlag = false;
const iterableVsGeneratorFlag = false;
const syntexesAndExpressionsExpectIterablesFlag = false;
const generatorMethodsFlag = true;
basicIteretorExample();
generatorFunctionExample();
symbolIterableExample();
forOfLoopWithIterator();
iteratorLogSignatureForDiffObject();
iterableVsGenerator();
syntexesAndExpressionsExpectIterables();
generatorMethods();
function generatorMethods() {
  // Generator methods like return(), throw(), next(argument) to control it from outside
  if (!generatorMethodsFlag) {
    return;
  }
  // yield means stopping a process so yeild in finally block will run in last next()
  function* jobProcess() {
    try {
      console.log("Start Job");
      const step1 = yield "step1";
      console.log("yiedl1 result", step1);

      const step2 = yield "step2";
      console.log("yield2 result", step2);

      const step3 = yield "step3";
      console.log("yield3 result", step3);
      return "job completed";
    } catch (error) {
      console.log("Error handled", error);
      //      yield { message: "Inside catch", data: error };
    } finally {
      console.log("Finally block");
      //      yield { message: "Inside finally block" };
    }
  }
  const job = jobProcess();
  console.log(job.next("data with first next call")); //in first next argument always ignores
  //  console.log(job.next("data with second next call"));
  // console.log(job.throw("I am throwing error"));
  console.log(job.next("scond next"));
  //  console.log(job.return("Return from next "));
  console.log(job.next("third next"));
  console.log(job.next("fourth next"));
}
function syntexesAndExpressionsExpectIterables() {
  if (!syntexesAndExpressionsExpectIterablesFlag) {
    return;
  }
  console.log(
    "### Javascript Syntexes and Expression that required iterables###",
  );

  console.log("yield* expression- Delegates iteration to another iterable");
  function* gen() {
    yield* ["a", "b", "c"]; // only yield will return array but yeild* elements
  }
  for (let i of gen()) {
    console.log(i);
  }

  // for... of loop
  console.log(`
 for... of loop, how works internally
 const it= ['a', 'b', 'c'][Symbol.iterator]();
 it.next();
 it.next();
 it.next();
`);
  for (let j of ["c", "d", "e"]) {
    console.log(j);
  }

  // Spread Operator
  console.log(
    `\nSpread Operator, how internally work
const it = 'abc'[Symbol.iterator]();
it.next();
it.next()
it.next()
`,
    [..."abc"],
  );
  // Destructuring with iterable
  let [a, b, c] = new Set([1, 2, 3]);
  console.log(
    `\nDestructuring with iterable, how it work
const it = temp[Symbol.iterator()];
a = it.next().value;
b = it.next().value;
c = it.next().value;
`,
    a,
    b,
    c,
  );
}
function iterableVsGenerator() {
  // iterable can be a simple object which can be directly used in for...of loop
  // generator function when called return a iterable then that object is for in for...of loop

  if (!iterableVsGeneratorFlag) {
    return;
  }
  console.log("Iterable VS Generator");
  function* iterator() {
    yield "Anuj";
    yield "Pathak";
  }
  const iterable = {
    *[Symbol.iterator]() {
      yield "this";
      yield "is";
      yield "coming";
      yield "directly";
      yield "from object iterator";
    },
  };
  console.log("Execution of generator function=>");
  for (let i of iterator()) {
    console.log(i);
  }
  console.log("\nExcution of iterable object=>");
  for (let j of iterable) {
    console.log(j);
  }
}
function iteratorLogSignatureForDiffObject() {
  if (!iteratorLogSignatureForDiffObjectFlag) {
    return;
  }
  const arr = ["one", "two", "three"];
  let arrItr = arr[Symbol.iterator];
  console.log("arr[Symbol.iterator]", arrItr);
  arrItr = arr[Symbol.iterator]();
  console.log("arr[Symbol.iterator]()", arrItr);
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());

  const map = new Map();
  map.set("four", 4);
  map.set("five", 5);
  map.set("six", 6);
  let mapItr = map[Symbol.iterator];
  console.log("map[Symbol.iterator]", mapItr);
  mapItr = map[Symbol.iterator]();
  console.log("map[Symbol.iterator]()", mapItr);
  console.log(mapItr.next());
  console.log(mapItr.next());
  console.log(mapItr.next());
  console.log(mapItr.next());

  const set = new Set(["seven", "Eight", "Nine"]);
  let setItr = set[Symbol.iterator];
  console.log("set[Symbol.iterator]", setItr);
  setItr = set[Symbol.iterator]();
  console.log("set[Symbol.iterator]()", setItr);
  console.log(setItr.next());
  console.log(setItr.next());
  console.log(setItr.next());
  console.log(setItr.next());

  const obj = { name: "Anuj", age: 26 };
  console.log("is Object iterable?", obj[Symbol.iterator]);
}

function forOfLoopWithIterator() {
  if (!forOfLoopWithIteratorFlag) {
    return;
  }
  function* test() {
    yield 1;
    yield 2;
  }
  let it = test();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());

  for (let i of it) {
    console.log(i);
  }
}

function symbolIterableExample() {
  if (!symbolIterableExampleFlag) {
    return;
  }
  console.log("ITERABLE EXAMPLE");

  const arr = [1, 2, 3, 4, 5];
  //  console.log(arr.next());
  let arrItr = arr[Symbol.iterator]();
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
}

function generatorFunctionExample() {
  if (!generatorFunctionExampleFlag) {
    return;
  }
  console.log("GENERATOR FUNCTION EXAMPLE");
  function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;
  }
  const iter1 = makeRangeIterator(1, 10, 2);

  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
}

function basicIteretorExample() {
  if (!basicIteretorExampleFlag) {
    return;
  }
  console.log("RUNNIGN BASIC ITERATOR EXAMPLE");
  // A generator that return value 0 to infinite
  function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
  }
  const iter = makeRangeIterator(1, 10, 2);
  console.log(iter);
  let result = iter.next();
  console.log(result);
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  let iter2 = makeRangeIterator(20, 30, 3);
  let result2 = iter2.next();
  while (!result2.done) {
    console.log(result2.value);
    result2 = iter2.next();
  }
}
