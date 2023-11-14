import styles from "./staff.module.css"
import StaffMembers from "./staffmember"
import StaffMembers2 from "./staffmember2"
export default function staff(){
    return(
        <article className={styles.body}>
            <StaffMembers Nombre={'Santiago Iommi Cilea'} Rol={'Director Ejecutivo'} Wpp={'+54 (3465) 656192'} Mail={'santiagoiommi@hotmail.com'}/>
            <StaffMembers Nombre={'Pablo Pereira'} Rol={'Director Deportivo'} Wpp={'+54 (341) 3886474'} Mail/>
            <StaffMembers Nombre={'Angel Silva'} Rol={'Coordinador de Juveniles'}/>
            <StaffMembers Nombre={'Raul Merich'} Rol={'Area Contable'}/>
            <StaffMembers Nombre={'Juan Martin Van Poepelen'} Rol={'Abogado Deportivo'}/>
            <StaffMembers Nombre={'Matias Magri'} Rol={'Abogado Deportivo'} />
        </article>
    )
}