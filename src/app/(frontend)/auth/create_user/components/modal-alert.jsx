import { useEffect } from "react";
import styles from '../components/styles-modal.module.css'

export default function ModalToShowMessage({msg,status}){

    function refreshWebPath (){
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
    useEffect(()=>{
      if(status === true) refreshWebPath();
    },[])
    return(
        <div className={styles.display_modal} >
            <div className={styles.logo_alert}>
                logo
            </div>
            <p className={styles.body_information_modal}>
                {msg} creado
            </p>
            <button onClick={()=>refreshWebPath()} className={styles.btn_to_close_it}>
                Cerrar
            </button>
        </div>
    )
}