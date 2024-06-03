import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Karia</div>
           <div className={styles.text}>
              <p>
                  Port City Internation University
              </p>
           
      </div>
    </div>
  )
}

export default Footer
