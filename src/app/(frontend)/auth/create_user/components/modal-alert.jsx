import { useEffect } from "react";
import styles from '../components/styles-modal.module.css'

export default function ModalToShowMessage({msg,status}){

    function refreshWebPath (){
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
    useEffect(()=>{
    //  if(status === true) refreshWebPath();
    },[])
    return(
        <div className={styles.display_modal} >
            <div className={styles.logo_alert} style={{backgroundColor: msg === 'creado' ? '#28ff02' : '#e91414'}}>
            </div>
            <p className={styles.body_information_modal}>
                usuario {msg} , agregar descripcion dle error
            </p>
            <button onClick={()=>refreshWebPath()} className={styles.btn_to_close_it} style={{backgroundColor: msg === 'creado' ? '#28ff02' : '#e91414'}}>
                Cerrar
            </button>
        </div>
    )
}