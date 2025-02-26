import React from 'react'
import styles from "./breadcrumb.module.css"
import Link from "next/link";

const Breadcrumb = ({data}) => {
  return (
    <>
      <div className={styles.breadcrumbContainer}>
      <h1 className={styles.title}>{data.head}</h1>
      <p className={styles.breadcrumb}>
        <Link href="/" className={styles.homeLink}>
          Home
        </Link>{" "}
        &gt; {data.subheading}
      </p>
      </div>
    </>
  )
}

export default Breadcrumb
