import styles from "./scouting.module.css"
import Servicios from "./servicios"
export default function staff(){
    return(
        <article className={styles.body}>
            <Servicios Titulo={'APERTURA DEL MERCADO EUROPEO PARA FUTUROS INVERSIONISTAS:'}Img={'../servicios.jpg'}/>
            <Servicios Texto={'Búsqueda de clubes que para futuros adquirentes. Con la función de abrir futuros negocios en el mundo del deporte, nuestra agencia buscara en clubes, jugadores y ligas, diferentes vías de negocios para aquellas personas que deseen direccionar sus inversiones en el mundo del futbol.'} Img={'../servicios2.jpg'}/>
            <Servicios Titulo={'MARKETING DEPORTIVO:'} Texto={'Este equipo fue creado a fines de establecer una mirada técnica y superadora tanto para nuestros jugadores como para los clubes, ligas y empresas que trabajan con nosotros.'}Img={'../servicios3.jpg'}/>
            <Servicios Texto={'Generamos la posibilidad de conectar empresas con el mercado deportivo, acercando la posibilidad de llevar diferentes marcas a distintas áreas del deporte, con la posibilidad de publicitar ligas locales y de todo el mundo; clubes, nacionales e internacionales; y jugadores profesionales que pueden encajar en la imagen que desee la marca. Nuestro equipo de marketing asesorará de manera personalizada con orientación al deporte al futuro inversor.'} Img={'../servicios4.jpg'}/>

        </article>
    )
}