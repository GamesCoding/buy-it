let scene, camera, renderer, hlight, airSafe, directionalLight, light, light2, light3, light4, controls,animates;

function init(){

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);
    
    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        airSafe = gltf.scene.children[0];
        airSafe.scale.set(0.5,0.5,0.5);
        scene.add(gltf.scene);
        animate();
        });
}

function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}

init();