import { useThree, useFrame } from '@react-three/fiber'
import css from './Experience.module.css'
import { OrbitControls } from '@react-three/drei'

export default function Experience(){
  const {camera} = useThree()
  console.log(camera)
  return <>
    <OrbitControls />
    
    <mesh rotation={[-Math.PI/4,Math.PI/4,0]}>
      <boxGeometry/>
      <meshBasicMaterial color='#0000ff'/>
    </mesh>
  </>
}