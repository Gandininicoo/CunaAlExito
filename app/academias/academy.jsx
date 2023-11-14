import styles from "./academy.module.css"
export default function Academy(promp){
    return(
        <article className={styles.staffmemberbody}>
            <section className={styles.staffmemberinfo} >
                <h5 >{promp.Titulo}</h5>
                <p >{promp.Texto}</p>
            </section>
            <img src={promp.Img} alt="" className={styles.staffmemberimg} />
        </article>
    )
}