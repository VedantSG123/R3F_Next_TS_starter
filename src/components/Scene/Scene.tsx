import { Canvas } from "@react-three/fiber"
import { OrthographicCamera } from "@react-three/drei"
import Experience from "../Experience/Experience"
import css from './Scene.module.css'


export default function Scene(){
  return <>
    <Canvas className={css.canvas}>
      {/**Best working orthographic camera parameters, resize is handled automatically */}
      {/* <OrthographicCamera makeDefault zoom={100} position={[0,0,5]}/> */}
      <Experience />
    </Canvas>
  </>
}