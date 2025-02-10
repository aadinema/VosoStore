import React from 'react'
import styles from "./work.module.css"
import { FaArrowRight } from "react-icons/fa6";


const WorkTogether = () => {
  return (
    <>
     <div className={styles.container}>
        <h1 className={styles.heading}>Get Started with Voso Courier Today</h1>
        <p className={styles.paragraph}>Revolutionize your courier and logistics operations in no time. Join the growing network of businesses transforming their logistics with Voso Courier.</p>
        <div>
        <a href='#' className={styles.bt}>Contact Us <FaArrowRight/></a>
        </div>
        </div> 
    </>
  )
}

export default WorkTogether
