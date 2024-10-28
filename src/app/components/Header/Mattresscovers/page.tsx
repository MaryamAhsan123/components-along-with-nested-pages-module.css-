import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../Header'
import style from './cover.module.css'

const mattresscoverPage = () => {
  return (
    <div>
      <Header/>
        <h1 className={style.hero}>Waterproof mattress cover avialable </h1>

        <Footer/>
      
    </div>
  )
}

export default mattresscoverPage
