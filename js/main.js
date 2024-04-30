/// Import Three.js (also linked to as import map in HTML)
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

///////CREATE SCENE //////////////////
let scene, camera, renderer, happy;



function init() {
    scene = new THREE.Scene();
    
    
    
    
    const scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 50;







//////ADD ONS / 3D MODEL ////////////////
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models

loader.load('assets/GLOBBYFIG.gltf', function (gltf) {
    globby = gltf.scene;
    scene.add(globby);
    globby.scale.set(3, 3, 3);
});

console.error(error);












/////// 1ST SPHERE///////////////////
const geometry1 = new THREE.SphereGeometry(15); // Change the size
const texture1 = new THREE.TextureLoader().load('textures/GSHINE.jpg'); // Change the texture
const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
const sphere1 = new THREE.Mesh(geometry1, material1);
sphere1.position.z = -55; // Change the z position
sphere1.position.x = -55; // Change the x position
sphere1.position.y = 1;

scene.add(sphere1);
///////////////////////////////////





/////// 2ND SPHERE///////////////////
const geometry2 = new THREE.SphereGeometry(7); // Change the size
const texture2 = new THREE.TextureLoader().load('textures/GSHINE.jpg'); // Change the texture
const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.z = -55; // Change the z position
sphere2.position.x = 30; // Change the x position
sphere2.position.y = 20; 
scene.add(sphere2);
///////////////////////////////////


/////// THIRD SPHERE///////////////////
const geometry3 = new THREE.SphereGeometry(17); // Change the size
const texture3 = new THREE.TextureLoader().load('textures/GSHINE.jpg'); // Change the texture
const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
const sphere3 = new THREE.Mesh(geometry3, material3);
sphere3.position.z = -50; // Change the z position
sphere3.position.x = 50; // Change the x position
sphere3.position.y = -20; 
scene.add(sphere3);
///////////////////////////////////


/////// FOURTH SPHERE///////////////////
const geometry4 = new THREE.SphereGeometry(7); // Change the size
const texture4 = new THREE.TextureLoader().load('textures/GSHINE.jpg'); // Change the texture
const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
const sphere4 = new THREE.Mesh(geometry4, material4);
sphere4.position.z = -20; // Change the z position
sphere4.position.x = 20; // Change the x position
sphere4.position.y = -20; 
scene.add(sphere4);
///////////////////////////////////











/////// ENTER BUTTON SPHERE///////////////////
const geometry5 = new THREE.SphereGeometry(9); // Change the size
const texture5 = new THREE.TextureLoader().load('textures/GSHINE.jpg'); // Change the texture
const material5 = new THREE.MeshBasicMaterial({ map: texture5 });
const sphere5 = new THREE.Mesh(geometry5, material5);
sphere5.position.z = -110; // Change the z position
sphere5.position.x = 23; // Change the x position
sphere5.position.y = -10; 
scene.add(sphere5);
///////////////////////////////////









// Function to make a sphere jiggle
function jiggleSphere(sphere, event) {
    // Get mouse position
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    // Raycasting to check if mouse is over the sphere
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(sphere);

    // If mouse is over the sphere, trigger jiggle animation
    if (intersects.length > 0) {
        sphere.rotation.x += 0.1;
        sphere.rotation.y += 0.1;
    }
}

///////EVENT LISTENER//////////
/////// Event listener for mouse move for sphere1
document.addEventListener('mousemove', (event) => jiggleSphere(sphere1, event));

// Event listener for mouse move for sphere2
document.addEventListener('mousemove', (event) => jiggleSphere(sphere2, event));


// 3RD SPHERE
document.addEventListener('mousemove', (event) => jiggleSphere(sphere3, event));

// 4TH SPHERE
document.addEventListener('mousemove', (event) => jiggleSphere(sphere4, event));


// BOTTOM BUTTON SPHERE
document.addEventListener('mousemove', (event) => jiggleSphere(sphere5, event));




// Function to move camera based on scroll
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * 0.1;
    // camera.position.y = t * -0.1;
    camera.position.x = t * 0.01;
}

document.body.onscroll = moveCamera;

moveCamera();




///////LIGHTING THINGS ///////////

// const pointLight = new THREE.PointLight(0xce13b1);
// pointLight.position.set(20, 20, 20);

// const ambientLight = new THREE.AmbientLight(0xce13b1);
// scene.add(pointLight, ambientLight);

// /////LIGHT HELPER!
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

////////////////////////////////////////////////////////////////////////////////////////



/////STARS///////////////

// function addStar() {
//     const geometry = new THREE.SphereGeometry(1, 20, 20);
//     const material = new THREE.MeshBasicMaterial({ color: 0x0aa41e }); // Green color

//     const star = new THREE.Mesh(geometry, material);

//     const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

//     star.position.set(x, y, z);
//     scene.add(star);
// }

// Array(400).fill().forEach(addStar);


///////////////////////////////////////////



//////GLOB BODY ///////





//////ADDING BLENDER TEXTURES
const moonTexture = new THREE.TextureLoader().load('textures/color.jpg');
const normalTexture = new THREE.TextureLoader().load('textures/roughness.png');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(20, 32, 32),
    new THREE.MeshBasicMaterial({
        map: moonTexture,
        normalMap: normalTexture
    })
);

moon.position.set(-40, -20, -100); // Adjusted the position to be in front of other objects
scene.add(moon);


//////2
const moon2Texture = new THREE.TextureLoader().load('textures/color.jpg');
const normal2Texture = new THREE.TextureLoader().load('textures/roughness.png');

const moon2 = new THREE.Mesh(
    new THREE.SphereGeometry(15, 32, 32),
    new THREE.MeshBasicMaterial({
        map: moon2Texture,
        normalMap: normal2Texture 
    })
);

moon2.position.set(20, 40, -100); // Adjusted the position to be in front of other objects
scene.add(moon2);




/////BACKGROUND////
// const globTexture = new THREE.TextureLoader().load('textures/glob.webp');
// scene.background = globTexture;


const Yscene = new THREE.Scene();
scene.background = new THREE.Color(0xe4dc0f); // Set background color to bright yellow





// moon.position.z = 30;
// moon.position.setX(-10);


// function moveCamera() {

//     const t = document.body.getBoundingClientRect().top;
//     moon.rotation.x += 0.05;
//     moon.rotation.y += 0.075;
//     moon.rotation.z += 0.05;

//     camera.position.z = t * -0.01;
//     camera.position.x = t * -0.0002;
//     camera.position.y = t * -0.0002;


// }

// document.body.onscroll = moveCamera




function animate() {
    requestAnimationFrame(animate);
    sphere1.rotation.z += 0.01;
    sphere2.rotation.z += 0.01; // Rotate the second sphere as well
    sphere3.rotation.z += 0.01;
    sphere4.rotation.z += 0.01;
    sphere5.rotation.z += 0.01;
    renderer.render(scene, camera, renderer.domElement);
}

animate();
