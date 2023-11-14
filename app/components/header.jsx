"use client"
import { useState} from "react"
import styles from "./header.module.css"
import MenuDesplegable from './menu-desplegable'
import styles2 from "./menu.module.css"
import Link from "next/link"


export default function Header() {
    const [menuOn, menuOff] = useState(false)
    let hiddenMenuClass = menuOn ? `${styles2.menumain} , ${styles2.menudesplegado} ` : `${styles2.menumain}`;
    const [bttnOn, bttnOff] = useState(false)
    let bttnClass = bttnOn ? `${styles.button} , ${styles.buttondesplegado} ` : `${styles.button}`;
    const [bttnImg1, bttnImg2] = useState(false)
    let bttnImg = bttnImg1 ? `../menu2.png` : `../menu.png`;
  return (
    <>
    <header className={styles.header}>
      <main className={styles.headercontent}>
        <Link href='/'><img src="../logo.png" alt="" className={styles.logo} /></Link>
        <button className={bttnClass} onClick={()=> menuOff(!menuOn) & bttnOff(!bttnOn) & bttnImg2(!bttnImg1)} style={{ backgroundImage: `url(${bttnImg})`}}></button>
      </main>
    </header>
    <MenuDesplegable className={hiddenMenuClass}/>
    </>
  )
}
