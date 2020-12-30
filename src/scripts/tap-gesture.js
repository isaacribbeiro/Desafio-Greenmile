var square = document.getElementsByClassName("square")[0];

var timer;
const tempo = 500;

const mouseDown = () => {
  timer = setTimeout(function () {
    square.classList.toggle("expand");
  }, tempo);
};

const mouseUp = () => {
  clearTimeout(timer);
};

square.addEventListener("mousedown", mouseDown);
square.addEventListener("mouseup", mouseUp);