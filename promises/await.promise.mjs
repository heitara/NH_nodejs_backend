import fs  from 'node:fs';

const myPromise = new Promise((resolve, reject) => {
    const p = "./simple.promise.js";
    fs.exists(p, (exists) => {
        if (exists) {
            resolve({path: p, exists});
        } else {
            reject({path:p, exists, error: "missing file!"});
        }
    });
});

async function f1() {
    const x = await myPromise;
    console.log('[f1]', x); // 10
    return 1;
}

function f2() {
    return 1;
}

console.log( typeof f1); //function
console.log( typeof f1()); // object
f1().then((r)=> {
    console.log("Result = ", r);
})
console.log( typeof f2); // function
console.log( typeof f2()); // number
console.log(f2())

try {   
    const r = await myPromise;
    console.log(r);
    /// await promise1
    const one = await f1();
    console.log(one);
    console.log("Ready!")

    /// await promise2

    //...
} catch (error) {
    console.log(error);
}




    // myPromise.then((r) => {
    //     console.log(r);
    // })
    // // .then()
    // // .then()
    // .catch((error) => {
    //     console.log(error);
    // });
  
  