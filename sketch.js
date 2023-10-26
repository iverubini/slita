var cam;
var x=0;
var y=0;
var xCd;
var yCd;
var sxCd;
var micLevel;

function setup() {
  
  
  createCanvas(wC=windowWidth, hC=windowHeight);
    
  pixelDensity(1);
  
  cam = createCapture(VIDEO);
  
  mic = new p5.AudioIn();
  
  background(251, 193, 147);
  

  AudioStart();
  CaixaDialogo();
  
}



function draw() {
  
  
  cam.loadPixels();
  cam.hide();
  
  var w = cam.width;
  var h = cam.height;
  
  noStroke();
  fill(random(100,247), 203, random(21, 60), 1);
  rect(0, 0, wC, hC);
  
  copy(cam, w/2, 0, w, h, x, y, wC/4, hC/3);
  
  micLevel = mic.getLevel();
  
  //print(micLevel);
   
  if (mouseIsPressed || micLevel > 0.01) {x = x+2};
  
  if (x > wC) { x = 0; y = y + 150} ;
  
  if (y > hC) { x = 0; y = 0};
  
   
  
  
}


function CaixaDialogo() { 
  
  let xCd = windowWidth/4 - 80; 
  let yCd = windowHeight/4 - 80; 
  let sxCd = windowWidth*3/4;
  let syCd = windowHeight/3 + 50;
  
  //strokeWeight(0);
  
  //fill('black');
  
  //rect(xCd, yCd, sxCd, syCd);
  

  push();

  
 // rectMode(CENTER);
 
  noStroke();
  
  fill('black');
  
  textSize(16);
  
  textFont('verdana');
  
  textAlign(CENTER, TOP);
  
  text('Bem vinde! Para interagir, por favor autorize o uso da sua câmera e microfone. Procure ficar no centro da captação da câmera frontal do seu dispositivo. Clique em qualquer parte da tela para acionar a SLITA, caso não queira emitir som. Obrigada pela visita!', xCd, yCd * 4, sxCd);
  
  
  pop();
    
}

function AudioStart() {
  
  let xCd = windowWidth/4 - 80; 
  let yCd = windowHeight/4 - 80; 
  let sxCd = windowWidth*3/4;
  let syCd = windowHeight/3 + 50;
  
  botao = createButton('CLIQUE P/ ACIONAR MICROFONE');
  //botao.position (3*xCd/2, 3*yCd);
  botao.position(windowWidth/2 - 65, 3*yCd);
  //botao.position(CENTER, 3*yCd);
  botao.mousePressed(() => {
    //mic = new p5.AudioIn();
    userStartAudio();
    mic.start();
    botao.hide();
  });
  
}
