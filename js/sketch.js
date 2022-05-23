/*XCOAX2022*/
/*6-8 JULY*/
/*BACKGROUND P5 SKETCH FOR PRE-LAUNCH*/

let color1;
let color2;
let from;
let to;
let cnv;
p5.disableFriendlyErrors = true;
//determinar número inicial de steps 
let steps = 50;

function setup() {
  
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0, "absolute");
  cnv.parent("#bg_container");
  background(255);
  noStroke();
  from = color("magenta");
  to = color("blue");
  document.documentElement.style.setProperty("--color1", color1);
  document.documentElement.style.setProperty("--color2", color2);
}

//desenhar o bg on load
function draw(){
  let w = (windowWidth) / steps;
  for (let i = 0; i < steps; i++) {
    fill(lerpColor(from, to, (1 / steps) * i));
    rect(i * w, 0, w, windowHeight);
  }  
}

//adaptar tamanho do canvas ao redimensionar janela
function windowResized() {
  console.log("window size change");
  resizeCanvas(windowWidth, windowHeight);
}

//alterar o bg com o movimento do mouse ao mapear uma percentagem equivalente
//  cursor position: 0-100vw
//  steps nr: 12-60
function mouseMoved() {
  steps = map(mouseX, 0, windowWidth, 12, 60);
};