import {
  animar,
  escribirLista,
  msgEncontrado,
  obtenerDelay,
  sleep,
  state,
  validar,
} from "../utils";

async function binarySearch(list, data) {
  let min = 0;
  let temp;

  let max = list.length - 1;
  while (min <= max) {
    var center = Math.floor((min + max) / 2);
    temp = "elB" + center;
    state(
      "Comparando con el término medio: " + list[center] + " = " + data,
      2,
      "b"
    );

    await sleep(obtenerDelay()); // delay

    if (list[center] == data) {
      console.log("encontrado en: " + center);
      animar(temp, "encontrado");

      msgEncontrado(true, "b");
      state("Encontrado en posición: " + center, 0, "b");
      return;
    } else {
      state(
        "Comparando con el término medio: " + list[center] + " = " + data,
        1,
        "b"
      );
      animar(temp, "buscando");
    }
    await sleep(obtenerDelay());

    if (list[center] < data) {
      state(data + " > " + list[center], 0, "b");

      await sleep(obtenerDelay());

      min = center + 1;
      for (let i = center - 1; i >= 0; i--) {
        temp = "elB" + i;
        animar(temp, "descartado");
      }
    } else {
      state(data + " < " + list[center], 0, "b");

      await sleep(obtenerDelay());

      max = center - 1;
      for (let i = center + 1; i < list.length; i++) {
        temp = "elB" + i;
        animar(temp, "descartado");
      }
    }
  }

  for (let i = 0; i < list.length; i++) {
    temp = "elB" + i;
    animar(temp, "descartado");
  }
  state("Valor no encontrado", 1, "b");
  msgEncontrado(false, "b");
  return;
}

// Controla el display de mensajes en el html
export function exeBinaria(list) {
  let data = document.getElementById("valor-buscarB").value;
  let dataVal = validar(data);
  if (dataVal == -1) {
    document.getElementById("error-2b").innerHTML =
      "Error: Valor a buscar vacío";
  } else if (dataVal == -2) {
    document.getElementById("error-2b").innerHTML =
      "Error: Valor a buscar debe ser entero";
  } else if (list.length == 0) {
    document.getElementById("error-2b").innerHTML = "Error: Lista Vacía";
  } else {
    document.getElementById("error-2b").innerHTML = "";
    console.log("Valor a buscar: " + data);
    //ordenamiento previo

    escribirLista(list);

    binarySearch(list, data);
  }
}
