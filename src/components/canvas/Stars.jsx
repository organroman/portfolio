import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  const COUNT = 5000;
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    return random.inSphere(arr, { radius: 1.2 });
  }, [COUNT]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} frameloop="demand">
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
