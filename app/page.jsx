
import styles from './page.module.css'
import Card from "./components/card"
import Link from 'next/link'
async function fetchJugadoreshome() {
  const res = await fetch('https://script.google.com/macros/s/AKfycbzZEOUDz65wZBbWLNo74Z7DT5_fZhyqQvH_TJPJVNV3KeaYGlTL3imsX9DLH-rjZDo/exec', { cache: 'no-store' },{"method":"GET"})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  let jugadores = await fetchJugadoreshome()
  return (
    <>
    <section className={styles.banner} style={{ backgroundImage: `url(../home.jpg)`}}>
      <img src="../logo11.png" alt="" />
    </section>
    <div  className={styles.bodyhome}>
      <article className={styles.jugadoresHome}>
        <h2>Jugadores</h2>
        <section className={styles.jugadoresContenedor}>
        {jugadores.slice(1,5).map(jugador =>(
                <Card key={jugador.ID} escudo={jugador.imgclub} jugadorid={jugador.ID} imghref={jugador.imgprofile} jugadornombre={jugador.nombre} jugadorapellido={jugador.apellido}/>
        ))}
        </section>
        <Link className={styles.vermas} href='/representados'>VER MAS</Link>
      </article>
      <article className={styles.academiasHome}>
        <Link  href='/scouting' ><div style={{ backgroundImage: `url(../academia.png)`}}><p>SCOUTING</p></div></Link>
        <Link  href='/academias' ><div style={{ backgroundImage: `url(../academia2.png)`}}><p>ACADEMIAS</p></div></Link>
      </article>
      
    </div>
    </>
  )
}
