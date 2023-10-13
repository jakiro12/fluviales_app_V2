'use client'
import styles from './styles.module.css'
export default function BoatDraw(){
    return(
        <div className={styles.logo_container}>
            <div className={styles.part1}>
            <div className={styles.popa}></div>
            </div>
            
            <div className={styles.part2}>
            <div className={styles.middle}></div>
            
            </div>
            <div className={styles.part3}>
            <div className={styles.down}></div>

            </div>

        </div>
    )
}