import { errorB, errorL, errorQ } from "../variables";
export function msgEncontrado(encontrado, tipo) {
  let msg = "";

  if (encontrado) {
    errorB.setAttribute("style", "color: green");
    errorQ.setAttribute("style", "color: green");
    errorL.setAttribute("style", "color: green");
  } else {
    errorB.setAttribute("style", "color: red");
    errorL.setAttribute("style", "color: red");
    errorQ.setAttribute("style", "color: red");
  }

  msg = encontrado ? "Valor encontrado" : "Valor NO encontrado";
  if (tipo == "b") errorB.innerHTML = msg;
  else if (tipo == "l") errorL.innerHTML = msg;
  else {
    errorQ.innerHTML = msg;
  }
}

// Muestra el estado de la busqueda
export function state(msg, tipo, busq) {
  console.log("state: " + msg + ", " + tipo + ", " + busq);
  let id = "estado-" + busq;
  let elem = document.getElementById(id);
  elem.innerHTML = msg;

  if (tipo == 0) {
    elem.style.color = "green";
  } else if (tipo == 1) {
    elem.style.color = "red";
  } else {
    elem.style.color = "white";
  }
}
