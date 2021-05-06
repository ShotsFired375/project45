const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg, diverAnimation, sharkImg;
var diver1;


function preload() {
  bgImg = loadImage("images/RiverBGImg.jpg");
  sharkImg = loadImage("images/sharkImg.png");
}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

 diver1 = new Diver(50, 190, 10, 10);
}


function draw() {
  background("lightblue");  

  diver1.display();

  drawSprites();
}