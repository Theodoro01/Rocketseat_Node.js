const getFlagValue = require("./flag");

console.log(`Oi ${getFlagValue("--name")} ${getFlagValue("--greeting")}`)