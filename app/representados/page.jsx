import Card from "../components/card"
import styles from "./jugadores.module.css"
async function fetchJugadores() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbzZEOUDz65wZBbWLNo74Z7DT5_fZhyqQvH_TJPJVNV3KeaYGlTL3imsX9DLH-rjZDo/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
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