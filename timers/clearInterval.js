// clearInterval - cancelar um setInterval

const timeOut = 3000;
const checking = () => console.log("checking")

let interval = setInterval( checking , timeOut )
clearTimeout(interval)
