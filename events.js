const { EventEmitter } = require("events")
const ev = new EventEmitter();

// on - Ouvir sempre 
// once - ouvir uma uica vez

ev.on("saySomething", (message) => {
    console.log("Eu ouvi você:", message)
})

ev.emit("saySomething", "Arthur")