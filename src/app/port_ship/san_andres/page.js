'use client'
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function GardenShip(){
    //seria lo recomendable tener una img de fondo y cambiar su url con useState
    const router = useRouter()
    const setDestiny=()=>{
        router.push('/port_ship/aviable_times')
    }
    return(
        <article className={styles.spots_box}>
            <main className={styles.spot_card}>
                <h3>¿A donde quiere ir?</h3>
                <div className={styles.options_selected}>
                    <select >
                        <option>uno</option>
                        <option>dos</option>
                        <option>tre</option>
                    </select>
                </div>
                <div className={styles.image_card} onClick={setDestiny}>
                    imagen del lugar
                </div>
            </main>
        </article>
    )
}