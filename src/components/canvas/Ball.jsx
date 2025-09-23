import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight
        intensity={0.25}
        speed={1.75}
        rotationIntensity={1}
        floatIntensity={2}
      />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {!!decal && (
          <Decal
            map={decal}
            position={[0, 0, 0.99]}
            rotation={[2 * Math.PI, 0, 6.25]}
            // rotation={[Math.PI, 0, 0]}
            // flatShading
            scale={0.8}
            depthTest={true} // optional but sane defaults
            depthWrite={true}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const url = typeof icon === "string" ? icon : icon;
  if (!url) return null;

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={url} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
