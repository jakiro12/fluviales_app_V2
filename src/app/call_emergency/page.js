'use client'
import styles from './styles.module.css';
export default function CallEmergencyNumber(){
   
    return(
        <article className={styles.number_box}>
               <main className={styles.number_types}>
                    <div className={styles.categorie_phone}>
                        <p className={styles.name_phone}>Prefectura Naval Arg</p>
                        <div className={styles.info_number}> 
                            <p  className={styles.number_link} name='phone_numer'>3414720340</p>
                            <a href='3414720340' className={styles.copy_number} >&#9990;</a>
                        </div>
                    </div>
                    <div className={styles.categorie_phone}>
                        <p className={styles.name_phone}>Auxilio Mecanico</p>
                        <div className={styles.info_number}> 
                            <p  className={styles.number_link} name='phone_numer'>0800123123</p>
                            <a href='0800123123' className={styles.copy_number}>&#9990;</a>
                        </div>
                    </div>
                    <div className={styles.categorie_phone}>
                         <p className={styles.name_phone}>Terminal Fluvial</p>
                        <div className={styles.info_number}> 
                            <p className={styles.number_link} name='phone_numer'>3414481206</p>
                            <a href='3414481206' className={styles.copy_number} >&#9990;</a>
                        </div>
                    </div>
                    <div className={styles.categorie_phone}>
                        <p className={styles.name_phone}>Emergencias</p>
                        <div className={styles.info_number}> 
                            <p  className={styles.number_link} name='phone_numer'>911</p>
                            <a href='911' className={styles.copy_number} >&#9990;</a>
                        </div>
                    </div>
                </main>
        </article>
    )
}