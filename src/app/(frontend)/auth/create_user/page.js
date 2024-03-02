'use client'
import { useState } from 'react';
import styles from '../../../page.module.css';
import ModalToShowMessage from './components/modal-alert';

export default function CreateNewUser(){
    const[signUpDataForUser,setSignUpDataForUser]=useState({
        name_user_app:'',
        lastName_user_app:'',
        user_adress:'',
        number_phone:'',
        user_mail:'',
        pp_user:'',
    })
    const [created,setCreated]=useState(false)
    const [msgContain , setMsgContain]=useState("usuario creado")
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpDataForUser({ ...signUpDataForUser, [name]: value });
      };
    const newUserDataToSend=(e)=>{
        e.preventDefault()
        
        console.log(signUpDataForUser)
        setSignUpDataForUser({name_user_app:'',
        lastName_user_app:'',
        user_adress:'',
        number_phone:'',
        user_mail:'',
        pp_user:'',})
        setCreated(true)
    }
    return(
        <article className={styles.content_form}>
           { created === true ?
                (  <ModalToShowMessage msg={msgContain} status={created}/>   ):
                (<form className={styles.container} onSubmit={newUserDataToSend}>
            <div className={styles.input_content}>
                <label htmlFor="" className={styles.name_alert}>Nombre</label>
            <input type="text" className={styles.personal_data}  
            name='name_user_app'
            value={signUpDataForUser.name_user_app}
            onChange={handleInputChange}
            required/>
            </div>
            <div className={styles.input_content}>
            <label htmlFor="" className={styles.lastname_alert}>Apellido</label>
            <input type="text"  className={styles.personal_data} 
            name='lastName_user_app'
            value={signUpDataForUser.lastName_user_app}
            onChange={handleInputChange}
            required />
            </div>
            
            <div className={styles.input_content}>
            <label htmlFor="" className={styles.adress_alert}>Direccion</label>
            <input  type="text"  className={styles.personal_data}
            name='user_adress'
            value={signUpDataForUser.user_adress}
            onChange={handleInputChange}
            required />
            </div>
            
            <div className={styles.input_content}>
            <label htmlFor="" className={styles.phone_alert}>Telefono</label>
            <input type="text"  className={styles.personal_data}
            name='number_phone'
            value={signUpDataForUser.number_phone}
            onChange={handleInputChange}
            required />
            </div>

            <div className={styles.input_content}>
            <label htmlFor="" className={styles.email_alert}>Correo electronico</label>
            <input type="email"  className={styles.personal_data}
            name='user_mail'
            value={signUpDataForUser.user_mail}
            onChange={handleInputChange}
            required />
            </div>
            
            <div className={styles.input_content}>
        <label htmlFor="" className={styles.pass_alert}>Crear Contraseña</label>
            <input type="password" className={styles.personal_data}
            name='pp_user'
            value={signUpDataForUser.pp_user}
            onChange={handleInputChange}
            required />
            </div>
            <div className={styles.boat_start}>
                
                <button className={styles.send_data} type="submit">Registrarse</button>
            </div>
        </form>)
           } 
        
        </article>
    )
}