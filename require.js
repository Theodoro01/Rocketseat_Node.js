// Modulos Nativos
const path = require('path');
console.log(path.basename(__filename));

// Meus modulos 

const myModule = require("./exports.js");
console.log(myModule)

