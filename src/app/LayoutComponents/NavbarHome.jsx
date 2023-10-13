import styles from '../page.module.css';
import Link from 'next/link';

export default function NavBarInfoHome(){
    //agregar boton intuitivo para volver al menu deingreso :D
    return(
        <nav className={styles.nav_bar_box}>  
            <ul>
                <li>
                    <Link href='/hours'>Horarios</Link> </li>
                <li>
                    <Link href='/spots'>Paradores</Link> 
                </li>
                <li>
                    <Link href='/services'>Servicios</Link> 
                </li>
                <li>
                    <Link href='/about'>Informacion</Link>
                </li>
            </ul>
        </nav>
    )
}