import { findByEmail } from "../repository/authRepository.js";
import {
  cantidadDeRecetas,
  verPerfil,
} from "../repository/creadorRepository.js";

export const verDatosPerfil = async (email) => {
  const creador = await verPerfil(email);
  if (!creador) {
    throw new Error("Creador no encontrado");
  }
  return creador;
};

export const verCantidadDeRecetas = async (email) => {
  const cantRecetas = await cantidadDeRecetas(email);
  return cantRecetas;
};

export const findIdByEmail = async (email) => {
  const user = await findByEmail(email);
  if (!user) throw new Error("Usuario no encontrado");
  return user.id_creador;
};
