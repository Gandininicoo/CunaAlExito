import styles from "./staff.module.css"
import StaffMembers from "./staffmember"
import StaffMembers2 from "./staffmember2"
export default function staff(){
    return(
        <article className={styles.body}>
            <StaffMembers Nombre={'Pablo Pereyra'} Rol={'Presidente'} Wpp={'+54 (341) 3886474'} Mail={'pablomartinpereyra@gmail.com'}/>
            <StaffMembers Nombre={'Raul Medich'} Rol={'Area Contable'}/>
            <StaffMembers Nombre={'Juan Martin Van Poepelen'} Rol={'Abogado Deportivo'}/>
            <StaffMembers Nombre={'Matias Magri'} Rol={'Abogado Deportivo'} />
        </article>
    )
}