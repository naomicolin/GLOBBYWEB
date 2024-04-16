// Import Three.js (also linked to as import map in HTML)
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 50;

/////// OGGGGG ///// 1ST SPHERE///////////////////
// const geometry1 = new THREE.SphereGeometry(20);
// const texture1 = new THREE.TextureLoader().load('textures/G.gif');
// const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
// const sphere1 = new THREE.Mesh(geometry1, material1);
// sphere1.position.z = -55;
// sphere1.position.x = -10;
// scene.add(sphere1);
///////////////////////////////////


/////// 1ST SPHERE///////////////////
const geometry1 = new THREE.SphereGeometry(15); // Change the size
const texture1 = new THREE.TextureLoader().load('textures/G.gif'); // Change the texture
const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
const sphere1 = new THREE.Mesh(geometry1, material1);
sphere1.position.z = -55; // Change the z position
sphere1.position.x = -55; // Change the x position
sphere1.position.y = 1;

scene.add(sphere1);
///////////////////////////////////





/////// 2ND SPHERE///////////////////
const geometry2 = new THREE.SphereGeometry(15); // Change the size
const texture2 = new THREE.TextureLoader().load('textures/G.gif'); // Change the texture
const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.z = -55; // Change the z position
sphere2.position.x = 30; // Change the x position
sphere2.position.y = 20; 
scene.add(sphere2);
///////////////////////////////////


/////// THIRD SPHERE///////////////////
const geometry3 = new THREE.SphereGeometry(17); // Change the size
const texture3 = new THREE.TextureLoader().load('textures/G.gif'); // Change the texture
const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
const sphere3 = new THREE.Mesh(geometry3, material3);
sphere3.position.z = -50; // Change the z position
sphere3.position.x = 50; // Change the x position
sphere3.position.y = -20; 
scene.add(sphere3);
///////////////////////////////////


/////// FOURTH SPHERE///////////////////
const geometry4 = new THREE.SphereGeometry(7); // Change the size
const texture4 = new THREE.TextureLoader().load('textures/G.gif'); // Change the texture
const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
const sphere4 = new THREE.Mesh(geometry4, material4);
sphere4.position.z = -20; // Change the z position
sphere4.position.x = 20; // Change the x position
sphere4.position.y = -20; 
scene.add(sphere4);
///////////////////////////////////




/////// ENTER BUTTON SPHERE///////////////////
const geometry5 = new THREE.SphereGeometry(9); // Change the size
const texture5 = new THREE.TextureLoader().load('textures/G.gif'); // Change the texture
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

function animate() {
    requestAnimationFrame(animate);
    sphere1.rotation.z += 0.01;
    sphere2.rotation.z += 0.01; // Rotate the second sphere as well
    sphere3.rotation.z += 0.01;
    sphere4.rotation.z += 0.01;
    sphere5.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();
