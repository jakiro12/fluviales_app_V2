'use client'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useState } from 'react';
export default function TicketDay(){
    const currentBoatSelected=useSelector(state=> state.valores.boat_name)
    const [ticketsPerUser,setTicketsPerUser]=useState(0)
    return(
        <section className={styles.section_container}>
        <article className={styles.ticket_cotainer}>
            <header className={styles.top_decoration}>
                <div></div>
            </header>
            <main className={styles.ticket_info}>
                <h3 className={styles.terminal}>NTF</h3>
                <div className={styles.info_display}>
                    <div className={styles.head_info}>
                    <h2>Puerto <p>Parador</p></h2>
                    <p>Pase unico</p>
                    <p>nombre y apellido</p>
                    </div>
                    <div className={styles.day_info}>
                   
                    <p>Sin reserva</p>
                    
                    </div>
                    <div className={styles.port_info}>
                    <p>{currentBoatSelected}</p>
                    <p>Valido:fecha</p>
                    </div>
                </div>
                <div className={styles.price_station}>
                    <div>
                        <p className={styles.open_time}>
                           Su embarcacion zarpa a las: horas
                        </p>
                        <div className={styles.quantity_tickets}>
                           cantidad de tickets:
                            <div>
                                <button 
                                onClick={()=>setTicketsPerUser(ticketsPerUser - 1)}
                                > - </button>
                                <p>{ticketsPerUser}</p>
                                <button 
                                onClick={()=>setTicketsPerUser(ticketsPerUser + 1)}
                                > + </button>
                           </div>
                        </div>
                       <div className={styles.set_ticket}>
                       <p>Precio:12$</p>
                       <button className={styles.btn_buy_ticket}>Comprar</button>
                        </div> 
                    </div>
                
                </div>
            </main>
            <footer className={styles.bottom_decoration}>
                <div></div>
            </footer>
        </article>
        </section>
    )


}