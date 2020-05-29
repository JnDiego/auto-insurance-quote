/**
 * Obtiene la diferencia de años
 * @param {*} year Año seleccionado por el usuario
 */
export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

/**
 * Calcula el total a pagar según la marca
 * @param {*} brand Marca seleccionada por el usuario
 */
export function calculateBrand(brand) {
  let increase;
  switch (brand) {
    case 'american':
      increase = 1.15;
      break;
    case 'european':
      increase = 1.3;
      break;
    case 'asiatic':
      increase = 1.05;

      break;

    default:
      break;
  }
  return increase;
}

/**
 * Calcula el tipo de seguro
 * @param {*} plan Plan seleccionado por el usuario
 */
export function getPlanIncrease(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}

/**
 * Muestra la primer letra mayuscula
 * @param {*} text Texto a modificar.
 */
export function firstUppercase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
