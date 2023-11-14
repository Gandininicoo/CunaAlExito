import styles from "./scouting.module.css"
export default function Servicios(promp){
    return(
        <article className={styles.staffmemberbody}>
            <section className={styles.staffmemberinfo} >
                <h5 >{promp.Titulo}</h5>
                <p >{promp.Texto}</p>
                <p >{promp.Texto2}</p>
                <p >{promp.Texto3}</p>
            </section>
            <img src={promp.Img} alt="" className={styles.staffmemberimg} />
        </article>
    )
}