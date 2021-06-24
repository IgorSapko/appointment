import React from 'react';
import styles from './DescriptionBlock.module.css'

export const DescriptionBlock: React.FC = () => (
<>
    <h2 className={styles.doctorsName}>Алексей Карачинский</h2>
 <div className={styles.totalWrapper}>
    <img src='./assets/man.png' alt='doctorsPhoto'  height="144" width="144" className={styles.doctorsPhoto}/>
    <div className={styles.descriptionWrapper}>
    <span className={styles.description}>Длительность консультации </span>
    <span className={styles.time}>50 минут </span>
    </div> 
    </div> 
</>
)
