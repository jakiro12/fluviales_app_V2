import Image from 'next/image'
import styles from './page.module.css'
import SignInFormTravel from './FormsApp/LoginForm/FormToSignIn'
import NavBarInfoHome from './LayoutComponents/NavbarHome'
import BoatDraw from './LayoutComponents/boatDraw/boatAnimate'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBarInfoHome/>
      <BoatDraw/>
        <SignInFormTravel/>
    </main>
  )
}
