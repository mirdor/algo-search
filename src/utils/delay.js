export function obtenerDelay() {
  let delay = document.getElementById("delay").value;
  delay = delay - 10000;
  delay = Math.abs(delay);
  return delay;
}
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
