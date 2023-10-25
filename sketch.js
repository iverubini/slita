var cam;
var x=0;
var y=0;

function setup() {
  
  
  createCanvas(wC=windowWidth, hC=windowHeight);
    
  pixelDensity(1);
  
  cam = createCapture(VIDEO);
  
  mic = new p5.AudioIn();
  mic.start();
  
  background(251, 193, 147);
  
  
  
  
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
  
  print(micLevel);
   
  if (mouseIsPressed || micLevel > 0.01) {x = x+2};
  
  if (x > wC) { x = 0; y = y + 150} ;
  
  if (y > hC) { x = 0; y = 0};
  

  
  
 // print(voz);
  
}
