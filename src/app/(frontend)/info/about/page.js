'use client'
import NavBarInfoHome from '../../../LayoutComponents/NavbarHome'
import styles from './styles.module.css'
export default function AboutOurCompany(){
    return (
        <article className={styles.about_info_box}>
            <NavBarInfoHome/>
            <div className={styles.content_img}> <img className={styles.muestra}  alt='foto de la terminal fluvial'/>
           </div>
            <div className={styles.about_us}>
                <h2>Fluviales del Parna</h2>
                <p>La aplicacion web permite a los viajeros planificar,
                     reservar viajes y excursiones en bote desde el puerto de Rosario, Santa Fe. 
                     Con una interfaz intuitiva y fácil de usar, los usuarios pueden explorar distintas opciones
                      de itinerarios, comparar precios y características de los barcos disponibles, y realizar una
                       reserva en tiempo real. La aplicación también ofrece información detallada sobre los destinos, 
                       incluyendo descripciones de los lugares de interés, fotografías y recomendaciones. Con esta 
                       aplicación, los viajeros pueden planificar su aventura en el río Paraná de manera fácil y eficiente.
                </p>
            </div>
        </article>
    )
}