import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Layers, Compass, Maximize2 } from 'lucide-react';

interface SteelModelCanvasProps {
  className?: string;
  height?: string;
  interactive?: boolean;
}

export const SteelModelCanvas: React.FC<SteelModelCanvasProps> = ({
  className = '',
  height = 'h-96',
  interactive = true
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [colorMode, setColorMode] = useState<'bim' | 'steel'>('bim');
  const [autoRotate, setAutoRotate] = useState<boolean>(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [hoveredMember, setHoveredMember] = useState<string>('Select an element to view detailing data');
  const autoRotateRef = useRef(autoRotate);

  // Three.js instances ref
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<{ [key: string]: THREE.MeshStandardMaterial }>({});

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(18, 14, 22);
    camera.lookAt(0, 3, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(20, 30, 20);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x90b0d0, 0.6);
    dirLight2.position.set(-20, 15, -15);
    scene.add(dirLight2);

    // Materials Dictionary
    const matColumns = new THREE.MeshStandardMaterial({
      color: 0x345B4B, // Forest green / primary column
      metalness: 0.6,
      roughness: 0.35,
    });
    const matBeams = new THREE.MeshStandardMaterial({
      color: 0x3b6998, // AISC Blue Primary Beams
      metalness: 0.5,
      roughness: 0.4,
    });
    const matBraces = new THREE.MeshStandardMaterial({
      color: 0xc45a2c, // Orange/Terra HSS Braces
      metalness: 0.55,
      roughness: 0.4,
    });
    const matPlates = new THREE.MeshStandardMaterial({
      color: 0x6e7882, // Connection Steel Gussets
      metalness: 0.7,
      roughness: 0.3,
    });
    const matPurlins = new THREE.MeshStandardMaterial({
      color: 0x93a35a, // Olive Purlins
      metalness: 0.45,
      roughness: 0.4,
    });

    materialsRef.current = {
      column: matColumns,
      beam: matBeams,
      brace: matBraces,
      plate: matPlates,
      purlin: matPurlins,
    };

    // Root Group
    const structureGroup = new THREE.Group();
    groupRef.current = structureGroup;
    scene.add(structureGroup);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(30, 30, 0x77766F, 0xd0c9b8);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Helper: Create Wide Flange I-Beam Geometry
    const createIBeam = (length: number, depth: number = 0.8, flangeWidth: number = 0.6, thickness: number = 0.08) => {
      const beamGroup = new THREE.Group();
      
      // Top Flange
      const tfGeo = new THREE.BoxGeometry(flangeWidth, thickness, length);
      const tfMesh = new THREE.Mesh(tfGeo, matBeams);
      tfMesh.position.y = depth / 2 - thickness / 2;
      beamGroup.add(tfMesh);

      // Web
      const webGeo = new THREE.BoxGeometry(thickness, depth - 2 * thickness, length);
      const webMesh = new THREE.Mesh(webGeo, matBeams);
      beamGroup.add(webMesh);

      // Bottom Flange
      const bfGeo = new THREE.BoxGeometry(flangeWidth, thickness, length);
      const bfMesh = new THREE.Mesh(bfGeo, matBeams);
      bfMesh.position.y = -(depth / 2 - thickness / 2);
      beamGroup.add(bfMesh);

      return beamGroup;
    };

    // Helper: Create Column with Base Plate
    const createColumn = (height: number, x: number, z: number) => {
      const colGroup = new THREE.Group();
      colGroup.position.set(x, height / 2, z);

      // Main column H-profile
      const colMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, height, 0.7),
        matColumns
      );
      colMesh.userData = { name: `Column W14x90 [Grid ${x > 0 ? 'B' : 'A'}-${z > 0 ? '2' : '1'}]` };
      colGroup.add(colMesh);

      // Base Plate
      const basePlate = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.15, 1.6),
        matPlates
      );
      basePlate.position.y = -height / 2 + 0.075;
      colGroup.add(basePlate);

      // Anchor Bolts (4 studs)
      const boltGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.4, 8);
      const boltMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.2 });
      [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]].forEach(([bx, bz]) => {
        const bolt = new THREE.Mesh(boltGeo, boltMat);
        bolt.position.set(bx, -height / 2 + 0.25, bz);
        colGroup.add(bolt);
      });

      return colGroup;
    };

    // Build Structural Bays (3x2 Grid)
    const bayX = 8;
    const bayZ = 7;
    const colHeight = 7;
    const cols = [-bayX / 2, bayX / 2];
    const rows = [-bayZ, 0, bayZ];

    // Place Columns
    cols.forEach(x => {
      rows.forEach(z => {
        structureGroup.add(createColumn(colHeight, x, z));
      });
    });

    // Main Longitudinal Girders (Along Z)
    cols.forEach(x => {
      const girder = createIBeam(bayZ * 2, 0.8, 0.6);
      girder.position.set(x, colHeight, 0);
      structureGroup.add(girder);
    });

    // Transverse Beams (Along X)
    rows.forEach(z => {
      const beam = createIBeam(bayX, 0.8, 0.6);
      beam.rotation.y = Math.PI / 2;
      beam.position.set(0, colHeight, z);
      structureGroup.add(beam);
    });

    // Roof Trusses & Pitched Chords
    rows.forEach(z => {
      const apexY = colHeight + 3.2;
      
      // Left Rafter
      const leftLen = Math.hypot(bayX / 2, 3.2);
      const leftAngle = Math.atan2(3.2, bayX / 2);
      const leftRafter = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.4, leftLen),
        matBeams
      );
      leftRafter.position.set(-bayX / 4, colHeight + 1.6, z);
      leftRafter.rotation.y = Math.PI / 2;
      leftRafter.rotation.x = leftAngle;
      structureGroup.add(leftRafter);

      // Right Rafter
      const rightRafter = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.4, leftLen),
        matBeams
      );
      rightRafter.position.set(bayX / 4, colHeight + 1.6, z);
      rightRafter.rotation.y = Math.PI / 2;
      rightRafter.rotation.x = -leftAngle;
      structureGroup.add(rightRafter);

      // King Post / Center Web
      const kingPost = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 3.0, 0.25),
        matBraces
      );
      kingPost.position.set(0, colHeight + 1.5, z);
      structureGroup.add(kingPost);

      // Diagonal Web Struts
      [-1, 1].forEach(side => {
        const strut = new THREE.Mesh(
          new THREE.BoxGeometry(0.2, 2.2, 0.2),
          matBraces
        );
        strut.position.set(side * 2.2, colHeight + 1.1, z);
        strut.rotation.z = side * 0.55;
        structureGroup.add(strut);
      });
    });

    // Longitudinal Roof Purlins
    const purlinPositions = [
      { y: colHeight + 1.0, x: -bayX / 3 },
      { y: colHeight + 2.1, x: -bayX / 6 },
      { y: colHeight + 3.2, x: 0 },
      { y: colHeight + 2.1, x: bayX / 6 },
      { y: colHeight + 1.0, x: bayX / 3 }
    ];

    purlinPositions.forEach(pos => {
      const purlin = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.2, bayZ * 2 + 1),
        matPurlins
      );
      purlin.position.set(pos.x, pos.y, 0);
      structureGroup.add(purlin);
    });

    // Vertical X-Bracing in Side Bays
    const braceMat = matBraces;
    const addXBrace = (x: number, z1: number, z2: number) => {
      const zMid = (z1 + z2) / 2;
      const dz = Math.abs(z2 - z1);
      const braceLen = Math.hypot(dz, colHeight);
      const angle = Math.atan2(colHeight, dz);

      // Brace 1
      const b1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, braceLen, 8),
        braceMat
      );
      b1.position.set(x, colHeight / 2, zMid);
      b1.rotation.x = angle;
      structureGroup.add(b1);

      // Brace 2
      const b2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, braceLen, 8),
        braceMat
      );
      b2.position.set(x, colHeight / 2, zMid);
      b2.rotation.x = -angle;
      structureGroup.add(b2);

      // Central Gusset Ring
      const gusset = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.08, 16),
        matPlates
      );
      gusset.position.set(x, colHeight / 2, zMid);
      gusset.rotation.z = Math.PI / 2;
      structureGroup.add(gusset);
    };

    addXBrace(-bayX / 2, -bayZ, 0);
    addXBrace(bayX / 2, 0, bayZ);

    // Mouse / Touch Drag Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      if (!interactive) return;
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !structureGroup) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      structureGroup.rotation.y += deltaX * 0.008;
      structureGroup.rotation.x = Math.max(-0.4, Math.min(0.6, structureGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !structureGroup || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      structureGroup.rotation.y += deltaX * 0.008;
      structureGroup.rotation.x = Math.max(-0.4, Math.min(0.6, structureGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotateRef.current && !isDragging && structureGroup) {
        structureGroup.rotation.y += 0.0035;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  // Handle Wireframe toggle
  useEffect(() => {
    Object.values(materialsRef.current).forEach(mat => {
      mat.wireframe = isWireframe;
    });
  }, [isWireframe]);

  // Handle Color mode toggle (BIM vs Industrial Steel)
  useEffect(() => {
    const mats = materialsRef.current;
    if (!mats.column) return;

    if (colorMode === 'steel') {
      // Monochrome Architectural Steel Patina
      mats.column.color.setHex(0x3a4046);
      mats.beam.color.setHex(0x4a525a);
      mats.brace.color.setHex(0x565f68);
      mats.plate.color.setHex(0x6b7580);
      mats.purlin.color.setHex(0x505860);
    } else {
      // Tekla BIM Coordination Colors
      mats.column.color.setHex(0x345B4B); // Forest green
      mats.beam.color.setHex(0x3b6998);   // Blue
      mats.brace.color.setHex(0xc45a2c);  // Orange
      mats.plate.color.setHex(0x6e7882);  // Grey
      mats.purlin.color.setHex(0x93a35a); // Olive
    }
  }, [colorMode]);

  const resetView = () => {
    if (groupRef.current) {
      groupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-xs border border-[#77766F]/20 bg-[#F5F3EE] ${height} ${className}`}>
      {/* 3D Canvas mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Architectural HUD Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-1">
        <span className="tech-label text-emerald-800 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          TEKLA STRUCTURES · 3D BIM MODEL
        </span>
        <span className="text-xs text-[#77766F] font-mono">
          Rotational Space-Frame Bay · 600×800mm W-Flange
        </span>
      </div>

      {/* Interactive Controls Bar */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#FFFFFF]/90 backdrop-blur-sm p-1.5 border border-[#77766F]/20 rounded-xs shadow-xs text-xs">
        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono transition-colors rounded-xs ${
            isWireframe ? 'bg-[#345B4B] text-white' : 'text-[#222522] hover:bg-[#E5E1D8]'
          }`}
          title="Toggle Wireframe Mode"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isWireframe ? 'Solid' : 'Wireframe'}</span>
        </button>

        <button
          onClick={() => setColorMode(colorMode === 'bim' ? 'steel' : 'bim')}
          className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono transition-colors rounded-xs ${
            colorMode === 'steel' ? 'bg-[#222522] text-white' : 'text-[#222522] hover:bg-[#E5E1D8]'
          }`}
          title="Toggle Material Shading"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{colorMode === 'bim' ? 'BIM Colors' : 'Raw Steel'}</span>
        </button>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono transition-colors rounded-xs ${
            autoRotate ? 'bg-[#E5E1D8] text-[#222522]' : 'text-[#77766F] hover:bg-[#E5E1D8]'
          }`}
          title="Toggle Auto Orbit"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{autoRotate ? 'Spinning' : 'Static'}</span>
        </button>

        <button
          onClick={resetView}
          className="p-1 text-[#77766F] hover:text-[#222522] hover:bg-[#E5E1D8] rounded-xs transition-colors"
          title="Reset View Orientation"
        >
          <Compass className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* BIM Element Key */}
      <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-3 text-[11px] font-mono text-[#77766F] bg-[#FFFFFF]/80 backdrop-blur-sm px-3 py-1.5 border border-[#77766F]/15 rounded-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-[#345B4B]" /> Columns
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-[#3b6998]" /> Girders
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-[#c45a2c]" /> Braces
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-[#93a35a]" /> Purlins
        </span>
      </div>
    </div>
  );
};
