// Kunal Vyas
// 2-4 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 3
// University of Massachusetts, Lowell

var x = document.getElementById("tolerance");
var canvas = document.getElementById('main');
var context = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

var draw = function(){
	clearCanvas();
	r = document.getElementById('r').value;
	n = document.getElementById('n').value;
	x.innerHTML = ' ' + ' Tolerance = ' + calculateTolerance(r, n);
	document.body.appendChild(x);
	drawRegularPolygon(context,200,200,30,r,Math.PI,true,'#fff',true,'#000',1);
	drawRegularPolygon(context,200,200,n,r,Math.PI,true,'#ececec',true,'#000',1);
}

var calculateTolerance = function(radius, nSides){
	var tolerance = radius - radius*(Math.cos(Math.PI/nSides));
	return tolerance;
}

var clearCanvas = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}