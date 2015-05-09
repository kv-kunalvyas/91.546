// Kunal Vyas
// 2-4 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 6
// University of Massachusetts, Lowell

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
 
var sketch = document.querySelector('#sketch');
var sketchStyle = getComputedStyle(sketch);
canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
canvas.height = parseInt(sketchStyle.getPropertyValue('height'));
canvas.setAttribute("tabindex", 0);


var mouse = {x: 0, y: 0};
var points = [];
var drag = 0;
var original = [];
var z = 5;

var drawPolygon = function(){
	context.beginPath();
	for (i=0; i<points.length; i+=2){
		context.lineTo(points[i], points[i+1]);
	}
	context.lineTo(points[0], points[1]);
	context.stroke();
}

var drawOriginal = function(){
	context.beginPath();
	for (i=0; i<original.length; i+=2){
		context.lineTo(original[i], original[i+1]);
	}
	context.lineTo(original[0], original[1]);
	context.stroke();
	context.closePath()
}

var drawConnections = function(){
	context.beginPath();
	for (i=0; i<points.length; i+=2){
		context.moveTo(points[i], points[i+1]);	
		context.lineTo(original[i], original[i+1]);
	}
	context.stroke();
}

var extrude = function(){
	drag += 1;
	drawOriginal(original);
	canvas.addEventListener( "keydown", function(e){
	if ( e.keyCode == 38 ) {
		for (i=0; i<points.length; i+=2){
			points[i+1] = points[i+1] - z;
		}
		clearCanvas();
		drawOriginal();
		drawPolygon();
		drawConnections();
	}
	else if ( e.keyCode == 40 ) {
		for (i=0; i<points.length; i+=2){
			points[i+1] = points[i+1] + z;
		}
		clearCanvas();
		drawOriginal();
		drawPolygon();
		drawConnections();
	}
}, true);
}

canvas.addEventListener('mousemove', function(e) {
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
}, false);
 
canvas.addEventListener('mousedown', function(e) {
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
	canvas.addEventListener('mouseup', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
	canvas.removeEventListener('mousedown', onPaint, false);
	}, false);
	
var onPaint = function() {
	if(drag == 0){
		context.lineTo(mouse.x, mouse.y);
		points.push(mouse.x, mouse.y);
		original.push(mouse.x, mouse.y);
		context.rect(mouse.x, mouse.y, 3, 3);
		context.stroke();
	}
};

//CLEAR FUNCTION CLEARS THE CANVAS
var clearCanvas = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

var refresh = function(){
	location.reload(true);
}