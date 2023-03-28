  // import * as THREE from './node_modules/three/build/three.module.js';
  import * as THREE from 'https://unpkg.com/three/build/three.module.js';

  const canvas = document.querySelector('canvas.webgl');
  const scene = new THREE.Scene();

  const material = new THREE.MeshToonMaterial({ color: '#ffeded' })
  const mesh1 = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.4, 16, 60),
      material)
  const mesh2 = new THREE.Mesh(
      new THREE.ConeGeometry(1, 2, 32),
      material
  )
  const mesh3 = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
      material)


  scene.add(mesh1, mesh2, mesh3)

  mesh1.position.y=2;
  mesh1.scale.set(0.5,0.5,0.5)

  // mesh2.visible=false

  mesh3.position.y=-2
  mesh3.scale.set(0.5,0.5,0.5)

  const objectsDistance=4

  mesh1.position.y = - objectsDistance * 0
  mesh2.position.y = - objectsDistance * 1
  mesh3.position.y = - objectsDistance * 2
  const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
  }

  const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 6;
  scene.add(camera);

  let scrollY=window.scrollY;

  window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.heiht = window.innerHeight;

      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  });

  window.addEventListener('scroll',()=>{
      scrollY=window.scrollY
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

  const clock=new THREE.Clock();

  const animate = () => {
      const elapsedTime= clock.getElapsedTime()

      renderer.render(scene, camera)
      camera.position.y=-scrollY/sizes.height*objectsDistance;
      // mesh1.rotation.y=elapsedTime*0.5
      mesh1.rotation.x=-3.14*scrollY/sizes.height*0.9
      
      window.requestAnimationFrame(animate)
  };

  animate();