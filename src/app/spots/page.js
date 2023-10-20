'use client'
import NavBarInfoHome from '../LayoutComponents/NavbarHome'
import LoginBtnMenu from '../LayoutComponents/btnGoToLogin'
import styles from './styles.module.css'
export default function SpotsAviables (){
    return(
        <article className={styles.spots_info_box}>
            <LoginBtnMenu/>
            <NavBarInfoHome/>
            <div className={styles.image_content_spot}>
                <img alt="foto de la playa"  />
            </div>
            <article className={styles.spots_travel}>
                <h2>Viajes a la Isla</h2>
                <p><b>Garden Island</b>:
                    Situado en la costa de la playa, con apertura de viernes a domingo.
                    Playa artifical sobre el río con comodidades para disfrutar al aire libre, diversos espacios comunes y amenities de primer nivel.
                </p>
                <p><b>El Pimpollal</b>:
                    El parador cuenta con balneario, salón para eventos, juegos recreativos y excursiones.
                    El valor de la estadia es de 600$ por persona
                </p>
                <p>Los Marinos</p>
            </article>
        </article>
    )
}