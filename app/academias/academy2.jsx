import styles from "./academy.module.css"
export default function Academy2(promp){
    return(
        <article className={styles.staffmemberbody}>
            <img src={promp.Img} alt="" className={styles.staffmemberimg} />
            <section className={styles.staffmemberinfo} >
                <h5 >{promp.Titulo}</h5>
                <p >{promp.Texto}</p>
            </section>
        </article>
    )
}