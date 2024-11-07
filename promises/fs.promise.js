const fs = require('node:fs');
//https://blend.github.io/promise-utils/latest/index.html#settleall
//https://github.com/johngeorgewright/promdash
const myPromise = new Promise((resolve, reject) => {
    const p = "./simple.promise.js";
    fs.exists(p, (exists) => {
        resolve({path: p, exists});
    });
});

  myPromise
  .then((result) => {
    if (result.exists) {
        console.log(`File ${result.path} exists!`);
    } else {
        console.log("File DOESN\'T exist!");
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([result, true]);
        }, 3000);
      })
  })
  .then((arrayOfResults) => {
    console.log(arrayOfResults);
  })
  .catch((reason) => {
    console.log("The promise was rejected with ", reason);
  });