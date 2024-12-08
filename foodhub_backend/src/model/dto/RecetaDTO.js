import { z } from "zod";
import { CategoriaEnum } from "../Categoria.js";

export const RecetaSchema = {
  create: z.object({
    titulo: z
      .string()
      .min(1, "El título no puede estar vacío")
      .max(100, "El título no puede tener más de 100 caracteres"),
    descripcion: z
      .string()
      .min(1, "La descripción no puede estar vacía")
      .max(250, "La descripción no puede tener más de 250 caracteres"),
    tiempo_coccion: z
      .number()
      .positive("El tiempo de cocción debe ser un número positivo")
      .int("El tiempo de cocción debe ser un número entero")
      .min(1, "El tiempo de cocción debe ser al menos 1 minuto"),
    porciones: z
      .number()
      .positive("El número de porciones debe ser un número positivo")
      .int("El número de porciones debe ser un número entero")
      .min(1, "Debe haber al menos una porción"),
    calorias: z
      .number()
      .positive("Las cantidad de calores deben ser un número positvo"),
    imagen: z.string().optional().nullable(),
    categoria: z.enum(["DESAYUNO", "ALMUERZO", "CENA", "POSTRES", "SUPERAVIT", "DEFICIT"]),
    ingredientes: z
      .array(
        z.object({
          ingrediente: z.string().min(1, "El ingrediente debe tener un nombre"),
        })
      )
      .min(1, "Debe haber al menos un ingrediente"),
    instrucciones: z
      .array(
        z.object({
          instruccion: z.string().min(1, "Cada instrucción debe tener un paso"),
        })
      )
      .min(1, "Debe haber al menos una instrucción"),
  }),
};
