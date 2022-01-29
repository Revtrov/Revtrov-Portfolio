import * as THREE from './three.module.js';
import { STLLoader } from './STLLoader.js';

//scene
const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600000000),
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("bg"),
    });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
camera.position.setY(150);
camera.position.setX(0);

scene.background = new THREE.Color(0xffffff);

// lighting and helpers
const pointLight = new THREE.PointLight(0xfefddc, 5),
    ambientLight = new THREE.AmbientLight(0xffffff, 1),
    lightHelper = new THREE.PointLightHelper(pointLight),
    gridHelper = new THREE.GridHelper(800, 50)
    // background textures
pointLight.position.set(100, 100, 0)
scene.add(pointLight, ambientLight, /*lightHelper, */ gridHelper)

let model;

function loadSTLModel(fileURL, color, metalness, roughness, opacity, transparent, transmission, clearcoat, clearcoatRoughness) {
    const loader = new STLLoader()
    loader.load(
        fileURL,
        function(geometry) {
            const material = new THREE.MeshPhysicalMaterial({
                color: color,
                metalness: metalness,
                roughness: roughness,
                opacity: opacity,
                transparent: transparent,
                transmission: transmission,
                clearcoat: clearcoat,
                clearcoatRoughness: clearcoatRoughness
            })
            model = new THREE.Mesh(geometry, material);
            scene.add(model)
            model.rotateX(degreesRadians(180))
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )
}
loadSTLModel("can3d.stl", "grey", 1, 1, 100, false, 1, 1, 0)

function degreesRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    camera.lookAt(0, 0, 0)
    model.rotateZ(0.01)
    model.rotateX(0.01)
}

animate()