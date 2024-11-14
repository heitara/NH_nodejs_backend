import { promisify } from "util";

const myFunction = (value, timeout) => (callback) => {
    setTimeout(() => {
        callback(null, value);
    }, timeout);
}

const instance1 = myFunction('i1', 100);
const instance2 = myFunction('i2', 300);
const instance3 = myFunction('i3', 1000);

const printCallback = (_, value) => console.log(value);

// instance1((error1, value) => {
//     console.log("Value =", value);
//     if(error1 !== null) {
//         // TODO: error handling ....
//         return
//     }
//     instance2((error2, value2) => {
//         if(error2 !== null) {
//             // TODO: error handling ....
//             return
//         }
//         console.log("Value2 =", value2);
//         instance3((error3, value3) => {
//             if(error3 !== null) {
//                 // TODO: error handling ....
//                 return
//             }
//             console.log("Value3 =", value3);
            
//         });
//     });
// });

const promiseI1 = promisify(instance1);
const promiseI2 = promisify(instance2);
const promiseI3 = promisify(instance3);

console.log("Promisified version of the code.");

// promiseI1()
// .then((data) => console.log("Data = ", data))
// .then(() => promiseI2())
// .then((data) => console.log("Data2 = ", data))
// .then(() => promiseI3())
// .then((data) => console.log("Data3 = ", data))
// .catch(console.log);

const myValueProcessor = (data) => {
    console.log("Generic Data =", data);
}

// [promiseI1, promiseI2, promiseI3].reduce((acc, currentItem) => {
//     acc = acc.then(() => currentItem())
//     .then((data) => myValueProcessor(data));
//     return acc;
// }, Promise.resolve());

const asyncSample = async () => {
//     promiseI1()
// .then((data) => console.log("Data = ", data))
// .then(() => promiseI2())
// .then((data) => console.log("Data2 = ", data))
// .then(() => promiseI3())
// .then((data) => console.log("Data3 = ", data))
// .catch(console.log);
    try {
        const data = await promiseI1();
        console.log("Data = ", data);
        const data2 = await promiseI2();
        console.log("Data2 = ", data2)
        const data3 = await promiseI3();
        console.log("Data3 = ", data3);
    } catch (error) {
        console.log(error);
    }
}

// asyncSample();

const asyncLoop = async () => {
// [promiseI1, promiseI2, promiseI3].reduce((acc, currentItem) => {
//     acc = acc.then(() => currentItem())
//     .then((data) => myValueProcessor(data));
//     return acc;
// }, Promise.resolve());
    const promises = [promiseI1, promiseI2, promiseI3];
    try {
        for (let index = 0; index < promises.length; index++) {
            const element = promises[index];
            const data = await element();
            console.log(`Data${index} = `, data);
        }
    } catch (error) {
        console.log(error);
    }
}

// asyncLoop();

// const all = [
//     promiseI1().then((data) => console.log("* Data = ", data)),
//     promiseI2().then((data) => console.log("* Data2 = ", data)),
//     promiseI3().then((data) => console.log("* Data3 = ", data)),
// ];

const all2 = [
    promiseI3(),
    promiseI1(),
    promiseI2(),
];

Promise.all(all2).then((allResults) => {
    console.log("All are ready!", allResults);
})
.catch(console.log);