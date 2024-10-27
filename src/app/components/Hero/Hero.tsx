import React from 'react'
import style from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={style.main}>
     <ul className={style.list}>
        <h1 className={style.h01}> HOT SELLING PRODUCTS</h1>
        <h2 className={style.h02}>Luxury Fitted Sheets</h2>
        <h3 className={style.h03}>Waterproof Mattress Protector</h3>
        </ul>
        
    </div>
  )
}


export default Hero
