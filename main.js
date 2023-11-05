x = 0;
y = 0;
screen_width = 0;
screen_height  = 0;
apple = "";
draw_apple = "";
speak_data = "";
to_number ="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  loadImage("apple.png");
  draw_apple = loadImage();
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing apple" + draw_apple == "set";
    }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 createCanvas(screen_width, screen_height-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for (let i = 1; i < to_number; i++){
    document.getElementById("status").innerHTML = to_number + " Apple's drawn";
    draw_apple = "";
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "Apples drawn";
    speak();
}
