import { lazy, Suspense, useEffect } from "react";
import { Fog, PerspectiveCamera, Scene, Vector3 } from 'three';
import ThreeGlobe from "three-globe";
import { Canvas, useThree, extend } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

const Globe = lazy(() => import('./Globe'))

extend({ ThreeGlobe });

const cameraZ = 300;

export function WebGLRendererConfig({ isMobile }) {
    const { gl, size } = useThree();

    useEffect(() => {
        const { innerWidth } = window;
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(isMobile ? innerWidth / 2 : size.width, isMobile ? innerWidth / 2 : size.height);
        gl.setClearColor(0xffaaff, 0);
    }, [gl, isMobile, size]);

    return null;
}
function World(props) {
    const { globeConfig, isMobile } = props;
    const scene = new Scene();
    scene.fog = new Fog(0xffffff, 400, 2000);
    const aspect = isMobile ? 1.5 : 1;

    return (
        <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
            <Suspense fallback={<Html>Loading Canvas Globe ...</Html>}>
                <WebGLRendererConfig isMobile={isMobile} />
                <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
                <directionalLight
                    color={globeConfig.directionalLeftLight}
                    position={new Vector3(-400, 100, 400)}
                />
                <directionalLight
                    color={globeConfig.directionalTopLight}
                    position={new Vector3(-200, 500, 200)}
                />
                <pointLight
                    color={globeConfig.pointLight}
                    position={new Vector3(-200, 500, 200)}
                    intensity={0.8}
                />
                <Suspense fallback={<Html>Loading Globe ...</Html>}>
                    <Globe {...props} />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minDistance={cameraZ}
                    maxDistance={cameraZ}
                    autoRotateSpeed={1}
                    autoRotate
                    minPolarAngle={Math.PI / 3.5}
                    maxPolarAngle={Math.PI - Math.PI / 3}
                />
            </Suspense>
        </Canvas>
    );
}

export default World;