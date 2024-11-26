const axios = require('axios');
const utils = require('./utils.js');

const sum = utils.sum;
const print = utils.print;

const throwingFunction = () => {
    throw Error("Missing implementation!");
}

const one = 1;
print(`${one} + ${one} = ${sum(one, one)}`);

// throwingFunction();


async function loadUrl(url) {
    try {
      const response = await axios.get(url);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
    return undefined;
}

loadUrl("https://google.com/").then((response) => {
    console.log("Response: ", response);
})
.catch(console.error);
