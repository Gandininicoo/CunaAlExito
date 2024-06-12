import styles from "./academy.module.css"
import Academy from "./academy"
import Academy2 from "./academy2"
export default function staff(){
    return(
        <article className={styles.body}>
            <Academy Titulo={'Academias de Futbol'} Texto={'Centro de perfeccionamiento técnico individual. Ubicadas en zona sur de rosario, dirigidas por profesionales con experiencia en clubes de A.F.A. que proporcionan las herramientas necesarias para el desarrollo ideal para un juvenil que pretende ser futbolista profesional. Con múltiples relaciones con reclutadores de clubes del futbol profesional nacional e internacional, intentamos fortalecer las virtudes que vienen con el jugador e incorporar las que el juvenil necesitará para poder llegar a canteras de clubes profesionales.'} Img={'../academias.jpg'}/>
            <Academy Texto={'Respetando la cultura futbolística de la escuela rosarina, destacando el buen juego y la destreza de nuestros jugadores, intentamos generar espacios de crecimiento técnicos y tácticos sin postergar el ingenio y la técnica individual que viene con el jugador desde sus comienzos en el potrero. Somos estrictos en nuestras instalaciones con respecto a las normas de convivencia, el ambiente sano y la transmisión de los valores necesario para la formación de personas por sobre todas las cosas. '} Img={'../academias2.jpg'}/>
        </article>
    )
}