// Lista de Argumentos 
console.log(process.argv);

const firtName = process.argv[2];
const lastName = process.argv[3];

console.log(`Your name is ${firtName} ${lastName}`);