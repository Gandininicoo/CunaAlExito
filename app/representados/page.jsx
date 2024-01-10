import Card from "../components/card"
import styles from "./jugadores.module.css"
async function fetchJugadores() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbwD_l76Uxrm_Pir8op4O_oTrXVJBg5KvUo-PGnLkQPBk9fzneoJEbHI4MsjSOaXZtY/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
export default async function Jugadores(){
    let jugadores = await fetchJugadores()
    jugadores.map(jugador =>(
                <Card key={jugador.ID} escudo={jugador.imgclub} jugadorid={jugador.ID} imghref={jugador.imgprofile} jugadornombre={jugador.nombre} jugadorapellido={jugador.apellido}/>
    ))}
Jugadores()