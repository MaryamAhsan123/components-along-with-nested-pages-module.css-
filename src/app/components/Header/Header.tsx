import React from 'react'
import Link from 'next/link'
import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style.container}>
        <h1 className={style.header} >Premium Collection</h1>
        <ul className={style.list}>
       <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/components/Header/Fittedsheets">Fittedsheets</Link> </li>
        <li><Link href="/components/Header/Mattresscovers">Mattress covers</Link> </li>
        <li><Link href="/components/Header/Bedsheets">Bedsheets</Link></li>
        <li><Link href="/components/Header/Contact">Contact</Link></li>

      </ul>
      
    </div>
  )
}

export default Header
