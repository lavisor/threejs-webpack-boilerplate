import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

// create a cube but we need a mesh for that

// first create geometry
const geometry = new THREE.BoxGeometry(1,1,1);

// create materials 
const material = new THREE.MeshBasicMaterial({color: '#3366ff'});

//create mesh 

const mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

mesh.position.set(0.7, -0.6, 1);  // to set position using position.set() method
//add the object mesh to screen 
scene.add(mesh);



// create a sixe variable 

const sizes = {
    width: 800,
    height: 600
}
// creating a Camera - THREE.PerspectiveCamera(FOV, aspectRatio); 
const camera =  new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

// mesh.position.length --  returns distance from origin 
// mesh.position.distanceTo(camera.position) -- returns distance between camera and mesh 
// mesh.position.normalize()  -- will take the vector and normalize it to unit vector.  
scene.add(camera);


// creating renderer 
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

// renderer resizes the canvas by itself
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
