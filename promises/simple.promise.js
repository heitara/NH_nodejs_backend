const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
    //   resolve("foo");
        reject("simulate error!")
    }, 3000);
  });

  myPromise
  .then((result) => {
    console.log("The promise was resolved with ", result);
  })
  .catch((reason) => {
    console.log("The promise was rejected with ", reason);
  });