// import * as THREE from './node_modules/three/build/three.module.js';
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

const material = new THREE.MeshToonMaterial({ color: '#ffeded' })
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const objectsDistance = 4

//object butterfly is loaded
var butterfly;
var loader = new GLTFLoader();
let mixer;
loader.load('./butterfly.gltf', function (gltf) {

    butterfly = gltf.scene;
    butterfly.position.z = -2;
    // car.position.y=-5;
    butterfly.rotation.y = -3.14 * 0.3;
    mixer = new THREE.AnimationMixer(butterfly);
    // gltf.animations.forEach((clip) => {
    //                 mixer.clipAction(clip).play();
    //                 console.log("thisis played");
    //             });
    scene.add(butterfly);
    // gltf.animations.forEach((clip) => {
    //     mixer.clipAction(clip).play();
    //     console.log(clip.name);
    //     // console.log("thisis played");
    // });

    mixer.clipAction(gltf.animations[0]).play();
    const tick = () => {
        butterfly.rotation.y = -scrollY / sizes.height * objectsDistance
        butterfly.position.y = -scrollY / sizes.height * objectsDistance - 0.5
        window.requestAnimationFrame(tick)

    }
    tick()

}
    , undefined, function (error) {
        console.log(error);
    }
)
// loadGLTF(butterfly);

var eva;
let mixer1;




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
light.position.set(1, 1, 0)
scene.add(light)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true

});
// document.body.appendChild(renderer.domElement);

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    renderer.render(scene, camera)
    camera.position.y = -scrollY / sizes.height * objectsDistance;
    // mesh1.rotation.y=elapsedTime*0.5
    // mesh1.rotation.x = -3.14 * scrollY / sizes.height * 0.9
    var delta=clock.getDelta();
    if(mixer) mixer.update(delta*10);
    window.requestAnimationFrame(animate)
};

animate();