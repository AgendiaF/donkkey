img = "";
status = "";

function preload(){
  img = loadImage('dog&cat.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded)
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
  console.log("model loaded.")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
  if (error)
  {
    console.log(error);
  }
  console.log(results);
}

function draw() {
  image(img,0,0,640,420);
  fill("4D4DFF")
  text("Dog",45, 75);
  noFill();
  stroke("FF44CC")
  rect(30,60,450,350);

  fill("FF5F1F");
  text("Cat",320, 120);
  noFill();
  stroke("FF44CC");
  rect(300,90,270,320);
 }