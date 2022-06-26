import { validar, evaluarZoom } from "./";

export function getNumElementos() {
  let tamaño = document.getElementById("numElementos").value;
  let tamañoVal = validar(tamaño);
  tamañoVal = tamañoVal - 0; // conversion a numero
  console.log(tamañoVal);
  if (tamañoVal == -1) {
    document.getElementById("error-1").innerHTML =
      "Error: Campo de tamaño vacío";
  } else if (tamañoVal == -2) {
    document.getElementById("error-1").innerHTML = "Error: Tamaño no entero";
  } else if (tamañoVal <= 0) {
    document.getElementById("error-1").innerHTML = "Error: Tamaño negativo o 0";
    valoresPermisibles = false;
  } else {
    list.length = tamañoVal;
    console.log("Tamaño del arreglo: " + list.length);
  }
}

// llena la lista de valores randoms en un rango
export function setList(list) {
  valoresPermisibles = false;

  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  let minVal = validar(min);
  let maxVal = validar(max);

  if (minVal == -1 || maxVal == -1) {
    document.getElementById("error-1").innerHTML = "Error: Campos incompletos";
  } else if (minVal == -2 || maxVal == -2) {
    document.getElementById("error-1").innerHTML =
      "Error: Campos deben ser enteros";
  } else if (list.length <= 0) {
    document.getElementById("error-1").innerHTML = "Error: Tamaño negativo o 0";
  } else {
    maxVal = maxVal - 0; //para convertir a tipo numerico
    minVal = minVal - 0;
    if (maxVal <= minVal) {
      document.getElementById("error-1").innerHTML =
        "Error: Mínimo no puede ser mayor ni igual que máximo";
    } else {
      document.getElementById("error-1").innerHTML = "";

      // Guardando en list los valores random generados
      for (let index = 0; index < list.length; index++) {
        list[index] = Math.floor(
          Math.random() * (maxVal - minVal + 1) + minVal
        );
      }
      valoresPermisibles = true;
    }
  }
}

export function escribirLista(list) {
  if (valoresPermisibles) {
    let content = "";
    let temp;

    if (document.getElementById("linear-tab").classList.contains("active")) {
      temp = "elL";
    } else if (
      document.getElementById("binary-tab").classList.contains("active")
    ) {
      list.sort((a, b) => a - b);
      temp = "elB";
    } else {
      temp = "elQ";
    }

    for (let index = 0; index < list.length - 1; index++) {
      content =
        content +
        '<div class="cuadro" id="' +
        temp +
        index +
        '">' +
        list[index] +
        '<br><small id="' +
        temp +
        "s" +
        index +
        '">' +
        index +
        "</small></div>";
    }

    content =
      content +
      '<div class="cuadro" id="' +
      temp +
      (list.length - 1) +
      '">' +
      list[list.length - 1] +
      '<br><small id="' +
      temp +
      "s" +
      (list.length - 1) +
      '">' +
      (list.length - 1) +
      "</small></div>";

    // Evalúa qué pestaña esta activa actualmente: linear, binaria y quick
    if (document.getElementById("linear-tab").classList.contains("active")) {
      document.getElementById("contenidografico-l").innerHTML = content;
    } else if (
      document.getElementById("binary-tab").classList.contains("active")
    ) {
      document.getElementById("contenidografico-b").innerHTML = content;
    } else {
      document.getElementById("contenidografico-q").innerHTML = content;
    }
    evaluarZoom();
  }
}

// permite la inserción manual de elementos
export function insercion() {
  while (list.length > 0) {
    list.pop();
  }

  let numero = 0;
  let contador = 0;
  valoresPermisibles = true;

  while ((numero = prompt("inserte el elemento " + contador))) {
    contador++;
    numero = parseInt(numero);
    console.log(numero);
    list.push(numero);
    escribirLista(list);
  }
  console.log(list);
}
