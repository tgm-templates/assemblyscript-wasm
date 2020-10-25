const { AsBind } = require("as-bind");
const fs = require("fs");

let moduleInstance = null;

module.exports = async () =>  {
    const wasm = fs.readFileSync("./build/optimized.wasm");
    if(moduleInstance == null) {
        moduleInstance = (await AsBind.instantiate(wasm)).exports;
    }
    return moduleInstance;
};
