'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { selectDayTo, selectHourTo } from '@/app/ContexDataApp/slice';
export default function CheckHoursAndDays(){
    const router = useRouter()
    const dispatch= useDispatch()
    const today= new Date()//trae el dia actual
    const [selectedDay, setSelectedDay] = useState('martes');
    const [selectDeparture, setSelectDeparture] = useState(null);
    const [selectReturn, setSelectReturn] = useState(null);
    const [selectedDayNumeric, setSelectedDayNumeric] = useState(null); // Variable para almacenar la fecha numérica
    const formatTimeNow=new Intl.DateTimeFormat("es-ar",{
        timeStyle:'short'
    })
    const timeTodayinHours=formatTimeNow.format(today)
    const daysOfWeek = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',];
    const actualDayIndex = today.getDay(); // 0 para el dia actual, 1, 2, etc para los dias restantes
    const formatDayNow=new Intl.DateTimeFormat("es-ar",{
     weekday:'long'
  })
    let nameDayToday=formatDayNow.format(today)
    const handleDayChange = (e) => {
      const selectedDayName = e.target.value;
      setSelectedDay(selectedDayName);
  
      // Obtener el índice del día seleccionado
      const selectedDayIndex = daysOfWeek.indexOf(selectedDayName);
  
      // Calcular la fecha correspondiente al día seleccionado
      const todayIndex = today.getDay();
      const daysDifference = selectedDayIndex - todayIndex;
      const selectedDate = new Date(today);
      selectedDate.setDate(today.getDate() + daysDifference + 1);
  
      // Almacenar el valor numérico en otra variable
      setSelectedDayNumeric(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
      };
    
      const handleDepartureChange = (hour) => {
        setSelectDeparture(hour);
      };
    
      const handleReturnChange = (hour) => {
        setSelectReturn(hour);
      };
    
      
      const sendDataDay=()=>{
        const formatDateToday=new Intl.DateTimeFormat("es-ar",{
          dateStyle:'short'
      })
      if(selectedDayNumeric === null){
        const dateToday=formatDateToday.format(today)
        dispatch(selectDayTo(dateToday))
        dispatch(selectHourTo(selectDeparture))
      }else{
        dispatch(selectDayTo(selectedDayNumeric))
        dispatch(selectHourTo(selectDeparture))
      }
      console.log(selectDeparture,selectReturn)
        router.push('/ticket')

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
                     checked={selectDeparture === '12:45'}
                     onChange={() => handleDepartureChange('12:45')}
                     disabled={timeTodayinHours > '12:45' && selectedDay === nameDayToday}
                     />
                </div>
                <div><label htmlFor="13:45" name="banquitotimego">13:45</label>
                    <input type="checkbox" name="banquitogo" 
                    checked={selectDeparture === '13:45'}
                    className={styles.check_box_s}
                    onChange={() => handleDepartureChange('13:45')}
                    disabled={timeTodayinHours > '13:45' && selectedDay === nameDayToday}
                     />
                </div>
                <div><label htmlFor="14:45" name="banquitotimego">14:45</label>
                    <input type="checkbox" name="banquitogo" 
                     checked={selectDeparture === '14:45'}
                     className={styles.check_box_s}
                     onChange={() => handleDepartureChange('14:45')}
                     disabled={timeTodayinHours > '14:45' && selectedDay === nameDayToday}
                     />
                </div>
                <div><label htmlFor="15:45" name="banquitotimego">15:45</label>
                    <input type="checkbox" name="banquitogo"
                     checked={selectDeparture === '15:45'}
                     className={styles.check_box_s}
                     onChange={() => handleDepartureChange('15:45')}
                     disabled={timeTodayinHours > '15:45' && selectedDay === nameDayToday}
                      />
                </div>
            </div>
            <div className={styles.came_back}>Horarios de regreso
            <div><label htmlFor="17:45" name="banquitotimeback">17:45</label>
                    <input type="checkbox" name="banquitoback"
                     checked={selectReturn === '17:45'}
                     className={styles.check_box_s}
                     onChange={() => handleReturnChange('17:45')}
                      />
                </div>
                <div><label htmlFor="18:45" name="banquitotimeback">18:45</label>
                    <input type="checkbox" name="banquitoback"
                     checked={selectReturn === '18:45'}
                     className={styles.check_box_s}
                     onChange={() => handleReturnChange('18:45')}
                      />
                </div>
                <div><label htmlFor="19:45" name="banquitotimeback">19:45</label>
                    <input type="checkbox" name="banquitoback" 
                     checked={selectReturn === '19:45'}
                     className={styles.check_box_s}
                     onChange={() => handleReturnChange('19:45')}
                     />
                </div>
                <div><label htmlFor="20:45" name="banquitotimeback">20:45</label>
                    <input type="checkbox" name="banquitoback" 
                     checked={selectReturn === '20:45'}
                     className={styles.check_box_s}
                     onChange={() => handleReturnChange('20:45')}
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