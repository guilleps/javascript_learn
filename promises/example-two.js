function cocinar() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("mal ahi bro");
    }, 2000)
  );
}

function servir() {
  return new Promise((resolve, reject) => {
    const pedidoListo = false;
    setTimeout(() => {
      if (pedidoListo) {
        resolve("🍒Tu pedido esta servido");
      } else {
        reject("🌇Estamos llenos de pedidos, intenta mas tarde");
      }
    }, 1000);
  });
}

async function resultado() {
  try {
    let x = await cocinar();
    console.log(x);

    let y = await servir();
    console.log(y);
  } catch (error) {
    console.log(error);
  }
}

resultado();
