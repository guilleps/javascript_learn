/* eslint-disable quotes */
/* eslint-disable semi */
/**
 * nodejs -> es un entorno de ejecucion que provee una biblioteca de modulos, que permite hacer miles de funciones
 * tambien comprendiendo el sistema operativo del equipo o maquina local
 */

const os = require("node:os");

console.log("Informacio de nuestor sistema operativo");
console.log("-------------------");

console.log("Nombre del sistema operativo", os.platform());
console.log("Version del sistema operativo", os.version());
console.log("Arquitectura del sistema operativo", os.arch());
console.log("CPUs", os.cpus()); // -> permite escalara procesos en node
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60);
