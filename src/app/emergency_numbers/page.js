'use client'
import styles from './styles.module.css';
export default function CallEmergencyNumber(){
     function copyNumberToCall(){
       let textToCopy=document.querySelector("[name='phone_numer']").textContent
        console.log(textToCopy)
       // await navigator.clipboard.writeText(textToCopy)
     
    }
    return(
        <article className={styles.number_box}>
               <main className={styles.number_types}>
                    <div className={styles.categorie_phone}>
                    <p className={styles.name_phone}>Prefectura Naval Arg</p>
                    <div className={styles.info_number}> 
                        <a href='tel:911' className={styles.number_link} name='phone_numer'>3414720340</a>
                    <button className={styles.copy_number} onClick={copyNumberToCall}></button>
                    </div>
                    </div>
                    <div className={styles.categorie_phone}>
                    <p className={styles.name_phone}>Auxilio Mecanico</p>
                    <div className={styles.info_number}> 
                        <a href='tel:3424420130' className={styles.number_link} name='phone_numer'>num particular</a>
                        <button className={styles.copy_number} onClick={copyNumberToCall}></button>
                    </div>
                    </div>
                    <div className={styles.categorie_phone}>
                    <p className={styles.name_phone}>Terminal Fluvial</p>
                    <div className={styles.info_number}> 
                        <a href='tel:3424420130' className={styles.number_link} name='phone_numer'> 3414481206</a>
                        <button className={styles.copy_number} onClick={copyNumberToCall}></button>
                    </div>
                    </div>
                    <div className={styles.categorie_phone}>
                    <p className={styles.name_phone}>Emergencias</p>
                    <div className={styles.info_number}> 
                        <a href='tel:3424420130' className={styles.number_link} name='phone_numer'>911</a>
                        <button className={styles.copy_number} onClick={copyNumberToCall}></button>
                    </div>
                    </div>
                </main>
        </article>
    )
}