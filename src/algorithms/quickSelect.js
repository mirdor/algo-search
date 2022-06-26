import {
  obtenerDelay,
  sleep,
  state,
  escribirLista,
  animar,
  animarCambio,
  msgEncontrado,
  validar,
} from "../utils";

async function quickSelect(list, left, right, data) {
  let pivot = list[right];
  let temp = "elQ" + right;

  document.getElementById(temp).classList.add("pivote");

  let pivotLoc = left;
  for (let i = left; i < right; i++) {
    let temp1 = "elQ" + i;
    let temps = "elQs" + pivotLoc;
    state("Comparando: " + list[i] + " < " + pivot, 2, "q");

    document.getElementById(temp1).classList.add("buscando");
    document.getElementById(temps).classList.add("pivotLoc");
    await sleep(obtenerDelay());

    if (list[i] < pivot) {
      await sleep(obtenerDelay());
      state("Comparando: " + list[i] + " < " + pivot, 0, "q");
      let aux = list[i];
      list[i] = list[pivotLoc];
      list[pivotLoc] = aux;

      animarCambio(i, pivotLoc);

      await sleep(obtenerDelay());

      pivotLoc++;
    } else {
      await sleep(obtenerDelay());
      state("Comparando: " + list[i] + " < " + pivot, 0, "q");
    }
    escribirLista(list);

    //if (left - 1 !=0) {
    for (let i = left - 1; i >= 0; i--) {
      animar("elQ" + i, "descartado");
    }
    //}

    //if (right+1 != list.length -1) {
    for (let i = right + 1; i < list.length; i++) {
      animar("elQ" + i, "descartado");
    }
    //}

    document.getElementById(temp).classList.add("pivote");
  }
  document.getElementById(temp).classList.remove("pivote");
  let aux = list[right];
  list[right] = list[pivotLoc];
  list[pivotLoc] = aux;

  let part = pivotLoc;
  await sleep(obtenerDelay());
  state("Trasladando pivote a la posición: " + pivotLoc, 0, "q");

  animarCambio(pivotLoc, right);
  await sleep(obtenerDelay());
  escribirLista(list);

  //escribirLista(list);
  if (part == data) {
    let temp = "elQ" + part;
    await sleep(obtenerDelay());

    animar(temp, "encontrado");
    state("Elemento encontrado: " + list[part], 0, "q");
    msgEncontrado(true, "q");
    console.log("el numero es " + list[part]);
    return;
  } else if (part < data) {
    //descartar los elementos menores de part
    for (let i = part; i >= 0; i--) {
      temp = "elQ" + i;
      animar(temp, "descartado");
    }

    return quickSelect(list, part + 1, right, data);
  } else {
    //descartar mayores a part

    for (let i = part; i < list.length; i++) {
      temp = "elQ" + i;
      animar(temp, "descartado");
    }

    return quickSelect(list, left, part - 1, data);
  }
}

export function exeQuick(list) {
  let data = document.getElementById("valor-buscarQ").value;
  let dataVal = validar(data);
  if (dataVal == -1) {
    document.getElementById("error-2q").innerHTML =
      "Error: Valor a buscar vacío";
  } else if (dataVal == -2) {
    document.getElementById("error-2q").innerHTML =
      "Error: Valor a buscar debe ser entero";
  } else if (list.length == 0) {
    document.getElementById("error-2q").innerHTML = "Error: Lista Vacía";
  } else {
    dataVal = dataVal - 0; //convertir a número
    if (dataVal <= 0 || dataVal > list.length) {
      document.getElementById("error-2q").innerHTML =
        "Error: Valor fuera de rango del arreglo";
      state("Elemento fuera del rango", 1, "q");
    } else {
      document.getElementById("error-2q").innerHTML = "";
      console.log("Posicion a buscar: " + data);

      escribirLista(list);
      quickSelect(list, 0, list.length - 1, data - 1);
    }
  }
}
