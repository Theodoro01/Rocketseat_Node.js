// setTimeout - Rodar a função depois de X milisegundos
const timeOut = 3000;
const finished = () => console.log( "Hello" );

setTimeout( finished, timeOut );

console.log( "Hello 2" );