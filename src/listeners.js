//BOTON DE LLENAR ARREGLO
import {
  getNumElementos,
  setList,
  escribirLista,
  zoomIn,
  zoomOut,
  insercion,
  list,
} from "./extras";
import { exeBinaria, exeLinear, exeQuick } from "./searchAlgorithms";

document
  .getElementById("botonLlenar")
  .addEventListener("click", getNumElementos);

document
  .getElementById("botonLlenar")
  .addEventListener("click", () => setList(list));

document
  .getElementById("botonLlenar")
  .addEventListener("click", () => escribirLista(list));

//BOTON DE BUSQUEDA BINARIA
document
  .getElementById("botonBin")
  .addEventListener("click", () => exeBinaria(list));

//BOTON DE BUSQUEDA BINARIA
document
  .getElementById("botonLin")
  .addEventListener("click", () => exeLinear(list));

//BOTON DE BUSQUEDA BINARIA
document
  .getElementById("botonQui")
  .addEventListener("click", () => exeQuick(list));

//ZOOM IN
document.getElementById("zoom-in-icon").addEventListener("click", zoomIn);

//ZOOM OUT
document.getElementById("zoom-out-icon").addEventListener("click", zoomOut);

//INSERCIÓN DE VALORES
document.getElementById("insertar-boton").addEventListener("click", insercion);
