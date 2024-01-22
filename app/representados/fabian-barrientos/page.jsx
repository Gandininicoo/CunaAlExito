
import styles from "./jugador.module.css"

export default async function Jugador({ params }) {
    const { id } = params

    return (
        <article className={styles.body}>
            <div className={styles.banner} style={{ backgroundImage: `url(../data/coronelaguirre-bkg.jpg)` }}></div>
            <div className={styles.card}>
                <h1 className={styles.name}>Norberto Fabian Barrientos</h1>
                <img className={styles.profileimg} src={`../data/barrientos.png`} alt='Fabian Barrientos' />
                <img className={styles.escudo} src={`../data/coronelaguirre.png`} alt='Coronel Aguirre' />
                <table className={styles.tabladatos}>
                    <tr><th>EDAD</th><td>53 años</td></tr>
                    <tr><th>PAIS</th><td>Argentino</td></tr> 
                    <tr><th>CLUB</th><td>Coronel Aguirre</td></tr>
                </table>
                <table className={styles.tabladatos2}>
                    <tr><th>Carrera</th></tr>
                    <tr><td>CORONEL AGUIRRE(2004-2007)</td></tr>
                    <tr><td>CLUB GENERAL PAZ (2007)</td></tr>
                    <tr><td>CORONEL AGUIRRE (2009)</td></tr>
                    <tr><td>GRIFFA (2009)</td></tr>
                    <tr><td>CORONEL AGUIRRE (2011)</td></tr>
                    <tr><td>COACHING DE JUGADORES (2012-2018)</td></tr>
                    <tr><td>CORONEL AGUIRRE (2023)</td></tr>
                </table>
            </div>
            <a className={styles.descargarcv} href="../cv-barrientos.pdf" download> Descargar Curriculum</a>

        </article>
    )
}