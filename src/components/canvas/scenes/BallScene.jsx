import { Decal, Float, useTexture } from "@react-three/drei";
import PropTypes from "prop-types";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

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
            depthTest={true}
            depthWrite={true}
          />
        )}
      </mesh>
    </Float>
  );
};
Ball.propTypes = {
  imgUrl: PropTypes.string,
};

export default Ball;
