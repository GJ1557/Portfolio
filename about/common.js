window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}

let d = 1;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  strokeWeight(2);
  fill(0, 0, 0, 0);
  noFill();
}
function draw() {

  t = frameCount / 100;
  background(255*cos(t/2)*cos(t/2));
  stroke(255*sin(t/2)*sin(t/2));
  rotateX(t);
  rotateY(t);
  rotateZ(t);
  
  d = 1;
   push();
    rotateY(d*cos(t))
    rotateX(d*cos(t))
    box(width / 2 / d, width / 2 / d, width / 2 / d);
    pop();
  for (let i = 0; i < 9; i++) {
    push();
    rotateX(i*sin(t))
    translate(0,0,i*sin(t))
    box(width / 2 / d, width / 2 / d, width / 2 / d);
    pop();
    d = d * (d + 1);
  }
}
