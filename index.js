let fullscreen = true;

let heightManual = 500;
let widthManual = 500;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let height = fullscreen ? windowHeight : heightManual;
let width = fullscreen ? windowWidth : widthManual;

function setup() {
  let cnv = createCanvas(width, height);
  cnv.parent("cc");
  background(51);
}

function draw() {}
