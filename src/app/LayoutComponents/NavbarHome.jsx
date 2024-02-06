import styles from '../page.module.css';
import Link from 'next/link';

export default function NavBarInfoHome(){
    //agregar boton intuitivo para volver al menu deingreso :D
    return(
        <nav className={styles.nav_bar_box}>  
            <ul>
                <li>
                    <Link href='/'>Inicio</Link>
                </li>
                <li>
                    <Link href='/info/hours'>Horarios</Link>
                </li>
                <li>
                    <Link href='/info/services'>Servicios</Link> 
                </li>
                <li>
                    <Link href='/info/about'>Informacion</Link>
                </li>
            </ul>
        </nav>
    )
}