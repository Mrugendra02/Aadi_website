// import * as THREE from './node_modules/three/build/three.module.js';
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

const material = new THREE.MeshToonMaterial({ color: '#ffeded' })
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
const clock = new THREE.Clock();
const objectsDistance = 4

//object butterfly is loaded
var butterfly;
var loader = new GLTFLoader();
let mixer;
// loader.load('./butterfly.gltf', function (gltf) {

//     butterfly = gltf.scene;
//     // butterfly.position.z = -2;
//     // car.position.y=-5;
//     butterfly.rotation.y = -3.14 * 0.3;
//     mixer = new THREE.AnimationMixer(butterfly);
//     // gltf.animations.forEach((clip) => {
//     //                 mixer.clipAction(clip).play();
//     //                 console.log("thisis played");
//     //             });
//     scene.add(butterfly);
//     // gltf.animations.forEach((clip) => {
//     //     mixer.clipAction(clip).play();
//     //     console.log(clip.name);
//     //     // console.log("thisis played");
//     // });

//     mixer.clipAction(gltf.animations[0]).play();
//     const tick = () => {
//         butterfly.rotation.y = -scrollY / sizes.height * objectsDistance
//         butterfly.position.y = -scrollY / sizes.height * objectsDistance - 0.5
//         window.requestAnimationFrame(tick)

//     }
//     tick()

// }
//     , undefined, function (error) {
//         console.log(error);
//     }
// )
// loadGLTF(butterfly);

var eva;
let mixer1;
loader.load('./evaaa.gltf',(gltf)=>{
    eva=gltf.scene;
    eva.scale.set(0.5,0.5,0.5)
    // eva.position.z=-3
    mixer1=new THREE.AnimationMixer(eva);
   
    gltf.animations.forEach((clip)=>{
        var action=mixer1.clipAction(clip);
        // action.setDuration(action.getClip().duration/2);
        action.play();
        console.log(clip.name)
    })

    // mixer1.clipAction(gltf.animations[1]).play();
    // gltf.scene.children.forEach((child)=>{
    //     child.castShadow=false;
    //     child.receiveShadow=false;
    //     // console.log(child)
    // })
    // const mateva = new THREE.MeshBasicMaterial({color:'red'});
    // gltf.scene.children.forEach((child)=>{
       
    //     child.castShadow=true;
    //     // console.log(child.castShadow)
    //     child.receiveShadow=true;
    //     child.material=mateva;
    //     console.log(child.material)

    // })
    function tic(){
        var elapsedTime=clock.getElapsedTime();
        var delta=clock.getDelta();
        eva.position.y=Math.sin(elapsedTime)*0.1;
        eva.position.y=-scrollY/sizes.height*objectsDistance;
        window.requestAnimationFrame(tic)
    }
    tic()
    
    // mixer1.clipAction(gltf.animations[0]).play(); 
    scene.add(gltf.scene)

})



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 6;
scene.add(camera);

let scrollY = window.scrollY;

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

window.addEventListener('scroll', () => {
    scrollY = window.scrollY
    // console.log(scrollY)
})

const light = new THREE.DirectionalLight('#ffffff', 1)
light.position.set(0, 1, 0)
scene.add(light)

const light1=new THREE.PointLight('#ffffff',5,100)
light1.position.set(-12,-2,5)
light1.castShadow=false;
light1.receiveShadow=false;
scene.add(light1)

const light2=new THREE.PointLight('#ffffff',5,100)
light2.position.set(12,-2,5)
scene.add(light2);

const light3=new THREE.DirectionalLight('#ffffff',0.3)
light3.position.set(0,0,-5)
scene.add(light3); 

var aml = new THREE.AmbientLight('#ffffff', 20); // color, intensity
// scene.add(aml);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true

});

const geosph = new THREE.SphereGeometry(0.5);
const matsph = new THREE.MeshBasicMaterial({color: 0x00ff00});
const sphere = new THREE.Mesh(geosph, matsph);
sphere.position.set(0,-2,2);
sphere.scale.set(0.5,0.5,0.5);
// scene.add(sphere);

// document.body.appendChild(renderer.domElement);

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    renderer.render(scene, camera)
    // console.log(scrollY)
    camera.position.y = -scrollY / sizes.height * objectsDistance;
    light1.position.y=-scrollY / sizes.height * objectsDistance-2;
    light2.position.y= -scrollY / sizes.height * objectsDistance-2;
    // mesh1.rotation.y=elapsedTime*0.5
    // mesh1.rotation.x = -3.14 * scrollY / sizes.height * 0.9
    var delta=clock.getDelta();
    if(mixer) mixer.update(delta*10);
    if(mixer1) mixer1.update(delta*10);
    window.requestAnimationFrame(animate)
};

animate();