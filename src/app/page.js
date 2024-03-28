import styles from './page.module.css'
import SignInFormTravel from './(frontend)/shared/FormToSignIn'
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
