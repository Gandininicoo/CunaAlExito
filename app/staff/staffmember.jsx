import styles from "./staff.module.css"
export default function staff(promp){
    return(
        <article className={styles.staffmemberbody}>
            <section className={styles.staffmemberinfo} >
                <h4 >{promp.Nombre}</h4>
                <h5 >{promp.Rol}</h5>
                <p >{promp.Wpp}</p>
                <p >{promp.Mail}</p>
            </section>
        </article>
    )
}