import React from 'react'
import styles from "./page4.module.css"

const Page4 = () => {
    const data = [
        {
          img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon1-2.svg",
          num: "1800+",
          paragraph: "Happy Clients",
        },
        {
          img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon2-2.svg",
          num: "600+",
          paragraph: "Finished Projects",
        },
        {
          img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon3-2.svg",
          num: "200+",
          paragraph: "Skilled Experts",
        },
        {
          img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon4-2.svg",
          num: "26%",
          paragraph: "Clients Satisfaction",
        },
      ];
  return (
    <>
     <div className={styles.container}>
             <div className={styles.reviewContainer}>
               {data.map((item, index) => (
                 <div key={index} className={styles.card}>
                   <div className={styles.iconContainer}>
                     <img
                       src={item.img}
                       alt={`icon-${index}`}
                       className={styles.icon}
                     />
                   </div>
                   <div className={styles.textContainer}>
                     <div className={styles.numberContainer}>
                       <span className={styles.number}>{item.num}</span>
                     </div>
                     <p className={styles.paragraph}>{item.paragraph}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div> 
    </>
  )
}

export default Page4
