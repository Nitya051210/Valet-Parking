//Create a reference for canvas 
canvas = getElementById('mycanvas');
ctx= canvas.getContent("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {

	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;


	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greencar_imgTag.src = greencar_image;


	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawimage(background_imgTag,0, 0, canvas.height, canvas.width);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawimage(greencar_image,greencar_x, greencar_y, greencar_height, greencar_width);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{if(greencar_y >=0)
greencar_y = greencar_y - 10;
console.log("When up arrow is pressed,x ="+ +greencar_x+"|y ="+greencar_y);
uploadBackground();
upload.greencar();




	//Define function to move the car upward
}

function down()
{if(greencar_y >=300)
	greencar_y = greencar_y + 10;
	console.log("Whendownarrow is pressed,x ="+ +greencar_x+"|y ="+greencar_y);
	uploadBackground();
	upload.greencar();




	//Define function to move the car downward
}

function left()
{(greencar_x >=0)
	greencar_y = greencar_y - 10;
	console.log("When left arrow is pressed,x ="+ +greencar_x+"|y ="+greencar_y);
	uploadBackground();
	upload.greencar();
	//Define function to move the car left side
}

function right()
{{(greencar_x >=700)
	greencar_y = greencar_y + 10;
	console.log("When right arrow is pressed,x ="+ +greencar_x+"|y ="+greencar_y);
	uploadBackground();
	upload.greencar();
	//Define function to move the car right side
}
