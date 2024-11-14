import fs from "node:fs/promises";
import fsCallback from "node:fs";
import { exit } from "node:process";

async function throwAnError() {
    throw new Error("This function is throwing an error.");
}

async function wrapper() {
    await throwAnError();
}

const exists = (path) => {
    return new Promise((resolve, _) => {
        fsCallback.exists(path, (exists) => {
            resolve(exists);
        });
    });
};


try {
    await wrapper();
    const f = "invalidfile.txt";
    const fileExists = await exists(f);
    if (fileExists) {
        await fs.copyFile(f, "demo.txt");    
    } else {
        console.log(`${f} doesn't exist!`);
    }   
} catch (error) {
    console.log(typeof error);
    // console.log(error.stack);
    console.log(error);
}


exit(0);
console.log("Success!");

