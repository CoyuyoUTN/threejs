import { useBox } from "@react-three/cannon"
import * as textures from "../images/textures"
export const Cube = ({id, position, texture}) => {

        const [ref] = useBox(() => ({
            type: "Static",
            position
        }))

            const activeTexture = textures [texture + "Texture"];
    return (
        <mesh ref={ref}>
            <boxGeometry attach="geometry"/>
            <meshStandardMaterial 
           
            attach="material" 
            map={activeTexture}
            />
            </mesh>
       
            



    )
}