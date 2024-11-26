const sum = (a, b) => {
    const greeting = "Hello Debugger!";
    return a + b;
}

const print = console.log;

const one = 1;
print(`${one} + ${one} = ${sum(one, one)}`);