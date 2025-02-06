import React from 'react'
import styles from "./work.module.css"


const WorkTogether = () => {
  return (
    <>
     <div className={styles.container}>
        <h1 className={styles.heading}>Let’s work together</h1>
        <p className={styles.paragraph}>Each demo built with Teba will look different. You can customize anything <br /> appearance of your website with only a few clicks</p>
        <div>
        <button className={styles.bt}>Lets start a project</button>
        </div>
        </div> 
    </>
  )
}

export default WorkTogether
