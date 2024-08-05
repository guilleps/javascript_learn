/**
 * La distancia entre Trujillo y Chiclayo es de 200 km. Si un conductor parte de Trujillo a una velocidad
 * constante de Y km/hr. Qué tiempo le toma llegar a Chiclayo
 */

// DISTANCIA - TIEMPO - VELOCIDAD
// DISTANCIA = V * T
// TIEMPO = D / V
// VELOCIDAD = D / T

// DISTANCIA = 200 - VELOCIDAD = Y
// TIEMPO ? 200km / Ykm/hr  = (horas)
// hora = 60 min

const TRUJILLO_IN_CHICLAYO = 200;

const timeToTravel = (Y) => {
    const tiempoEnHoras = DISTANCIA_TRUJILLO_CHICLAYO / velocidad;
    const tiempoEnMinutos = tiempoEnHoras * 60;
  
    console.log(`Tiempo de viaje en horas: ${tiempoEnHoras.toFixed(2)} horas`);
    console.log(`Tiempo de viaje en minutos: ${tiempoEnMinutos.toFixed(2)} minutos`);
};

timeToTravel(45);
