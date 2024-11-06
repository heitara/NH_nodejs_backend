// List all builtin modules 
const nodeModules = require('node:module').builtinModules;
nodeModules.forEach(item => console.log(item));
// console.log(nodeModules);
return;

const fsModuleName = "node:fs";
const moduleApi = require('node:module');

if (moduleApi.isBuiltin(fsModuleName)) {
    console.log(`${fsModuleName} is a NodeJS module!`);
} else {
    console.log(`${fsModuleName} is not a NodeJS module!`);
}

const checkModuleStatus = (moduleName) => {
    const moduleApi = require('node:module');

    if (moduleApi.isBuiltin(moduleName)) {
        console.log(`${moduleName} is a NodeJS module!`);
    } else {
        console.log(`${moduleName} is not a NodeJS module!`);
    }
}

// checkModuleStatus("zlib");
// checkModuleStatus("lodash");