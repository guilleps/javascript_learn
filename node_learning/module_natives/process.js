// process -> objeto global que proporciona info y control sobre el proceso actual de ejecucion
// --> tiene propiedad y metodos que me van a permitir interactuar con el entorno de ejecucion de nodejs
// y brindara informacion relacionada con el proceso actual en ejecucion

//argumentos de entrada
console.log(process.argv);

// controlar el proceso y su salida
// process.exit(0) //-> todo va bien y termina
// process.exit(1) // -> algo salio mal

process.on("exit", () => {
  // limpiar recursos
});

// current working directory
console.log(process.cwd());

//env
console.log(process.env.PEPEN)