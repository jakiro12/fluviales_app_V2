'use client'
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ChooseYourShip(){
    const router = useRouter()
 
    return(
        <article className={styles.menu_boats_box}>
            <div className={styles.navy_container}>
            <h2>Embarcaciones</h2>
            <div className={styles.float_aviable}>
                <article>
                    <div className={styles.img_boat_box}
                    style={{ position: 'relative', overflow: 'hidden' }}>
                    <Image
                          src="/boat_gomon.jpg"
                          fill={true}
                          alt="Boat to"
                          style={{objectFit:'cover'}}
                        />
                    </div>
                    <main className={styles.info_boat_island}>
                        <h3>Banquito san Andres </h3>
                        <p>Viaja a las paradores</p>
                        <p>Precio: $ 1.600 por persona
                            $ 800 Menores de 3 a 10 años
                            (Menores de 3 sin cargo)</p>
                            <button className={styles.select_time}
                            onClick={() => router.push('/port_ship/san_andres')}
                            >Elegir destino</button>
                    </main>
                </article>
                <article>
                <div className={styles.img_boat_box}
                    style={{ position: 'relative', overflow: 'hidden' }}>
                    <Image
                          src="/boat_gomon.jpg"
                          fill={true}
                          alt="Boat to"
                          style={{objectFit:'cover'}}
                        />
                    </div>
                    <main className={styles.info_boat_island}>
                        <h3>Tracker Garden I</h3>
                        <p>Excursion</p>
                        <p>Paseo de 1 hora 15 minutos por el canal principal,
                             en tracker.
                              Se llega hasta Balneario La Florida.</p>
                            <button className={styles.select_time}
                            onClick={() => router.push('/port_ship/garden')}
                            >Elegir destino</button>
                    </main>
                </article>
                <article>
                <div className={styles.img_boat_box}
                    style={{ position: 'relative', overflow: 'hidden' }}>
                    <Image
                          src="/boat_gomon.jpg"
                          fill={true}
                          alt="Boat to"
                          style={{objectFit:'cover'}}
                        />
                    </div>
                    <main className={styles.info_boat_island}>
                        <h3>Gomon Max II</h3>
                        <p>Excursion</p>
                        <p>Paseo de 1 hora 45 minutos por el canal principal, en gomón hasta 
                            islote después del Puente Rosario-Victoria.</p>
                            <button className={styles.select_time}
                            onClick={() => router.push('/port_ship/gomon')}
                            >Elegir destino</button>
                    </main>
                </article>
            </div>
        </div>
        </article>
    )
}