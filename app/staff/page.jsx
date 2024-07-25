import styles from "./staff.module.css"
import StaffMembers from "./staffmember"
import StaffMembers2 from "./staffmember2"
export default function staff(){
    return(
        <article className={styles.body}>
            <StaffMembers Nombre={'Pablo Pereyra'} Rol={'Presidente'} Wpp={'+54 (341) 3886474'} Mail={'pablomartinpereyra@gmail.com'}/>
            <StaffMembers Nombre={'Santiago Iommi Cilea'} Rol={'Director Ejecutivo'} Wpp={'+54 (3465) 656192'} Mail={'santiagoiommi@hotmail.com'}/>
            <StaffMembers Nombre={'Angel Silva'} Rol={'Director Deportivo'} Wpp={'+54 (341) 5883010'} Mail={'angelari1977@hotmail.com'}/>
            <StaffMembers Nombre={'Raul Medich'} Rol={'Area Contable'}/>
            <StaffMembers Nombre={'Juan Martin Van Poepelen'} Rol={'Abogado Deportivo'}/>
            <StaffMembers Nombre={'Matias Magri'} Rol={'Abogado Deportivo'} />
        </article>
    )
}