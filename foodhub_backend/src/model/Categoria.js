export const CategoriaEnum = Object.freeze({
  DESAYUNO: "DESAYUNO",
  ALMUERZO: "ALMUERZO",
  CENA: "CENA",
  POSTRES: "POSTRES",
  SUPERAVIT: "SUPERAVIT",
  DEFICIT: "DEFICIT",
});

export const validateCategoria = (categoria) => {
  if (!Object.values(CategoriaEnum).includes(categoria)) {
    throw new Error(`Categoría no válida: ${categoria}`);
  }
};
