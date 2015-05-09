// Kunal Vyas
// 2-4 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 1
// University of Massachusetts, Lowell

var intersect = function(){
	var x1 = parseInt(document.getElementById('x11').value);
	var y1 = parseInt(document.getElementById('y11').value);
	var z1 = parseInt(document.getElementById('z11').value);
	var x2 = parseInt(document.getElementById('x12').value);
	var y2 = parseInt(document.getElementById('y12').value);
	var z2 = parseInt(document.getElementById('z12').value);
	var x3 = parseInt(document.getElementById('x21').value);
	var y3 = parseInt(document.getElementById('y21').value);
	var z3 = parseInt(document.getElementById('z21').value);
	var x4 = parseInt(document.getElementById('x22').value);
	var y4 = parseInt(document.getElementById('y22').value);
	var z4 = parseInt(document.getElementById('z22').value);
	var d1343 = (x1 - x3)*(x4 - x3) + (y1 - y3)*(y4 - y3) + (z1 - z3)*(z4 - z3);
	var d4321 = (x4 - x3)*(x2 - x1) + (y4 - y3)*(y2 - y1) + (z4 - z3)*(z2 - z1);
	var d1321 = (x1 - x3)*(x2 - x1) + (y1 - y3)*(y2 - y1) + (z1 - z3)*(z2 - z1);
	var d4343 = (x4 - x3)*(x4 - x3) + (y4 - y3)*(y4 - y3) + (z4 - z3)*(z4 - z3);
	var d2121 = (x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1) + (z2 - z1)*(z2 - z1);
	var mua = ( d1343*d4321 - d1321*d4343 ) / ( d2121*d4343 - d4321*d4321 );
	var mub = ( d1343 + mua * d4321 ) / (d4343);
	
	var pax = x1 + mua * (x2 - x1);
	var pay = y1 + mua * (y2 - y1);
	var paz = z1 + mua * (z2 - z1);
	var pbx = x3 + mub * (x4 - x3);
	var pby = y3 + mub * (y4 - y3);
	var pbz = z3 + mub * (z4 - z3);
	if (pax == pbx && pay == pby && paz == pbz){
		print('Lines intersect at (' + pax + ', ' + pay + ', ' + paz + ')');
	}
	else{
		print('Lines do not intersect');
	}
	console.log(mua, mub);	
}

var print = function(message){
	var x = document.getElementById("result");
	x.textContent = message;
	document.body.appendChild(x);
}