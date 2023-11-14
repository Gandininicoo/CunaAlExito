
import styles from "./jugador.module.css"

export default async function Jugador({ params }) {
    const { id } = params

    return (
        <article className={styles.body}>
            <div className={styles.banner} style={{ backgroundImage: `url(../data/aguirrez-bkg.jpg)` }}></div>
            <div className={styles.card}>
                <h1 className={styles.name}>Pedro Aguirrez</h1>
                <img className={styles.profileimg} src={`../data/aguirrez.png`} alt='Pedro Aguirrez' />
                <img className={styles.escudo} src={`../data/casildaclub.png`} alt='Casilda Club' />
                <table className={styles.tabladatos}>
                    <tr><th>EDAD</th><td>50 años</td></tr>
                    <tr><th>PAIS</th><td>Argentino</td></tr> 
                    <tr><th>CLUB</th><td>Casilda Club</td></tr>
                </table>
                <table className={styles.tabladatos2}>
                    <tr><th>Carrera</th></tr>
                    <tr><td>A.A. JORGE GRIFFA (2014)</td></tr>
                    <tr><td>TIRO FEDERAL ROSARIO (2016)</td></tr>
                    <tr><td>ATLETICO CHABAS (2016)</td></tr>
                    <tr><td>IDEPENDIENTE BIGAND (2017)</td></tr>
                    <tr><td>2 DE JULIO (2018-2019)</td></tr>
                    <tr><td>EDUARDO HERTZ (2021-2022)</td></tr>
                    <tr><td>CASILDA CLUB (2022/23)</td></tr>
                </table>
            </div>
            <a className={styles.descargarcv} href="../pedro-aguirrez-cv.pdf" download> Descargar Curriculum</a>

        </article>
    )
}