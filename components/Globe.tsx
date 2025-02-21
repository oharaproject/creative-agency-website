"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SETUP SCENE, CAMERA AND RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // LIGHTING
    const ambienLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambienLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // GLOBE
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/second-earth.jpg");
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.5,
    });
    const globe = new THREE.Mesh(geometry, material);
    globe.castShadow = true;
    scene.add(globe);

    // CAMERA POSITION
    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Globe;
