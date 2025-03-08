"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SETUP SCENE, CAMERA AND RENDERER
    const scene = new THREE.Scene();

    // sec scebe backgroud to null
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // set color to transparent
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); // ↑ intensitas
    scene.add(ambientLight);

    // DIRECTIONAL LIGHT
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(15, 15, 15); // ↑ posisi lebih tinggi
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // GLOBE
    const geometry = new THREE.SphereGeometry(5, 64, 64); // ↑ resolusi
    const textureLoader = new THREE.TextureLoader();

    // TEXTURE ERROR HANDLING
    const texture = textureLoader.load(
      "/second-earth.jpg",
      undefined,
      undefined,
      (err) => {
        console.error("Texture loading error:", err);
      }
    );

    const material = new THREE.MeshPhongMaterial({
      map: texture,
      specular: 0x222222,
      shininess: 100,
      bumpScale: 0.05,
    });

    const globe = new THREE.Mesh(geometry, material);
    globe.castShadow = true;
    scene.add(globe);

    // CAMERA POSITION
    camera.position.z = 12;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="globe-container" />;
};

export default Globe;
