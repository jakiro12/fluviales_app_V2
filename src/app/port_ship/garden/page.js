'use client'
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function GardenShip(){
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
                <div className={styles.image_card} onClick={setDestiny}
                style={{ position: 'relative', overflow: 'hidden' }}
                >
                <Image
                          src="/parador1.jpg"
                          fill={true}
                          alt="Boat to"
                          style={{objectFit:'cover'}}
                        />
                </div>
            </main>
        </article>
    )
}