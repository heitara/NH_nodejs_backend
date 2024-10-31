const printAll = require("./demo.js");
const api = require("./api/export.many.js");

function main() {
    console.log("Start...");

    console.log("Read a JSON file.");

    const items = ["Peter", "John", "Anna"];

    // console.log("printAll=", printAll);
    printAll(items);
    // console.log("Api=", api);
    console.log(api.helloNode);

    api.printsAllItems(items);

    console.log(api.helloNode);

    api.f1(items);
}


main();