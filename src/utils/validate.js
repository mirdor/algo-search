export function validar(entrada) {
  if (entrada == "") {
    return -1; //-1 = vacío
  } else if (entrada % 1 != 0) {
    return -2; //-2 = valor no entero
  } else if (entrada < 0) {
    return -3;
  } else {
    return entrada;
  }
}
