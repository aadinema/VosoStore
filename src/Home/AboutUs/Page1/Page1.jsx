import React from 'react'
import styles from "./page1.module.css"

const Page1 = () => {
  return (
    <>
     
           <div className={styles.container}>
             <h1 className={styles.title}>About Us</h1>
             <p className={styles.subtitle}>
               Home <span className={styles.subtitle2}>&gt;</span> About Us
             </p>
           </div>
      
    </>
  )
}

export default Page1
