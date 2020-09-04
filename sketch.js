var bgImg,bg2Img
var bubble,bubbleImg;
var button
var backgroundImg;
var bg
//var bg="TDC.jpg"

function preload(){

bgImg=loadImage("TDC.jpg");
bg2Img=loadImage("TDC2.jpg");
//getBackGroundchange();
bubbleImg=loadImage("bubb.png");

}

function setup(){
createCanvas(3000,1500);
//bubble=createSprite(1500,900,300,300);
//bubble=createSprite(1500,750,300,300);
//bubble.shapeColor="red"
bg=createSprite(1500,750,3000,750);
bg.scale=10
bg.addImage(bg2Img);
bg.visible=false;
 button=createButton("NEXT");
button.position(1950,1000)

var greet=createElement("h1");
var greet2=createElement("h1");
var greet3=createElement("h2")
var greet4=createElement("h3");
var greet5=createElement("h3");
var greet6=createElement("h3");
var greet7=createElement("h3");
var greet8=createElement("h3");
var greet9=createElement("h3");
var greet10=createElement("h3");
var greet11=createElement("h3")
var greet12=createElement("h3")
var greet13=createElement("h3");
var greet14=createElement("h2")



//greet.style="font-size:150px;"
greet.html("HAPPY TEACHER'S");
greet2.html("DAY");

greet2.position(1900,700)
greet.position(1600,500)
button.mousePressed(()=>{
    button.hide();
    greet.hide();
    greet2.hide();
  bg.visible=true; 
  greet3.html("HAPPY TEACHER'S DAY!");
  greet3.position(400,200); 

  greet4.html("to all the teachers! Wishing you joy and happiness");
  greet4.position(950,220);

  greet5.html("you are an amazing teacher and you only deserve the best.The best teachers");
  greet5.position(400,280)

  greet6.html("teach from the heart not from the book Thank you for being a wonderful teacher")
  greet6.position(400,340)

  greet7.html("*THANKU YOU for all you help No one else can teach this subject as well as you do.*")
  greet7.position(600,450);

  greet8.html("*YOU ARE THE BEST TEACHER*");
  greet8.position(800,500)

  greet9.html("*You gave us all the reasons to dream big all the resources to achieve it.*");
  greet9.position(500,600);

  greet10.html("*YOU ARE A BLESSING IN OUR LIFE*");
  greet10.position(650,650)

  greet11.html("*We will always be thankful to you for all the hardwork and efforts*")
  greet11.position(550,720);

  greet12.html("*YOU HAVE PUT IN FOR EDUCATING US*")
  greet12.position(650,770)

  greet13.html("A teacher is like candles who spend whole life in giving lights to many student");
  greet13.position(510,850)

  greet14.html("HAPPY TEACHER'S DAY");
  greet14.position(700,1050)

  //background(bg2Img)
})

}



function draw(){
background(bgImg)
drawSprites();
/*textSize(170);
textFont("Monotype Corsiva")
fill("black");
text("HAPPY TEACHER'S",900,600)
text("DAY",1300,800)*/


if(frameCount%45===0){
    bubble=createSprite(random(0,3000),1470,10,10);
    bubble.velocityY=-4;
    bubble.scale=0.3
    bubble.addImage(bubbleImg);
    console.log("bubble")
}
/*button.mousePressed(()=>{
   // button.hide();
    
  background(bg2Img)
  //console.log(background)
})*/


}
/*function getBackGroundchange(){
    if(bubble!=null){
        bg="TDC2.jpg";
    }else {
        bg="TDC.jpg"
    }
    backgroundImg=bg
}*/
