if (isRun().promiseAnyExample) {
  console.log("Promise.any() Example");
  async function promiseAnyExample(fails) {
    let p1 = Promise.reject("Promise1 - Rejected");
    let p2 = Promise.reject("Promise2 - Rejected");
    let p3 = Promise.reject("Promise3 - Rejected");
    let p4 = null;
    if (fails) {
      p4 = Promise.reject({ message: "Promise4 - Reject" });
    } else {
      p4 = Promise.resolve({ message: "Promise4 - Resolved" });
    }
    return await Promise.any([p1, p2, p3, p4]);
  }

  promiseAnyExample()
    .then((v) => {
      console.log(
        "Any only return resolve promise and wait untill all fails.",
        v,
      );
    })
    .catch((err) => {
      console.log("Error", err);
    });
  promiseAnyExample(true)
    .then((v) => {
      console.log(
        "Any only return resolve promise and wait untill all fails.",
        v,
      );
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

if (isRun().promiseRaceExample) {
  async function promiseRaceExample(fails = false) {
    // who ever the first whether it is resolve and reject will be returned
    const p1 = new Promise((res) => {
      setTimeout(() => {
        console.log(
          "Promise1 - In then block only signle object will be come who ever evalucates (either fullfilled or rejected) first. Callback inside settimeout have not captured in then block. Although it run by event log \n",
        );
        return res("This is settimeout inside promise");
      }, 1000 * 2);
    });
    const p2 = Promise.resolve({ message: "this is second resolved promise" });
    let p3 = null;
    if (fails) {
      p3 = Promise.reject({ message: "this is third rejected promise" });
    } else {
      p3 = Promise.resolve({ message: "this is third resolved promise" });
    }
    const p4 = new Promise((res) => {
      setTimeout(() => {
        console.log(
          "Promise4 - settimeout console.log() run but will not resolve",
        );
        return res("Promise 4 settimeout out will also not run");
      }, 1000 * 3);
    });
    const result = await Promise.race([p1, p2, p3, p4]);
    return result;
  }
  promiseRaceExample(true)
    .then((v) => {
      console.log("Then block", v);
    })
    .catch((error) => {
      console.log("Catch block", error);
    });
}
if (isRun().promiseAllSettledExample) {
  async function promiseAllSettledExample(fails = false) {
    const p1 = Promise.resolve({ message: "this is first resolved promise" });
    const p2 = Promise.resolve({ message: "this is second resolved promise" });
    let p3 = null;
    if (fails) {
      p3 = Promise.reject({ message: "this is third rejected promise" });
    } else {
      p3 = Promise.resolve({ message: "this is third resolved promise" });
    }

    const result = await Promise.allSettled([p1, p2, p3]);
    return result;
  }
  promiseAllSettledExample(true)
    .then((v) => {
      console.log("Then block", v);
    })
    .catch((error) => {
      console.log("Catch block", error);
    });
}
if (isRun().promiseAllExample) {
  async function promiseAllExample(fails = false) {
    const p1 = Promise.resolve({ message: "this is first resolved promise" });
    const p2 = Promise.resolve({ message: "this is second resolved promise" });
    let p3 = null;
    if (fails) {
      p3 = Promise.reject({ message: "this is third rejected promise" });
    } else {
      p3 = Promise.resolve({ message: "this is third resolved promise" });
    }

    const result = await Promise.all([p1, p2, p3]);
    return result;
  }

  promiseAllExample().then((v) => {
    console.log("Response capured in then- FIRST CALL", v);
  });
  promiseAllExample(true).catch((error) => {
    console.log("Response capured in catch- SECOND CALL", error);
  });
}
function isRun() {
  return {
    promiseRaceExample: false,
    promiseAllSettledExample: false,
    promiseAllExample: false,
    promiseAnyExample: true,
  };
}

/**
   Promise compositions using Promise.all(), Promise.allSettled(), Promise.any(), Promise.race()
   Promise.all() => Waits for all promise to resolve, rejects immediately if anyone fails
   Promise.allSettled() => Wait for all promise (success + failure)
   Promise.race() => Return first resolved or rejected, first to sattles win
   Promise. any() => Return first resolved promise, ignore all failures utill all fails
*/
