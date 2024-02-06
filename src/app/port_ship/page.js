'use client'
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { selectFloatTo } from '../contex/slice';

export default function ChooseYourShip(){
    const router = useRouter()
    const floatSelected=useSelector(state=> state.valores.boat_name)
    const dispatch=useDispatch()
    const select_banquito_san_andres=()=>{
        dispatch(selectFloatTo("San Andres")) //debo hacer que persista enla memoria
        router.push('/port_ship/san_andres') 
    }
    const select_garden=()=>{
        dispatch(selectFloatTo("Tracker Garden")) //debo hacer que persista enla memoria
        router.push('/port_ship/garden') 
    }
    const select_gomon=()=>{
        dispatch(selectFloatTo("Gomon Max")) //debo hacer que persista enla memoria
        router.push('/port_ship/gomon') 
    }
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
                            onClick={select_banquito_san_andres}
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
                            onClick={select_garden}
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
                            onClick={select_gomon}
                            >Elegir destino</button>
                    </main>
                </article>
            </div>
        </div>
        </article>
    )
}