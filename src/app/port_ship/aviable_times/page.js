'use client'
import styles from './styles.module.css';
export default function CheckHoursAndDays(){
    return(
        <article className={styles.days_aviable_container}>
        <header className={styles.title_days}>Seleccionar dia y horario
        <div className={styles.options_selected}>           
        <select >
            <option value="martes" >Martes</option>
            <option value="miércoles">Míercoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sábado">Sabado</option>
            <option value="domingo">Domingo</option>
        </select>
        </div>
        </header>
        <main className={styles.time_options_container}>
            <div className={styles.start}>Horarios de partida
                <div><label htmlFor="" name="banquitotimego">12:45</label>
                    <input type="checkbox" name="banquitogo"  />
                </div>
                <div><label htmlFor="" name="banquitotimego">13:45</label>
                    <input type="checkbox" name="banquitogo"  />
                </div>
                <div><label htmlFor="" name="banquitotimego">14:45</label>
                    <input type="checkbox" name="banquitogo"  />
                </div>
                <div><label htmlFor="" name="banquitotimego">15:45</label>
                    <input type="checkbox" name="banquitogo"  />
                </div>
            </div>
            <div className={styles.came_back}>Horarios de regreso
            <div><label htmlFor="" name="banquitotimeback">17:45</label>
                    <input type="checkbox" name="banquitoback"  />
                </div>
                <div><label htmlFor="" name="banquitotimeback">18:45</label>
                    <input type="checkbox" name="banquitoback"  />
                </div>
                <div><label htmlFor="" name="banquitotimeback">19:45</label>
                    <input type="checkbox" name="banquitoback"  />
                </div>
                <div><label htmlFor="" name="banquitotimeback">20:45</label>
                    <input type="checkbox" name="banquitoback"  />
                </div>
            </div>
        </main>
        <footer className={styles.btn_container}>
            <button className={styles.time_check_btn} >Confirmar</button>
        </footer>
    </article>
    )
}