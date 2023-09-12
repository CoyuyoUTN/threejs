import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { FPV as Fpv } from "./components/FPV"
import { Player } from "./components/Player"
import { Cubes } from "./components/Cubes"
import { TextureSelector } from "./components/TextureSelect"


function App() {


  return (
    <>
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.9}/>
      <Fpv/>
      <Physics>
        <Cubes/>
        <Player/>
        <Ground/>
      </Physics>
    </Canvas>
    <TextureSelector/>
    <div className="pointer">+</div>
    </>
  )
}

export default App
