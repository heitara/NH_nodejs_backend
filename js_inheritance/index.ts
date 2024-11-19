const log = (a) => {
    console.log("Log function!");
    console.log(a);
    console.log("End!");
}

const basePrototype = {
    _log: log,
    log() {
        console.log("Object method (function).");
        console.log(`State ${this.state}`);
        this._log(this.state);
    }
}


//basePrototype.log();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
const baseInstance = Object.create(basePrototype, 
    {
        state: { value: "base"}
    }
 );

 //baseInstance.log();

 const myFirstInstance = Object.create(basePrototype,
    {
        log: {
            value() {
                this._log("first instance log");
            }
        },
        firstLog: {
            value() {
                this._log("first instance log");
            }
        }
    }
 );

//  myFirstInstance.log();
// myFirstInstance.firstLog();


function MyClass() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
    let data = Object.create(Object.prototype);
    data.name = "MyClass";

    return data;
}

const aClass = MyClass();

console.log(aClass);

function Ctor() { }
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true


function Point(x, y) {
    this.x = x;
    this.y = y;
}

const zeroPoint = new Point(0, 0);
console.log("Point.prototype check! ", Object.getPrototypeOf(zeroPoint) === Point.prototype);
