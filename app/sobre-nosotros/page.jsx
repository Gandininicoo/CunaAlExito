import styles from "./sobrenosotros.module.css"
import SobreNosotros from "./sobre-nosotros"
export default function Sobrenosotros(){
    return(
        <article className={styles.body}>
            <h4 className={styles.titulo}>Sobre Nosotros:</h4>
            <SobreNosotros Texto={'En “De La Cuna Al Éxito” Nos centramos en desarrollo de nuestros jugadores tanto en el ámbito profesional como personal otorgándoles herramientas que les permitan llegar al más alto rendimiento.'} 
            Texto2={'Tenemos como objetivo principal que los juveniles que se encuentran en nuestra estructura se identifiquen con una forma de jugar y vivir el futbol de acuerdo a la escuela futbolística rosarina que tantos talentos ha brindado al futbol mundial. Siendo una de sus principales características la calidad humana y la humildad.'}
            Texto3={'Con jóvenes formados en universidades de nuestro país desarrollamos una metodología y constituimos un equipo tanto para el futbol formativo como para el profesional. En el cual contamos con la siguientes áreas.'}  
            Img={'../logo11.png'}/>
        </article>
    )
}