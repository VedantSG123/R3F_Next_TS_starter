import Head from 'next/head'
import css from '../styles/Home.module.css'
import { OrthographicCamera } from '@react-three/drei'
import Scene from '@/components/Scene/Scene'


export default function Home() {
  return (
    <>
      <Head>
        <title>React Three Fiber</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={css.scene}>
        <Scene/>
      </div>
    </>
  )
}
