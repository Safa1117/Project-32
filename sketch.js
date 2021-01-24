const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;
var poly, polyIMG;
var slingShot;
var ground;
var score = 0;

function preload(){
    polyIMG = loadImage("polygon.png");
}

function setup(){
    
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    

    stand = new Ground(400, 360, 200, 20);
    block1 = new Box(340, 340, 20, 20);
    block2 = new Box(360, 340, 20, 20);
    block3 = new Box(380, 340, 20, 20);
    block4 = new Box(400, 340, 20, 20);
    block5 = new Box(420, 340, 20, 20);
    block6 = new Box(440, 340, 20, 20);
    block7 = new Box(460, 340, 20, 20);

    block8 = new Box(360, 320, 20, 20);
    block9 = new Box(380, 320, 20, 20);
    block10 = new Box(400, 320, 20, 20);
    block11 = new Box(420, 320, 20, 20);
    block12 = new Box(440, 320, 20, 20);

    block13 = new Box(380, 300, 20, 20);
    block14 = new Box(400, 300, 20, 20);
    block15 = new Box(420, 300, 20, 20);

    block16 = new Box(400, 280, 20, 20);

    ground = new Ground(400, 390, 800, 20);

    poly = Bodies.circle(100, 100, 30);
    World.add(world, poly);
    
    slingShot = new Launcher(this.poly, {x: 100, y: 200});

    // Engine.run(engine);
}

function draw(){
    
    background(255);
    
    imageMode(CENTER)
    image(polyIMG, poly.position.x, poly.position.y, 40,40)

    text("SCORE : "+score,500,100);
    stand.display();
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
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    ground.display();

    slingShot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block15.score();
   
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.poly, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.poly);
    }
}