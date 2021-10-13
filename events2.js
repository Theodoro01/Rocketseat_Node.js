const { inherits } = require("util")
const { EventEmitter } = require("events")

function Character (name) {
    this.name = name;
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on("Help!", () => console.log(`Eu! O ${chapolin.name} colorado`))

console.log(" Quem podera me defender ? ")
chapolin.emit("Help!")
