'use client'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useState } from 'react';
export default function TicketDay(){
    const currentBoatSelected=useSelector(state=> state.valores.boat_name)
    const dayToTravel=useSelector(state=> state.valores.day_check)
    const hourToTravel=useSelector(state=> state.valores.time_departure_check)
    const [ticketsPerUser,setTicketsPerUser]=useState(1)
    let currentMailUser=localStorage.getItem('current_email_user')
    const decreaseTickets = () => {
        if (ticketsPerUser > 1) {
          setTicketsPerUser(ticketsPerUser - 1);
        }
      };
    
      const increaseTickets = () => {
        if (ticketsPerUser < 10) {
          setTicketsPerUser(ticketsPerUser + 1);
        }
      };
    
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
                    <p>Valido:{dayToTravel}</p>
                    </div>
                </div>
                <div className={styles.price_station}>
                    <div>
                        <p className={styles.open_time}>
                           Su embarcacion zarpa a las: {hourToTravel}
                        </p>
                        <div className={styles.quantity_tickets}>
                           cantidad de tickets:
                            <div>
                                <button 
                                onClick={decreaseTickets}
                                > - </button>
                                <p>{ticketsPerUser}</p>
                                <button 
                                onClick={increaseTickets}
                                > + </button>
                           </div>
                        </div>
                       <div className={styles.set_ticket}>
                       <p>Precio:{1200 * ticketsPerUser}$</p>
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