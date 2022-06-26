import {
  animar,
  escribirLista,
  msgEncontrado,
  obtenerDelay,
  sleep,
  state,
  validar,
} from "../utils";

async function linearSearch(list, data) {
  let i = 0;
  let temp;

  while (i < list.length && list[i] != data) {
    temp = "elL" + i;
    state("Comprobando: " + list[i] + " = " + data, 2, "l");
    animar(temp, "buscando");
    await sleep(obtenerDelay());

    i++;
  }

  temp = "elL" + i;

  if (i >= list.length) {
    msgEncontrado(false, "l");
    state("Valor no encontrado", 1, "l");
    return;
  } else {
    state("Comprobando: " + list[i] + " = " + data, 0, "l");
    await sleep(obtenerDelay());
    state("Encontrado en posición: " + i, 0, "l");
    animar(temp, "encontrado");
    msgEncontrado(true, "l");
  }
  return;
}

// Controla el display de mensajes en el html
export function exeLinear(list) {
  let data = document.getElementById("valor-buscarL").value;
  let dataVal = validar(data);
  if (dataVal == -1) {
    document.getElementById("error-2l").innerHTML =
      "Error: Valor a buscar vacío";
  } else if (dataVal == -2) {
    document.getElementById("error-2l").innerHTML =
      "Error: Valor a buscar debe ser entero";
  } else if (list.length == 0) {
    document.getElementById("error-2l").innerHTML = "Error: Lista Vacía";
  } else {
    document.getElementById("error-2l").innerHTML = "";
    console.log("Valor a buscar: " + data);
    escribirLista(list);
    linearSearch(list, data);
  }
}
