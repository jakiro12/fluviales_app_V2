'use client'
import { useState, useEffect } from 'react';
import styles from '../../../page.module.css';
import ModalToShowMessage from './components/modal-alert';
import { supabase } from '@/app/utils/supabase';
import { email_verification, phone_verfication, names_verification, adress_verification, password_verification } from '../../utilities/regex-to-form.js';

export default function CreateNewUser() {
    const [signUpDataForUser, setSignUpDataForUser] = useState({
        name_user_app: '',
        lastName_user_app: '',
        user_adress: '',
        number_phone: '',
        user_mail: '',
        pp_user: '',
    });
    const [action, setAction] = useState(false);
    const [msgContain, setMsgContain] = useState("creado");
    const [currentUsers, setCurrentUsers] = useState([]);
    
 

    useEffect(() => {
        async function getTodos() {
            const { data: todos, error } = await supabase.from('UsersData').select('emailUser');
            if (!error) {
                setCurrentUsers(todos);
            } else {
                console.log(error);
            }
        }

        getTodos();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpDataForUser({ ...signUpDataForUser, [name]: value });
    };

   

    const newUserDataToSend = async(e) => {
        e.preventDefault();

        if (Object.values(signUpDataForUser).includes('')) return console.log('Debes completar todos los campos');
        if(names_verification.test(signUpDataForUser.name_user_app) === false){
            return console.log('Dato invalido')
        }
        if(password_verification.test(signUpDataForUser.pp_user) === false){
            return console.log('Dato invalido')
        }
        if(adress_verification.test(signUpDataForUser.user_adress) === false){
            return console.log('Dato invalido')
        }
        if(phone_verfication.test(signUpDataForUser.number_phone) === false){
            return console.log('Dato invalido')
        }
        if(email_verification.test(signUpDataForUser.user_mail) === false){
            return console.log('Dato invalido')
        }
       
        const { error } = await supabase
        .from('UsersData')
        .insert({ nameUser:`${signUpDataForUser["name_user_app"]}`
        ,lastNameUser:`${signUpDataForUser["lastName_user_app"]}`
        ,emailUser:`${signUpDataForUser["user_mail"]}`
        ,userPass:`${signUpDataForUser["pp_user"]}`
        ,adressUser:`${signUpDataForUser["user_adress"]}`
        ,phoneUser:`${signUpDataForUser["number_phone"]}`
     })
        if(error){
            console.log(error)
            setMsgContain(error.message)
            setAction(true)
        }
        setAction(true);
    };
    return (
        <article className={styles.content_form}>
            {action === true ? (
                <ModalToShowMessage msg={msgContain} status={action} />
            ) : (
                <form className={styles.container} onSubmit={newUserDataToSend}>
                    <div className={styles.input_content}>
                        <label  className={styles.name_alert}>Nombre</label>
                        <input 
                            type="text" 
                            className={styles.personal_data} 
                            name='name_user_app'
                            value={signUpDataForUser.name_user_app}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.input_content}>
                        <label  className={styles.lastname_alert}>Apellido</label>
                        <input 
                            type="text" 
                            className={styles.personal_data} 
                            name='lastName_user_app'
                            value={signUpDataForUser.lastName_user_app}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.input_content}>
                        <label  className={styles.adress_alert}>Direccion</label>
                        <input 
                            type="text" 
                            className={styles.personal_data}
                            name='user_adress'
                            value={signUpDataForUser.user_adress}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.input_content}>
                        <label  className={styles.phone_alert}>Telefono</label>
                        <input 
                            type="text" 
                            className={styles.personal_data}
                            name='number_phone'
                            value={signUpDataForUser.number_phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.input_content}>
                        <label  className={styles.email_alert}>Correo electronico</label>
                        <input 
                            type="email" 
                            className={styles.personal_data}
                            name='user_mail'
                            value={signUpDataForUser.user_mail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.input_content}>
                        <label  className={styles.pass_alert}>Crear Contraseña</label>
                        <input 
                            type="password" 
                            className={styles.personal_data}
                            name='pp_user'
                            value={signUpDataForUser.pp_user}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.boat_start}>
                        <button className={styles.send_data} type="submit">Registrarse</button>
                    </div>
                </form>
            )}
        </article>
    );
}
