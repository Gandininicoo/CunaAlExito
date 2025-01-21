import Card from "../components/card"
import styles from "./jugadores.module.css"
import fsPromises from 'fs/promises';
import path from 'path'

async function fetchJugadores() {
    const filePath = path.join(process.cwd(), 'app/jugadores.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData
  }
export default async function Jugadores(){
    let jugadores = await fetchJugadores()
    return(
        <article className={styles.body}>
            {jugadores.map(jugador =>(
                <Card key={jugador.ID} escudo={jugador.imgclub} jugadorid={jugador.ID} imghref={jugador.imgprofile} jugadornombre={jugador.nombre} jugadorapellido={jugador.apellido}/>
            ))}
            <Card key='pedro-aguirrez' jugadorid='pedro-aguirrez' escudo='../data/silbato.png' imghref='../data/aguirrez.png' jugadornombre='Pedro' jugadorapellido='Aguirrez'/>
            
        </article>
    )
}