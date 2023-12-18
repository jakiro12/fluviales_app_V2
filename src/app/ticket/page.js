'use client'
import styles from './styles.module.css'

export default function TicketDay(){
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
                    <p>embarcacion nombre</p>
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
                                <button > - </button>
                                <p>2</p>
                                <button > + </button>
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