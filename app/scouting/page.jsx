import styles from "./scouting.module.css"
import Scouting from "./scouting"
export default function staff(){
    return(
        <article className={styles.body}>
            <Scouting Titulo={'RECLUTAMIENTO Y SCOUTING'}Img={'../reclutador3.jpg'}/>
            <Scouting Texto={'En convenio con agencias internacionales hacemos visorias en el territorio de jugadores plausibles de jugar en ligas de segundo orden del futbol europeo, asiático y de diferentes puntos del planeta. Es la posibilidad de abrir nuevos mercados para jóvenes futbolistas argentinos, muy cotizados en el exterior por su talento.'} Img={'../reclutador.jpg'}/>
            <Scouting Texto={'Además realizamos seguimiento particular a juveniles en clubes de A.F.A permitiendo detallar, sus rasgos futbolísticos, estadísticas, conducta dentro y fuera del campo, lo que permitirá en un futuro una referencial crucial en los pasos que desee dar en su carrera. Convocamos a jóvenes de ligas regionales a nuestras academias para así poder otorgarles las herramientas necesarias para el crecimiento como deportista susceptible de ser profesional.'} Img={'../reclutador2.jpg'}/>
        </article>
    )
}