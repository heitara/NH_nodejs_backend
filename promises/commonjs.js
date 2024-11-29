//  require 
const f = async (a, b) => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${a+b}`);
            resolve(a+b);
        }, 3000);
    });
    return await p;
}

//this is not working you should use promises
//await f(1, 1);

f(1, 1).then((sum) => {
    //do somehting with the sum if needed
}).catch(console.log);