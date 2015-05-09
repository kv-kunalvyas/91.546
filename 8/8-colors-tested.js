// Kunal Vyas
// 2-4 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 8
// University of Massachusetts, Lowell

var canvas = document.getElementById('myCanvas');
var pCanvas = document.getElementById('palette');
var context = canvas.getContext('2d');
var pContext = pCanvas.getContext('2d');
 
var sketch = document.querySelector('#sketch');
var sketchStyle = getComputedStyle(sketch);
canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
canvas.height = parseInt(sketchStyle.getPropertyValue('height'));
var imageObj = new Image();
var R, G, B;

imageObj.onload = function() {
	pContext.drawImage(imageObj, 0, 0);
	};
	imageObj.crossOrigin = 'anonymous';
	imageObj.src = 'spectrum.jpg';
	
var mouse = {x: 0, y: 0};
/* Drawing on Paint App */
context.lineWidth = 10;

var erase = function(){
	context.strokeStyle = 'white';
}
var draw = function(){
	context.strokeStyle = "rgb(" + R + "," + G + "," + B + ")";
	console.log(context.strokeStyle);
}

var increaseSize = function(){
	context.lineWidth += 5;
}

var decreaseSize = function(){
	context.lineWidth -= 5;
}

var toggleBrush = function(){
	if (context.lineCap == 'square' || context.lineJoin == 'miter'){
		context.lineJoin = 'round';
		context.lineCap = 'round';
	}
	else if(context.lineCap == 'round' || context.lineJoin == 'round'){
		context.lineJoin = 'miter';
		context.lineCap = 'square';
	}
}
pCanvas.addEventListener('mousemove', function(e) {
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
}, false);
 
pCanvas.addEventListener('mousedown', function(e) {
	pContext.beginPath();
	pContext.moveTo(mouse.x, mouse.y);
	var imgData = pContext.getImageData(mouse.x, mouse.y, 1, 1).data;
	R = imgData[0];
	G = imgData[1];
	B = imgData[2];
	draw();
}, false);

canvas.addEventListener('mousemove', function(e) {
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
}, false);
 
canvas.addEventListener('mousedown', function(e) {
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
	canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
	canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function() {
	context.lineTo(mouse.x, mouse.y);
	context.stroke();
};

//CLEAR FUNCTION CLEARS THE CANVAS
var clearCanvas = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}