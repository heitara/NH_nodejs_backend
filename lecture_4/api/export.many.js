function printsAllItems(array) {
    array.forEach(element => {
        console.log(element);
    });
}

const helloNode = "Hello NodeJS!";

module.exports = {
    printsAllItems: printsAllItems,
    helloNode: helloNode,
    f1: printsAllItems,
};