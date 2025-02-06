import React from 'react'
import styles from "./ExpertTeam.module.css"

const ExpertTeam = () => {
    const cardData = [
        {
          image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team1.png',
          title: 'Marvin McKinney',
          description: 'CEO & Founder',
        },
        {
          image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team2.png',
          title: 'Sophia Rodriguez',
          description: 'CEO & Founder',
        },
        {
          image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team3.png',
          title: 'Marvin McKinney',
          description: 'CEO & Founder.',
        },
        {
          image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team4.png',
          title: 'Alexander Cameron',
          description: 'CEO & Founder',
        },
      ];
  return (
    <>
      <div className={styles.App}>
      <h1 className={styles.header}>Our expert team is always <br /> ready to help you</h1>
      <div className={styles.cardGrid}>
        {cardData.map((data, index) => (
           <div className={styles.card}>
           <img src={data.image} alt={data.title} className={styles.image} />
           <h2 className={styles.heading}>{data.title}</h2>
           <p className={styles.paragraph}>{data.description}</p>
         </div>
        ))}
      </div>
    </div>

   
    </>
  )
}

export default ExpertTeam
