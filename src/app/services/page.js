'use client'
import NavBarInfoHome from '../LayoutComponents/NavbarHome'
import LoginBtnMenu from '../LayoutComponents/btnGoToLogin'
import styles from './styles.module.css'
export default function PromotedServices(){
    return(
        <article className={styles.activities_box}>
            <LoginBtnMenu/>
            <NavBarInfoHome/>
            <div className={styles.img_act_content}>
                <img  alt="gente zarpando"/>
            </div>
            <div className={styles.service_description}>
                <h2>Viajes y Excursiones</h2>
                <p>
                Ofrecemos una experiencia única y emocionante para los visitantes y locales. 
                La ciudad de Rosario se encuentra en la costa del río Paraná, por lo que hay una amplia variedad de opciones para los viajes en bote. 
                Desde paseos en barcos pequeños para ver la vida silvestre y los paisajes naturales hasta excursiones en barcos más grandes con comodidades como comidas y bebidas, hay algo para todos los gustos.
                </p>
                <ul className={styles.option_boats}>
                <li>Banquito San Andrés <a className={styles.info_boats} href="https://enapro.com.ar/#!/-informacion-ntf/" rel="noreferrer" target="_blank">(mas info)</a></li>
                <li>Tracker Garden I</li>
                <li>Gomon Max II</li>
                </ul>
            </div>
        </article>
    )
}