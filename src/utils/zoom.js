// Las siguientes funciones controlan el zoom
export function zoomIn() {
  if (zoom < 100) {
    zoom = zoom + 10;
    zoomTxt = zoomTxt + 4.4;
    console.log("zoom: " + zoom);
  }
  evaluarZoom();
}

export function zoomOut() {
  if (zoom > 50) {
    zoom = zoom - 10;
    zoomTxt = zoomTxt - 4.4;
    console.log("zoom: " + zoom);
  }
  evaluarZoom();
}

export function evaluarZoom() {
  if (zoom == 100) {
    document.getElementById("zoom-in-icon").classList.add("zoom-blocked");
  } else {
    document.getElementById("zoom-in-icon").classList.remove("zoom-blocked");
  }
  if (zoom == 50) {
    document.getElementById("zoom-out-icon").classList.add("zoom-blocked");
  } else {
    document.getElementById("zoom-out-icon").classList.remove("zoom-blocked");
  }

  let cuadros = document.getElementsByClassName("cuadro");
  for (let index = 0; index < cuadros.length; index++) {
    cuadros[index].style.minWidth = zoom + "px";
    cuadros[index].style.height = zoom + "px";
    cuadros[index].style.fontSize = zoomTxt + "px";
    cuadros[index].style.margin = zoom / 4 + "px";
    cuadros[index].style.padding = zoom / 8 + "px";
  }
}
