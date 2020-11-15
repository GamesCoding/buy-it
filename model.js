let scene, camera, renderer, hlight, airSafe, directionalLight, light, light2, light3, light4, controls,animates;

function init(){

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 100;
    camera.position.y = 10;
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(1100,800)
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight(0x404040,100);
    scene.add(hlight);
       
    light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);
    
    light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,500);
    scene.add(light4);

    directionalLight = new THREE.DirectionalLight(0xffffff,100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        airSafe = gltf.scene.children[0];
        airSafe.scale.set(50,50,50)
        scene.add(gltf.scene);
        animate();
    });
    }

    function animate(){
        renderer.render(scene,camera);
        requestAnimationFrame(animate)
    }

    init();
