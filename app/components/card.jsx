import Link from "next/link"
import styles from "./card.module.css"

export default function Card(props) {
    let jugadorhref = encodeURI(props.jugadorid.toLowerCase())
    return (
        
        <article className={styles.cardbody}>
            <Link href='../app/[ID]' as={`/representados/${jugadorhref}`} >
                <img className={styles.cardimg} src={`../data/${props.imghref}`} alt={props.jugadornombre} />
                <img className={styles.escudo} src={`../data/${props.escudo}`} alt={props.jugadornombre} />
                <p className={styles.cardapellido}>{props.jugadorapellido}</p>
                <h3 className={styles.cardnombre}>{props.jugadornombre}</h3>
            </Link>
        </article>
    )}