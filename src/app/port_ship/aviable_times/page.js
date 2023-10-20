'use client'
import { useState } from 'react';
import styles from './styles.module.css';
export default function CheckHoursAndDays(){
    const today= new Date()//trae el dia actual
    const [selectedDay, setSelectedDay] = useState('martes');
    const [selectedIda, setSelectedIda] = useState(null);
    const [selectedRegreso, setSelectedRegreso] = useState(null);
    const formatDay= new Intl.DateTimeFormat("es-ar",{
       weekday:'long'
    })
    const formatTimeNow=new Intl.DateTimeFormat("es-ar",{
        timeStyle:'short'
    })
    const actualDay=formatDay.format(today)
  //  const timeTodayinHours=formatTimeNow.format(today)
    const daysOfWeek = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    const actualDayIndex = today.getDay(); // 0 para domingo, 1 para lunes, 2 para martes, etc.
  
    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
        setSelectedIda(null);
        setSelectedRegreso(null);
      };
    
      const handleIdaChange = (hora) => {
        setSelectedIda(hora);
      };
    
      const handleRegresoChange = (hora) => {
        setSelectedRegreso(hora);
      };
    
      
      const sendDataDay=()=>{
        console.log(actualDay,selectedIda,selectedRegreso )
   
      }
    return(
        <article className={styles.days_aviable_container}>
        <header className={styles.title_days}>Seleccionar dia y horario
        <div className={styles.options_selected}>           
        <select onChange={handleDayChange} value={selectedDay}>
            {daysOfWeek.map((day, index) => (
              index >= (actualDayIndex - 1) && (
                <option key={day} value={day}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </option>
              )
            ))}
          </select>
        </div>
        </header>
        <main className={styles.time_options_container}>
            <div className={styles.start}>Horarios de partida
                <div><label htmlFor="12:45" name="banquitotimego">12:45</label>
                    <input
                     type="checkbox" name="banquitogo"
                     className={styles.check_box_s}
                     checked={selectedIda === '12:45'}
                     onChange={() => handleIdaChange('12:45')}
                     />
                </div>
                <div><label htmlFor="13:45" name="banquitotimego">13:45</label>
                    <input type="checkbox" name="banquitogo" 
                    checked={selectedIda === '13:45'}
                    className={styles.check_box_s}
                    onChange={() => handleIdaChange('13:45')}
                     />
                </div>
                <div><label htmlFor="14:45" name="banquitotimego">14:45</label>
                    <input type="checkbox" name="banquitogo" 
                     checked={selectedIda === '14:45'}
                     className={styles.check_box_s}
                     onChange={() => handleIdaChange('14:45')}
                     />
                </div>
                <div><label htmlFor="15:45" name="banquitotimego">15:45</label>
                    <input type="checkbox" name="banquitogo"
                     checked={selectedIda === '15:45'}
                     className={styles.check_box_s}
                     onChange={() => handleIdaChange('15:45')}
                      />
                </div>
            </div>
            <div className={styles.came_back}>Horarios de regreso
            <div><label htmlFor="17:45" name="banquitotimeback">17:45</label>
                    <input type="checkbox" name="banquitoback"
                     checked={selectedRegreso === '17:45'}
                     className={styles.check_box_s}
                     onChange={() => handleRegresoChange('17:45')}
                      />
                </div>
                <div><label htmlFor="18:45" name="banquitotimeback">18:45</label>
                    <input type="checkbox" name="banquitoback"
                     checked={selectedRegreso === '18:45'}
                     className={styles.check_box_s}
                     onChange={() => handleRegresoChange('18:45')}
                      />
                </div>
                <div><label htmlFor="19:45" name="banquitotimeback">19:45</label>
                    <input type="checkbox" name="banquitoback" 
                     checked={selectedRegreso === '19:45'}
                     className={styles.check_box_s}
                     onChange={() => handleRegresoChange('19:45')}
                     />
                </div>
                <div><label htmlFor="20:45" name="banquitotimeback">20:45</label>
                    <input type="checkbox" name="banquitoback" 
                     checked={selectedRegreso === '20:45'}
                     className={styles.check_box_s}
                     onChange={() => handleRegresoChange('20:45')}
                     />
                </div>
            </div>
        </main>
        <footer className={styles.btn_container}>
            <button className={styles.time_check_btn} onClick={sendDataDay}>Confirmar</button>
        </footer>
    </article>
    )
}