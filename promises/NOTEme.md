# 📌 Promesas en JavaScript

## 🎯 ¿Qué es una Promesa?
Una **Promesa** es un objeto que representa el resultado esperado de una operación asíncrona.  
Permite manejar procesos que toman tiempo sin bloquear el hilo principal.

## ⏳ Operación Asíncrona
Una **operación asíncrona** no se ejecuta de inmediato, sino en segundo plano, permitiendo que el código continúe sin interrupciones.

---

## 🔄 Estados de una Promesa
Una promesa puede estar en uno de estos tres estados:

✅ **Fulfilled (Cumplida):**  
La operación finalizó exitosamente.

❌ **Rejected (Rechazada):**  
Ocurrió un error y debe ser manejado.

⌛ **Pending (Pendiente):**  
La operación sigue en proceso, esperando un resultado.

---

## 🍽️ Ejemplo: Pedir comida por delivery
Podemos representar un pedido de comida como una Promesa, donde hay dos posibles resultados:

1️⃣ **Pedido exitoso:**  
   - Haces el pedido (**Promesa creada**).  
   - El restaurante prepara la comida (**Estado pendiente**).  
   - La comida llega a tu domicilio (**Promesa cumplida**).

2️⃣ **Pedido fallido:**  
   - Haces el pedido (**Promesa creada**).  
   - El restaurante prepara la comida (**Estado pendiente**).  
   - El restaurante cancela el pedido (**Promesa rechazada**).

---

## 🏗️ Creación de una Promesa

Para crear una Promesa, usamos su **constructor**, el cual recibe una función con dos parámetros:  
**`resolve`** (cuando el resultado es exitoso) y **`reject`** (cuando ocurre un error).

```javascript
const pedirComida = new Promise((resolve, reject) => {
  let comidaLista = false; // La promesa fallará en esta ejecución

  // Simulamos un pedido de comida con retraso
  setTimeout(() => {
    if (comidaLista) {
      resolve("🍒 Tu pedido está listo");
    } else {
      reject("🌇 Estamos llenos de pedidos, intenta más tarde");
    }
  }, 2000); // retraso de 2 segundos
});

// Manejo de la Promesa
pedirComida
  .then((success) => {
    console.log("✅ Mensaje de éxito:", success);
  })
  .catch((error) => {
    console.log("❌ Mensaje de error:", error);
  })
  .finally(() => console.log("Fin..."));
```

Además, para poder manejar el resultado de una Promesa, usamos los métodos **.`then()`** (cuando termina exitosamente se ejecuta) y **`.catch()`** (al fallar muestra el problema).

Por ultimo, el método **`.finally()`** siempres es usado al final de un promesa, sin importar el exito o fracaso del resultado. Su utilidad se da en las tareas finales **(cerrar conexiones, etc...)**