import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';
import { DragControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/DragControls.js';
import { AudioListener, AudioLoader, Audio } from 'three';

let scene, camera, renderer;
let globby;
let cameraPosition = { x: 0, y: 0, z: 50 };
let sound;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe5e214);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 20;

    const controls = new OrbitControls(camera, renderer.domElement);

    const audioListener = new AudioListener();
    camera.add(audioListener); // add the listener to the camera
    const audioLoader = new AudioLoader();
    audioLoader.load('assets/GLOOP.mp3', function(buffer) {
        sound = new Audio(audioListener);
        sound.setBuffer(buffer);
        sound.setLoop(false);
        sound.setVolume(0.5);
    });

    const loader = new GLTFLoader();
    loader.load('assets/GLOBBYFIG.gltf', function (gltf) {
        globby = gltf.scene;
        globby.scale.set(10, 10, 10); // Adjust scale as needed
        globby.position.set(60, -5, -40); // Position the model
        scene.add(globby);

        // Add drag controls
        const dragControls = new DragControls([globby], camera, renderer.domElement);
        dragControls.addEventListener('dragstart', function() {
            controls.enabled = false;
        });
        dragControls.addEventListener('dragend', function() {
            controls.enabled = true;
        });
    });





    

    animate();
}

document.addEventListener('DOMContentLoaded', init); // Ensure init runs after the DOM is loaded

function animate() {
    requestAnimationFrame(animate);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    renderer.render(scene, camera);
}
