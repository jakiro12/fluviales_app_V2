"use client"
import { useState } from "react";
import styles from '../../page.module.css';
import { useRouter } from 'next/navigation';
import { reqCurrentUser } from "@/app/api/call_user_db";
export default function SignInFormTravel(){
   
    const router = useRouter()
    const [isLoading, setIsLoading]=useState(false)
    const[signinUserParams,setSigninUserParams]=useState({
        nameUser:'',
        passUser:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSigninUserParams({ ...signinUserParams, [name]: value });
      };
    const checkValuesUser=async(e)=>{
        e.preventDefault()   
        setIsLoading(true)
        const response = await reqCurrentUser(signinUserParams["nameUser"],signinUserParams["passUser"])
       // console.log(response.user_req)
        if(response.status_req === 200 && response.user_req.length !== 0 ){
            setIsLoading(false)
            router.push('/menu_user')
        }else{
            console.log('no se encuentra')
            setIsLoading(false)
        }
        if(response.error_message) console.log(response.error_message.message)

    }
    return(
        <>
        {isLoading === false ? (
            <article className={styles.login_form_box}>
                <h4 className={styles.title_app}>Fluviales del Parana</h4>
                <form className={styles.form_to_get_in} onSubmit={checkValuesUser}>
                    <div>
                        <label className={styles.input_nick}>Correo electrónico</label>
                        <input 
                            type="text" 
                            className={styles.get_data_input}
                            value={signinUserParams.nameUser}
                            name='nameUser'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className={styles.input_nick}>Contraseña</label>
                        <input 
                            type="password"  
                            className={styles.get_data_input}
                            value={signinUserParams.passUser}
                            name='passUser'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className={styles.btn_check_user}>
                        Ingresar
                    </button>
                </form>
                <div className={styles.extra_options}>
                    <button type="button" onClick={() => router.push('auth/create_user')}>
                        Crear usuario
                    </button>
                    <button>Recuperar contraseña</button>
                </div>
            </article>
        ) : (
            <div>cargando</div>
        )}
    </>
    )
}