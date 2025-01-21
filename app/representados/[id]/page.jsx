import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link'
async function fetchJugadorUnico() { 
    const filePath = path.join(process.cwd(), 'app/jugadores.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData
  }
import styles from "./jugador.module.css"

export default async function Jugador({ params }) {
    let jarry = await fetchJugadorUnico()
    const { id } = params
    let jugadoridentificated = decodeURI(id)
    let jugadorexist = []
    jarry.map(jugador => { if (jugador.ID === (jugadoridentificated)) { jugadorexist.push(jugador) } })
    return (
        <>
            {jugadorexist.map(jugador => (
                <article className={styles.body} key={jugador.key}>
                    <div className={styles.banner} style={{ backgroundImage: `url(../data/${jugador.imgbackground})` }}></div>
                    <div className={styles.card}>
                        <h1 className={styles.name}>{jugador.nombre} {jugador.apellido}</h1>
                        <img className={styles.profileimg} src={`../data/${jugador.imgprofile}`} alt={jugador.nombre} />
                        <img className={styles.escudo} src={`../data/${jugador.imgclub}`} />
                        <table className={styles.tabladatos}>
                            <tr><th>EDAD</th><td>{jugador.edad}</td></tr>
                            <tr><th>ALTURA</th><td>{jugador.altura}</td></tr>
                            <tr><th>PESO</th><td>{jugador.peso}</td></tr>
                            <tr><th>PAIS</th><td>{jugador.nacionalidad} <img className={styles.bandera} src={`../data/${jugador.paisbandera}`} alt={jugador.nacionalidad}/></td></tr>
                            <tr><th>CLUB</th><td>{jugador.club} <img className={styles.escudomini} src={`../data/${jugador.imgclub}`} alt={jugador.club}/></td></tr>
                        </table>
                        <table className={styles.tabladatos2}>
                            <tr><th>Posicion</th></tr>
                            <tr><td>{jugador.posicion}</td></tr>
                            <tr><th>Posicion Secundaria</th></tr>
                            <tr><td>{jugador.posicion2}</td></tr>
                            <tr><td>{jugador.posicion3}</td></tr>
                        </table>
                        <table className={styles.tabladatos3}>
                            <tr><th>  <img className={styles.escudomini} src="../partidosicon.png" alt="partidos"/> PARTIDOS</th><td>{jugador.partidos}</td></tr>
                            <tr><th>  <img className={styles.escudomini} src="../golesicon.png" alt="partidos"/> GOLES</th><td>{jugador.goles}</td></tr>
                            <tr><th>  <img className={styles.escudomini} src="../asistenciasicon.png" alt="partidos"/> ASISTENCIAS</th><td>{jugador.asistencias}</td></tr>
                            <tr><th>  <img className={styles.escudomini} src="../amarillaicon.png" alt="partidos"/> AMARILLAS</th><td>{jugador.amarillas}</td></tr>
                            <tr><th>  <img className={styles.escudomini} src="../rojaicon.png" alt="partidos"/> ROJAS</th><td>{jugador.rojas}</td></tr>
                        </table>
                        <div className={styles.field} style={{ backgroundImage: `url(../field.jpg)` }}>
                                <div className={jugador.p1class}></div>
                                <div className={jugador.p2class}></div>
                                <div className={jugador.p3class}></div>
                        </div>
                    </div>
                    <section className={styles.socialmedia}>
                    <iframe className={styles.instagram} src={`${jugador.youtube}?si=detyktyOjiLKa8mf`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </section>

                </article>
            ))}
        </>
    )
}