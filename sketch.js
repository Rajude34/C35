var ball1;
var database,position

function setup(){
    createCanvas(500,500);
    databse = firebase.database()
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";

    var ball1Position = databse.ref("Ball/Position")
    ball1Position.on("value",readPosition)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    databse.ref("Ball/Position").set({
        x: position.x+x,
        y: position.y+y
    })
}

function readPosition(data){
position = data.val()
ball1.x = position.x
ball1.y = position.y
}