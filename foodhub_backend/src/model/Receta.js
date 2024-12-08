import Ingrediente from "./Ingrediente.js";
import Instruccion from "./Instruccion.js";

class Receta {
  constructor({
    id_receta,
    titulo,
    descripcion,
    tiempo_coccion,
    porciones,
    calorias,
    imagen = null,
    categoria,
    ingredientes = [],
    instrucciones = [],
    id_creador,
  }) {
    this.id_receta = id_receta;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.tiempo_coccion = tiempo_coccion;
    this.porciones = porciones;
    this.calorias = calorias;
    this.imagen = imagen;
    this.categoria = categoria;
    this.ingredientes = ingredientes.map((ing) => new Ingrediente(ing));
    this.instrucciones = instrucciones.map((inst) => new Instruccion(inst));
    this.id_creador = id_creador;
  }
}

export default Receta;
