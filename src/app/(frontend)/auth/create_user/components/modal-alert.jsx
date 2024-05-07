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
            {msg === 'creado' ? <span>&#10004;</span>  : <span style={{color:"#000000"}}>X</span>}
            </div>
            <p className={styles.body_information_modal}>
                {msg === 'creado' ? 'Usuario Creado exitosamente' : `${msg}`}
            </p>
            <button onClick={()=>refreshWebPath()} className={styles.btn_to_close_it} style={{backgroundColor: msg === 'creado' ? '#28ff02' : '#e91414'}}>
                Cerrar
            </button>
        </div>
    )
}