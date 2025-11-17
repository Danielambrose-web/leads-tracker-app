let bodyEl = document.getElementsByTagName("body")[0];

function display(color) {
  bodyEl.style.backgroundColor = color;
  console.log(color);
}
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  bodyEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(`rgb(${red}, ${green}, ${blue})`);
}
