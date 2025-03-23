const pedirComida = new Promise((resolve, reject) => {
  let comidaLista = false; // el pedido fallara en esta ejecucion

  // Simulamos un pedido de comida con tiempo de retraso
  setTimeout(() => {
    if (comidaLista) {
      resolve("🍒Tu pedido esta listo");
    } else {
      reject("🌇Estamos llenos de pedidos, intenta mas tarde");
    }
  }, 2000); // retraso de 2 segundos
});

console.log(
  pedirComida
    .then((mensaje) => {
      console.log("Mensaje de exito: ", mensaje);
    })
    .catch((mensaje) => {
      console.log("Mensaje de error: ", mensaje);
    })
);
