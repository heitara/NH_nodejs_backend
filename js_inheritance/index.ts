const log = (a) => {
    console.log("Log function!");
    console.log(a);
    console.log("End!");
}

const baseObj = {
    _log: log,
    log() {
        console.log("Object method (function).");
        console.log(`State ${this.state}`);
        this._log(this.state);
    }
}


baseObj.log();
