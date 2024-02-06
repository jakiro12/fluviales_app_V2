'use client'
import NavBarInfoHome from "../../../LayoutComponents/NavbarHome";
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HoursOpen(){
    const router = useRouter()
    return(
        <article className={styles.hours_box}>
            <NavBarInfoHome/>
            <main>
                <Image
                src={'/times_travels.png'}
                alt="Picture of the author"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw"
                />
            </main>
            <footer className={styles.days_open}>
            <h2>Horarios de la semana</h2>
               <div className={styles.hours_day}>
                    <p>Martes:</p>
                    <p>10:00 hs - 20:00 hs</p>
                </div>
               <div className={styles.hours_day}>
                    <p>Miércoles:</p>
                    <p> 10:00 hs - 20:00 hs</p>
                </div>
               <div className={styles.hours_day}>
                    <p>Jueves:</p>
                    <p> 10:00 hs - 20:00 hs</p>
                </div>
               <div className={styles.hours_day}>
                    <p>Viernes:</p>
                    <p> 10:00 hs - 20:00 hs</p>
                </div>
               <div className={styles.hours_day}>
                    <p>Sabado:</p>
                    <p> 10:00 hs - 20:00 hs</p>
                </div>
               <div className={styles.hours_day}>
                    <p>Domingo:</p>
                    <p> 10:00 hs - 20:00 hs</p>
               </div>
               <button 
                className={styles.get_in} 
               onClick={() => router.push('/')}>comprar boleto</button>
            </footer>
        </article>
    )
}