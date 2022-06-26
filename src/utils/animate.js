import anime from "animejs";
import { obtenerDelay } from "./";

// funciones para animar la busqueda
export function animar(temp, estado) {
  document.getElementById(temp).classList.add(estado);

  if (estado == "buscando") {
    anime({
      targets: "#" + temp,
      scale: 1.1,
      duration: 600,
    });
  } else if (estado == "encontrado") {
    anime({
      targets: "#" + temp,
      scale: 1.3,
      rotateY: 360,
      duration: 2000,
    });
  } else if (estado == "descartado") {
    anime({
      targets: "#" + temp,
      scale: 0.9,
      duration: 800,
    });
  }
}

export function animarCambio(menor, mayor) {
  let strm = "#elQ" + menor;
  let strM = "#elQ" + mayor;

  console.log(strm, strM);

  let posm = obtenerCoord(strm);
  let posM = obtenerCoord(strM);

  console.log(posm, posM);
  anime({
    targets: strm,
    keyframes: [
      { translateY: 90 },
      { translateX: posM - posm },
      { translateY: 0 },
    ],
    duration: obtenerDelay(),
    easing: "easeInOutQuart",
  });

  anime({
    targets: strM,
    keyframes: [
      { translateY: 90 },
      { translateX: posm - posM },
      { translateY: 0 },
    ],
    duration: obtenerDelay(),
    easing: "easeInOutQuart",
  });
}

export function obtenerCoord(elemento) {
  let elem = document.querySelector(elemento);
  let rect = elem.getBoundingClientRect();
  return rect.right;
}
