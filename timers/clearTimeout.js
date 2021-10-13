// clearTimeout - cancelar um timeOut

const timeOut = 3000;
const finished = () => console.log( "Hello" );

let timer = clearInterval( finished, timeOut )
clearInterval(timer)
