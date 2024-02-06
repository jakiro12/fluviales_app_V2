"use client"
import { useState } from "react";
import styles from '../../page.module.css';
import { useRouter } from 'next/navigation';

export default function SignInFormTravel(){
   
    const router = useRouter()
    const[signinUserParams,setSigninUserParams]=useState({
        nameUser:'',
        passUser:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSigninUserParams({ ...signinUserParams, [name]: value });
      };
    const checkValuesUser=(e)=>{
        e.preventDefault()   
        console.log(signinUserParams)    
        router.push('/menu_user')
    }
    return(
        <article className={styles.login_form_box}>
             <h4 className={styles.title_app}>Fluviales del Parana</h4>
            <form   className={styles.form_to_get_in} 
                onSubmit={checkValuesUser}
            >
                <div>
                    <label className={styles.input_nick}>Correo electronico</label>
                    <input type="text" className={styles.get_data_input}
                     value={signinUserParams.nameUser}
                     name='nameUser'
                     onChange={handleInputChange}/>
                </div>
                <div>  <label  className={styles.input_nick}>Contraseña</label>
                    <input type="password"  className={styles.get_data_input}
                    value={signinUserParams.passUser}
                    name='passUser'
                    onChange={handleInputChange}/>
                    </div>
                <button type="submit" className={styles.btn_check_user}
                
                >Ingresar</button>
            </form>
            <div className={styles.extra_options}>
                 <button type="button" onClick={() => router.push('auth/create_user')}>Crear usuario</button>
                 <button>Recuperar contraseña</button>
            </div>
        </article>
    )
}