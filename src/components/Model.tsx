import { useMemo, Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  modelPath: string;
  position?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
  isMobile?: boolean;
}

function Model({
  modelPath,
  position = [0, 0, 0],
  scale = 4,
  autoRotate = true,
  rotationSpeed = 0.005,
  isMobile = false,
}: ModelProps) {
  // Use import.meta.env.BASE_URL to prefix the path
  const fullPath = `${import.meta.env.BASE_URL}${modelPath.startsWith("/") ? modelPath.slice(1) : modelPath}`;
  const { scene } = useGLTF(fullPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  // Apply mobile-specific scale
  const mobileScale = isMobile ? scale * 0.6 : scale;

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      position={position}
      scale={[mobileScale, mobileScale, mobileScale]}
    />
  );
}

// Loading spinner component
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-gray-500">Loading model...</p>
      </div>
    </Html>
  );
}

interface ModelViewerProps {
  modelPath: string;
  className?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

function ModelViewer({
  modelPath,
  className = "",
  autoRotate = true,
  rotationSpeed = 0.002,
}: ModelViewerProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Adjust camera position and zoom based on device
  const cameraPosition: [number, number, number] = isMobile
    ? [15, 0, 15]
    : [10, 0, 10];
  const cameraZoom = isMobile ? 40 : 50;

  return (
    <div
      className={`w-full max-w-4xl h-[50vh] min-h-[300px] max-h-[600px] rounded-lg ${className}`}
    >
      <Canvas
        shadows
        orthographic
        camera={{
          position: cameraPosition,
          zoom: cameraZoom,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={1.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.8}
          castShadow
        />
        {/* Add purple lights for tint effect */}
        <pointLight position={[-5, 5, -5]} color="#8a2be2" intensity={1} />
        <pointLight position={[5, -3, 5]} color="#9370db" intensity={0.8} />
        <Suspense fallback={<Loader />}>
          <Model
            modelPath={modelPath}
            autoRotate={autoRotate}
            rotationSpeed={rotationSpeed}
            isMobile={isMobile}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={isMobile}
          zoomSpeed={0.5}
          enableRotate={true}
          rotateSpeed={isMobile ? 0.7 : 1}
          makeDefault
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
