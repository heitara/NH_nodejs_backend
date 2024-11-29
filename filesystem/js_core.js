// you can change the "context" of global functions using call()
function f () {
    console.log(this.a);
}

const f1 = () => {
    console.log(this.a);
}
const a1 = {a : 1};
const b1 = {a : "Hello!"};
f.call(a1);
f.call(b1);
f1();
f1.call(a1);
f1.call(b1);