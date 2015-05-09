// Kunal Vyas
// 2-4 February 2015
// 91.546 -- Computer Graphics I Spring -- Final Exam Answer 4
// University of Massachusetts, Lowell

var draw = function(){
	var container = document.getElementById('container');
	document.body.appendChild(container);
	var scene = new THREE.Scene();
	
	//CAMERA SETTINGS
	var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.x = 100;
	camera.position.y = 400;
	camera.position.z = 100;
	camera.lookAt({x: 0, y: 0, z: 0});

	var renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(700, 500);
	renderer.domElement.style.position = "relative";
	renderer.shadowMapEnabled = true;
	renderer.shadowMapSoft = true;
	container.appendChild(renderer.domElement);
	
	var box = new THREE.Mesh(new THREE.CubeGeometry(300, 300, 300),new THREE.MeshLambertMaterial({color: 0x000000, transparent:true, opacity:0.6, side: THREE.DoubleSide}));
	var boxOutline = new THREE.Mesh(new THREE.CubeGeometry(301, 301, 301), new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true}));
	box.rotation.x = -Math.PI / 2;
	boxOutline.rotation.x = -Math.PI / 2;
	box.receiveShadow = true;
	box.castShadow = false;

	// LIGHTS ON
	scene.add(new THREE.AmbientLight(0xf0f0f0));
	var light0, light2, light1;

	light0 = new THREE.SpotLight(0x000000, 1);
	light0.position.set(150, 400, 750);
	light0.position.multiplyScalar(1.5);
	light0.castShadow = true;
	light0.shadowMapWidth = 512;
	light0.shadowMapHeight = 512;
	var d = 200;
	light0.shadowCameraLeft = -d;
	light0.shadowCameraRight = d;
	light0.shadowCameraTop = d;
	light0.shadowCameraBottom = -d;
	light0.shadowCameraFar = 1500;
	light0.shadowDarkness = 1;

	light1 = new THREE.SpotLight(0x000000, 1);
	light1.position.set(-750, 400, 350);
	light1.position.multiplyScalar(1.3);
	light1.castShadow = true;
	light1.shadowMapWidth = 256;
	light1.shadowMapHeight = 256;
	light1.shadowCameraLeft = -d;
	light1.shadowCameraRight = d;
	light1.shadowCameraTop = d;
	light1.shadowCameraBottom = -d;
	light1.shadowCameraFar = 1700;
	light1.shadowDarkness = 1;
		
	light2 = new THREE.SpotLight(0x000000, 1);
	light2.position.set(500, 400, 50);
	light2.position.multiplyScalar(1.5);
	light2.castShadow = true;
	light2.shadowMapWidth = 512;
	light2.shadowMapHeight = 512;
	light2.shadowCameraLeft = -d;
	light2.shadowCameraRight = d;
	light2.shadowCameraTop = d;
	light2.shadowCameraBottom = -d;
	light2.shadowCameraFar = 1300;
	light2.shadowDarkness = 0.8;
	
	var cube = new THREE.Mesh(new THREE.CubeGeometry(80, 80, 80), new THREE.MeshNormalMaterial());
	var cubeOutline = new THREE.Mesh(new THREE.CubeGeometry(81, 81, 81), new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true}));
	cube.castShadow = true;
	cube.position.y = 50;
	cubeOutline.position.y = 50;
	cubeOutline.castShadow = true;
	cube.overdraw = true;
	
	//ADDING OBJECTS TO SCENES
	scene.add(boxOutline);
	scene.add(box);
	scene.add(light0);
	scene.add(light1);
	scene.add(light2);
	scene.add(cube);
	scene.add(cubeOutline);

	animate();

	function animate() {
		camera.position.x = Math.cos(Date.now() * 0.0006) * 1000;
		camera.position.z = Math.sin(Date.now() * 0.0006) * 1000;
		cube.rotation.z += 0.01;
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		cubeOutline.rotation.z += 0.01;
		cubeOutline.rotation.x += 0.01;
		cubeOutline.rotation.y += 0.01;
		requestAnimationFrame(animate);
		camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}
}