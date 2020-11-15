var canvas;
var item = 0;

var form;

var welcome;

function setup(){
    canvas = createCanvas(200,30);
    canvas.parent('sketch-holder');
}

function draw(){
    background("skyblue");
   
    fo();

    textSize(20)
    text("Cart Items: " + item,20,20);
}

function fo(){
    form = new Form();
    form.display();
}