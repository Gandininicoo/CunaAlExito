
import styles from './page.module.css'
import Card from "./components/card"
import Link from 'next/link'
import fsPromises from 'fs/promises';
import path from 'path'

async function fetchJugadoreshome() {
  const filePath = path.join(process.cwd(), 'app/jugadores.json')
      const jsonData = await fsPromises.readFile(filePath);
      const objectData = JSON.parse(jsonData);
      return objectData
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
