/**
// Chaning then after error caught in catched block
function step1() {
  return Promise.resolve("Step one completed");
}
function step3(cases) {
  switch (cases) {
    case "continue":
      return Promise.resolve("Step 3 three resolved");
      break;
    case "error":
      return Promise.reject("Step 3 three is rejected");
      break;
  }
}
function step2() {
  return Promise.reject("I have rejected promise in step 2");
}

step1()
  .then((v) => {
    // we will get resolved promise from step1
    console.log(v);
    return step2();
  })
  .then((v) => {
    // this step will be skipped due to rejection in step2 funciton call in previous then
    return step3("error"); // it will not run
  })
  .catch((err) => {
    // here err is caught which was rejected in first then by calling step2()
    console.log("This log from catch block", err);
    return step3("continue"); // this will run beacuse then have handled rejection now chain will continue
  })
  .then((v) => {
    console.log("This log form then after catch", v); // this will console resolved result of step3()
  });

process.on('unhandledRejection', (reson, promise)=>{
    // This is global event then caught all the rejected promise who are not handled
    // "unhandledrejection" event in brower and "unhandledRejection" in nodejs to capture
    // "rejectionHandled" event sent when a handler is attached to a rejected promise that has already caused and unhandledrejection event 
})
*/

/**
// Async await use instead of then
async function exampleForAsyncAwait() {
  try {
    const result = await doSomethingElse();
    const newRyesult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    return finalResult;
  } catch (err) {
    console.log(err.message);
  }
}
exampleForAsyncAwait()
  .then((v) => {
    // v is value of finalResult
    console.log(v);
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

// Chaining callback (callback hell) and promise
/**
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log(`Got the final result: ${finalResult}`);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);

const promise = doSomething();
//promise2 can be promise result of async successCb and failureCb
const promise2 = promise.then(successCb, failureCb);
const promise3 = promise2.then(successCb1, failureCb1);
// If error handling method is same for all steps use catch(failureCb) is same as then(null, failureCb)
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log("Got the final Result", finalResult);
  })
  .catch(failureCb);
*/

// Async programming with callbacks
/**
   function successCb(result) {
  console.log("Audio file ready at url", result);
}
function failureCb(err) {
  console.log(`Error while generating file ${err}`);
}

createAudioFileAsync(audioSettings, successCb, failureCb);
// if createAudioFileAsync were rewritten to return promise
createAudioFileAsync(audioSettings).then(successCb, failureCb);
*/
