// en Common.js no es posible asignar la expresion await al cuerpo de la funcion, de la forma moderna si
// para hacer que funcion en la forma clasica, podemos hacer uso de una funcion autoinvocada
// IIEF -> Inmediatly Invoked Function Expression
const fs = require("node:fs/promises");

// función autoinvocada
// (
//  () => {} // el cuerpo de  la funcion, encerrado en parentesis
// )() // y cerramos con otros parentesis, es decir la ejecutamos en el mismo momento que la creamos

// es lo mismo que
// function name(params) {} // creamo la funcion por separado
// name() // y la volvemos a llamar para su ejecucion

// entonces metiendo dentro de una IIEF en el sistema clasico es posible ejecutar una funcion asincrona con await - async

(
    // agregamos async para convertir la funcion a asincrona
    async () => {
        console.log("Leyendo el primer archivo");
        const text = await fs.readFile("./hola.txt", "utf-8");
        console.log(`Primer texto: ${text}`);
        
        console.log("---- Hacer cosas mientras lee el archivo ----");
        
        console.log("Leyendo el segundo archivo");
        const textSegundo = await fs.readFile("./hola1.txt", "utf-8");
        console.log(`Segundo texto: ${textSegundo}`);
    }
)() 
// la expresion de await (esperar) -> esperar a que termine o reciba un evento
// solo es posible usarla en funciona asincrona, por ello la funcion autoinvocada
