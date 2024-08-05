/**
 * Si un ciclista se desplaza a una velocidad de Y km/hr durante X minutos.
 * ¿Que distancia recorre en total?
 */

// DISTANCIA - TIEMPO - VELOCIDAD
// DISTANCIA = V * T
// TIEMPO = D / V
// VELOCIDAD = D / T

const distanciaRecorrida = (velocidad, tiempo) => {
  const tiempoHora = tiempo / 60;
  const distancia = velocidad * tiempoHora;

  console.log(
    `Tomando en cuenta que el ciclista viajó a ${velocidad} Km/hr y durante ${tiempo} minutos, es decir ${tiempoHora} horas...`
  );
  console.log(`Este a recorrido ${distancia} km`);
};

distanciaRecorrida(34, 50);
