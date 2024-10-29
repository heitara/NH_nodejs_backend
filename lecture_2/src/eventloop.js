console.log("Before.");

let timeoutId = setTimeout(() => {
    console.log("This function has been executed after 2 sec.");
}, 2000);

setImmediate(() => {
    console.log("setImmediate callback.");
    clearTimeout(timeoutId);
});
  

console.log("After.");
// let i = 10
// while (i > 0) {
//     console.log("i = ", i);
//     i = 2
// }