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
    this.log = () => {
        console.log(`[${this.x},${this.y}]`)
    }
}

Point.prototype.toJSON = function () {
    return JSON.stringify({x: this.x, y: this.y});
    // return JSON.stringify({x: undefined, y: undefined});
}

Point.prototype.toJSONArrow = () => {
    return JSON.stringify({x: this.x, y: this.y});
    // this is not the actual instance
    //return JSON.stringify({x: undefined, y: undefined});
}

const zeroPoint = new Point(0, 0);
console.log("Point.prototype check! ", Object.getPrototypeOf(zeroPoint) === Point.prototype);

zeroPoint.log();

const one = new Point(1, 1);

const json = zeroPoint.toJSON();
console.log("Regular function:");
console.log("JSON = ", json);
console.log("JSON = ", one.toJSON());

console.log("Arrow function:");
console.log("JSON = ", zeroPoint.toJSONArrow());
console.log("JSON = ", one.toJSONArrow());


function Point3D() {
    Point.call(this, 0, 0);
    // this.x = 0;
    // this.y = 0;
    this.z = 0;
}

// very important to link Point3D with Point
Point3D.prototype = Object.create(Point.prototype);
Point3D.prototype.constructor = Point3D;

const p3d = new Point3D();

console.log(p3d);

const movablePoint3d = Object.create(p3d, {
    move: {
        value(x, y, z) {
            this.x += x;
            this.y += y;
            this.z += z;
        }
    }
});

movablePoint3d.move(1, 1, 1);
console.log(movablePoint3d);


console.log(movablePoint3d instanceof Point3D);
console.log(movablePoint3d instanceof Point);


// const obj = {};
// const obj2 = {};
// console.log(Object.is(obj, obj2));
// console.log(obj === obj2);
// console.log(obj == obj2);



const target = {x: 1, y: 2};
const source = {y: 3, z: 4};

const merged = Object.assign(target, source);

console.log(merged);
console.log(target);
console.log(Object.is(merged, target));


const target1 = {x: 1, y: 2};
const source1 = {y: 3, z: 4};
const source2 = {y1: 3, z: 10};

console.log(Object.assign(target1, source1, source2));