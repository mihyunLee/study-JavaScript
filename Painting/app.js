const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; // pen의 dafault color
ctx.lineWidth = 2.5; // pen의 dafault lineWidth

let painting = false;

function onMouseMove(event) {
  // canvas 내에서 마우스 위치 가져오기
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // x, y의 좌표에 따라 path 생성
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // x, y의 좌표에 따라 line 그리기
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

// 선택한 object의 style을 반환하여 array로 변환
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
