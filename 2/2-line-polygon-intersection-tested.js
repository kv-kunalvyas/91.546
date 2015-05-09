// Kunal Vyas
// 2-5 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 2
// University of Massachusetts, Lowell

var intersect = function(){
	var x1 = parseInt(document.getElementById('x11').value);
	var y1 = parseInt(document.getElementById('y11').value);
	var z1 = parseInt(document.getElementById('z11').value);
	var x2 = parseInt(document.getElementById('x12').value);
	var y2 = parseInt(document.getElementById('y12').value);
	var z2 = parseInt(document.getElementById('z12').value);
	var x = parseInt(document.getElementById('x21').value);
	var y = parseInt(document.getElementById('y21').value);
	var z = parseInt(document.getElementById('z21').value);
	var c = parseInt(document.getElementById('c').value);
	
	var t = (c - x1*x - y1*y - z1*z)/(x2*x + y2*y + z2*z - x1 - y1 - z1);
	var px = x1 + t * (x2 - x1);
	var py = y1 + t * (y2 - y1);
	var pz = z1 + t * (z2 - z1);
	print('Line and plane intersect at (' + px + ', ' + py + ', ' + pz + ')');
}

var print = function(message){
	var x = document.getElementById("result");
	x.textContent = message;
	document.body.appendChild(x);
}