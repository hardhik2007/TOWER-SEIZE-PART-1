const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  grond,stand1,stand2
var backgroundImg,platform;
var ball, slingShot,PImg


function preload() {
 PImg=loadImage ("polygon.png")   
}

function setup () {

createCanvas (1000,500)
engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,450,1200,20);
   stand1 = new Ground(500, 300, 250, 10);
   stand2 = new Ground(800, 200, 300, 10);

block1=new Block(430,280)
block2=new Block(465,280)
block3=new Block(500,280)
block4=new Block(535,280)
block5=new Block(570,280)
block6=new Block(465,235)
block7=new Block(500,235)
block8=new Block(535,235)
block9=new Block(500,200)
block10=new Block(500,260)
ball=Bodies.circle(50,300,20)
World.add(world,ball)
slingShot=new SlingShot(ball,{x:100,y:300})



}

function draw () {

    background("lightYellow");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
imageMode(CENTER)
image(PImg,ball.position.x,ball.position.y,40,40)
slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,  {x:mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly()
}
