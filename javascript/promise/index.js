// Async await use instead of then

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
