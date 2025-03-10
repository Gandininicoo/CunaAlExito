export default function Footer() {
    return (
        <footer>
            <section>
            <div className="linkimg"><img src="../logo.png" alt="De la cuna al Exito logo" /></div>
            </section>
            <section>
            <a href={`https://wa.me/5403413886474?text=Hola Pablo me comunico para realizarle una consulta sobre "De la Cuna al Exito"`} target='_blank' rel="nofollow">
                <span>+54 (341) 388-6474</span>
            </a>
            <a className="header--custom-text" itemprop="email" href="mailto:" rel="nofollow">
                <span></span>
            </a>
            </section>
        </footer>
    )
}