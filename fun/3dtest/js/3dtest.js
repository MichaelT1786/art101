// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.

//--- Guts ---//

//lets you access the Three.js stuff by using THREE
import * as THREE from "https://code.jquery.com/jquery-3.6.4.min.js";
console.log(THREE);

//makes scene
const scene = new THREE.Scene();

//make camera
const camera = new THREE.PerspectiveCamera(
  
  75, //FOV
  window.innerWidth / window.innerHeight, //Aspect Ratio
  0.1, //near clipping plane
  1000 //far clipping plane
);

//make renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( //
  window.innerWidth, 
  window.innerHeight
  //true/false for updateStyle
)

//add it to the document
$("body").append(renderer.domElement);


//--- Scene ---//

//making the attributes of an object
const geometry = new THREE.BoxGeometry(1, 1, 1); //gives "geometry" the shape of a cube. made of verticies and faces
const material = new THREE.MeshBasicMaterial({ //texture
  color: 0x00ff00 //green
});

//putting the elements together
const cube = new THREE.Mesh(
  geometry, //shape
  material //texture
);
//adding object to scene
scene.add(cube); //inserts at 0, 0, 0

camera.position.z = 5; //moves camera out of the object since it too defaults to 0, 0, 0


//--- Rendering the Scene ---//

//
function animate(){
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);