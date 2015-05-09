// Kunal Vyas
// 2-4 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 5
// University of Massachusetts, Lowell

var A, B, C, D, flag, normal;
var vectors = [], crossProducts = [], dotProduct = [];

var setPoints = function(){
	var array = [];
	var input = document.getElementById('textbox').value;
	input = input.split(',');
	for(i=0;i<input.length;i++){
		input[i] = parseInt(input[i]);
	}
	while(input.length) array.push(input.splice(0,3));
	draw(array);
}

var draw = function(points){
for (i=1;i<3;i++){
	for(j=0;j<3;j++){
		vectors.push(points[i][j] - points[0][j]);
	}
}
while(vectors.length) crossProducts.push(vectors.splice(0,3));
for (i=0;i<crossProducts.length-1;i++){
	normal = math.cross(crossProducts[i], crossProducts[i+1]);
}

A = normal[0];
B = normal[1];
C = normal[2];
D = -1*(A*points[0][0] + B*points[0][1] + C*points[0][2]);
for (i=points.length-1;i<points.length;i++){
	dotProduct = math.dot(normal, (math.subtract(points[i], points[0])));
	if (dotProduct == 0){
		flag = 'Exactly';
	}
	else{
		flag = 'Approximately Planar / Not';
		break;
	}
}
var x = document.getElementById("result");
x.textContent = 'OUTPUT:' + ' (' + A + 'x + ' + B + 'y + ' + C + 'z + ' + D + ' = ' + '0' + ') ' + ', [' + normal + ']' + ', ' + flag + ' Planar';
document.body.appendChild(x);
}