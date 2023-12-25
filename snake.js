let tank = document.querySelector(".tank");
const body = document.body;

document.addEventListener("keydown", move);

function move(e) {
  let key = e.key;
  let x = tank.offsetLeft;
  let y = tank.offsetTop;

  if (key == "ArrowRight") {
    tank.className = "tank";
    tank.classList.add("right");
    tank.style.left = x + 10 + "px";
  }
  if (key == "ArrowLeft") {
    tank.className = "tank";
    tank.classList.add("left");
    tank.style.left = x - 10 + "px";
  }
  if (key == "ArrowDown") {
    tank.className = "tank";
    tank.classList.add("down");
    tank.style.top = y + 10 + "px";
  }
  if (key == "ArrowUp") {
    tank.className = "tank";
    tank.classList.add("up");
    tank.style.top = y - 10 + "px";
  }
}
