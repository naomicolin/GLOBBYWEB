import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer;
let globby, sphere1, sphere2, sphere3, sphere4, sphere5, sphere6;
let cameraPosition = { x: 0, y: 0, z: 50 };

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe5e214);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 0, 1); // Set the light direction
    scene.add(directionalLight);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 20;

    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader();

    

    loader.load('assets/GLOBBYFIG.gltf', function (gltf) {
        globby = gltf.scene;
        globby.scale.set(6, 6, 6);
        globby.position.set(50, 2, -50);
        scene.add(globby);
    });

    loader.load('assets/GLOBBYFIG.gltf', function (gltf) {
        globby = gltf.scene;
        globby.scale.set(2, 2, 2);
        globby.position.set(50, 2, -50);
        scene.add(globby);
    });

   





    const texture = new THREE.TextureLoader().load('textures/GSHINE.jpg');

    // 1ST SPHERE
    const geometry1 = new THREE.SphereGeometry(15);
    const material1 = new THREE.MeshBasicMaterial({ map: texture });
    sphere1 = new THREE.Mesh(geometry1, material1);
    sphere1.position.set(-55, 1, -55);
    scene.add(sphere1);

    // 2ND SPHERE
    const geometry2 = new THREE.SphereGeometry(7);
    const material2 = new THREE.MeshBasicMaterial({ map: texture });
    sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.position.set(30, 20, -55);
    scene.add(sphere2);

    // THIRD SPHERE
    const geometry3 = new THREE.SphereGeometry(17);
    const material3 = new THREE.MeshBasicMaterial({ map: texture });
    sphere3 = new THREE.Mesh(geometry3, material3);
    sphere3.position.set(50, -20, -50);
    scene.add(sphere3);

    // FOURTH SPHERE
    const geometry4 = new THREE.SphereGeometry(7);
    const material4 = new THREE.MeshBasicMaterial({ map: texture });
    sphere4 = new THREE.Mesh(geometry4, material4);
    sphere4.position.set(20, -20, -20);
    scene.add(sphere4);

    // ENTER BUTTON SPHERE
    const geometry5 = new THREE.SphereGeometry(9);
    const material5 = new THREE.MeshBasicMaterial({ map: texture });
    sphere5 = new THREE.Mesh(geometry5, material5);
    sphere5.position.set(23, -10, -110);
    scene.add(sphere5);


    // 6tH SPHERE
    const geometry6 = new THREE.SphereGeometry(30);
    const material6 = new THREE.MeshBasicMaterial({ map: texture });
    sphere6 = new THREE.Mesh(geometry6, material6);
    sphere6.position.set(13, -20, -220);
    scene.add(sphere6);

    animate();

    
}

function jiggleSphere(sphere, event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(sphere);

    if (intersects.length > 0) {
        sphere.rotation.x += 0.1;
        sphere.rotation.y += 0.1;
    }
}

document.addEventListener('mousemove', (event) => {
    jiggleSphere(sphere1, event);
    jiggleSphere(sphere2, event);
    jiggleSphere(sphere3, event);
    jiggleSphere(sphere4, event);
    jiggleSphere(sphere5, event);
    jiggleSphere(sphere6, event);
});

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    cameraPosition.z = t * 0.1;
    cameraPosition.x = t * 0.01;
}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    sphere1.rotation.z += 0.01;
    sphere2.rotation.z += 0.01;
    sphere3.rotation.z += 0.01;
    sphere4.rotation.z += 0.01;
    sphere5.rotation.z += 0.01;
    sphere6.rotation.z += 0.01;
    renderer.render(scene, camera);
}



////////////
////////////
console.log("hello hello");

document.querySelector("#glob").addEventListener("click", function(){
    // Play the audio
    const audio = new Audio('assets/BLOOP.mp3'); // 
    audio.play();

    // Hide the element
    document.querySelector("#glob").style.visibility = "hidden";
});


document.querySelector("#glob1").addEventListener("click", function(){
    // Play the audio
    const audio = new Audio('assets/BLOOP.mp3'); // 
    audio.play();

    // Hide the element
    document.querySelector("#glob1").style.visibility = "hidden";
});






document.querySelector("#glob2").addEventListener("click", function(){
    // Play the audio
    const audio = new Audio('assets/BLAP.mp3'); // 
    audio.play();

    // Hide the element
    document.querySelector("#glob2").style.visibility = "hidden";
});





document.querySelector("#glob3").addEventListener("click", function(){
    // Play the audio
    const audio = new Audio('assets/GALP.mp3'); // 
    audio.play();

    // Hide the element
    document.querySelector("#glob3").style.visibility = "hidden";
});

document.querySelector("#glob4").addEventListener("click", function(){
    // Play the audio
    const audio = new Audio('assets/GULP.mp3'); // 
    audio.play();

    // Hide the element
    document.querySelector("#glob4").style.visibility = "hidden";
});


document.querySelector("#glob5").addEventListener("click", function(){
    // Play the audio
    const audio = new Audio('assets/GLOOP.mp3'); // 
    audio.play();

    // Hide the element
    document.querySelector("#glob5").style.visibility = "hidden";
});















init();
