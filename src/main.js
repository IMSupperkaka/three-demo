import * as THREE from 'three';

import Floor from './Shape';
import './index.less';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

for (var i = 0; i < 5; i++) {
    scene.add(new Floor({
        width: 4,
        height: 2,
        position: {
            y: i
        }
    }).plane);
}

camera.position.set(0, 2.5, 10);

var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
