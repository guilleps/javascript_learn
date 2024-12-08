import { confirmColegiado, findColegiadoByNombreApellidosCodigo } from "../repository/colegiadoRepository.js";

export const confirmarColegiadoService = async (codigo) => {
  const colegiado = await confirmColegiado(codigo);
  if (!colegiado) throw new Error("El código de colegiado no es válido o ya está confirmado.");
  return colegiado;
};

export const validarCodigoColegiadoService = async (nombre, apellidoPaterno, apellidoMaterno, codigo) => {
  const colegiado = await findColegiadoByNombreApellidosCodigo(nombre, apellidoPaterno, apellidoMaterno, codigo);
  if (!colegiado) {
    throw new Error("Código de colegiado no encontrado o ya confirmado.");
  }
  return colegiado;
};