import * as THREE from 'three';

class Floor {
    constructor(options) {
        this.width = options.width;
        this.height = options.height;
        var geometry = new THREE.PlaneGeometry(this.width, this.height);
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.plane = new THREE.Mesh( geometry, material );
        this.plane.rotation.x = -Math.PI / 2;
        Object.assign(this.plane.position, options.position);
    }
}

export default Floor
