import React from 'react'
import Header from '../Header'
import Footer from '../../Footer/Footer'
import style from './contact.module.css'

const Contactpage = () => {
  return (
    <div>
      <Header/>
      <h1 className={style.hero}>whatsapp us: 03327736486</h1>
      <Footer/>
    </div>
  )
}

export default Contactpage
