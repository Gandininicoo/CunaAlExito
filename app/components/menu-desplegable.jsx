import Link from "next/link"

export default function MenuDesplegable(params) {
  return (
    <nav className={params.className}>
        <ul>
            <li><Link href='/' onClick={()=> menuOff(!menuOn)}>INICIO</Link></li>
            <li><Link href='/representados' onClick={()=> menuOff(!menuOn)}>REPRESENTADOS</Link></li>
            <p>             </p>
            <li><Link href='/academias' onClick={()=> menuOff(!menuOn)}>ACADEMIAS</Link></li>
            <li><Link href='/scouting' onClick={()=> menuOff(!menuOn)}>RECLUTAMIENTO & SCOUTING</Link></li>
            <li><Link href='/servicios' onClick={()=> menuOff(!menuOn)}>OTROS SERVICIOS</Link></li>
            <p>ACERCA DE:</p>
            <li><Link href='/sobre-nosotros' onClick={()=> menuOff(!menuOn)}>SOBRE NOSOTROS</Link></li>
            <li><Link href='/staff' onClick={()=> menuOff(!menuOn)}>STAFF</Link></li>
        </ul>
    </nav>
  )
}
