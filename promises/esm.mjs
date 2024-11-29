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

await f(1, 1);