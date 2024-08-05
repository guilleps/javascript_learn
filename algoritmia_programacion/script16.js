/**
 * A un empleado público le corresponde un sueldo bruto mensual de X soles, de lo cual se le descuenta
 * el 5% por AFP, el 12% por CTS y el 9% por ESSALUD. ¿Cuánto recibe como sueldo neto?
 * (sueldo neto = sueldo bruto - descuentos)
 */

const DESCUENTOS = {
  AFP: 0.05,
  CTS: 0.12,
  ESSALUD: 0.09,
};

const sueldoNeto = (sueldoBruto) => {
  const descuentoTotal = Object.values(DESCUENTOS).reduce(
    (acumulado, porcentaje) => acumulado + sueldoBruto * porcentaje,
    0
  );

  //   const descuentoAFP = descuento(sueldo, AFP);
  //   const descuentoCTS = descuento(sueldo, CTS);
  //   const descuentoESSALUD = descuento(sueldo, ESSALUD);

  const neto = sueldoBruto - descuentoTotal;

  console.log(`El sueldo bruto del empleado es: ${sueldoBruto} soles`);
  console.log(`El descuendo aplicado al sueldo es de: ${descuentoTotal} soles`);
  console.log(`Es decir, su sueldo oficial? es: ${neto} soles`);
};

sueldoNeto(7600);
