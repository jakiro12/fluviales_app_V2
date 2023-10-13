'use client'
import { useState } from "react";
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AppMenu(){
    const [currentCard, setCurrentCard] = useState(0);
    const router = useRouter()
    const cards = [
      "Viajes y Excursiones",
      "Promociones de Temporada",
      "Comida y Resto",
      "Emergencias"
    ];
    const dataCards=[{
      card_title:'Viajes y Excursiones',
      componentPath:'/port_ship'
    },
    {
      card_title:'Promociones de Temporada',
      componentPath:'/shipping'
    },
    {
      card_title:'Comida y Resto',
      componentPath:'/shipping'
    },
    {
      card_title:'Emergencias',
      componentPath:'/call_emergency'
    }
  ]
    const rotateDegree = 360 / cards.length;
  
    const handleNext = () => {
      setCurrentCard((currentCard + 1) % cards.length);
    };
  
    const handlePrev = () => {
      setCurrentCard((currentCard - 1 + cards.length) % cards.length);
    };
    return(
        <article className={styles.short_info_box}>
             <div className={styles.slider}>
                <button className={styles.move_card} onClick={handlePrev}>&#60;</button>
            <div className={styles.cards_box} style={{ transform: `rotateY(${currentCard * -rotateDegree}deg)` }}>
                {dataCards.map((card, index) => (
                <div key={index} 
                className={styles.card}
                 onClick={()=>router.push(`${card.componentPath}`)} 
                 data-title={card.card_title} >
                       <Image
                          src={`/menu_image${index + 1}.jpg`}
                          fill
                          alt="Picture menu card"
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                </div>               
                ))}
            </div>
            <button className={styles.move_card} onClick={handleNext}>&#62;</button>
            </div>
        </article>
    )
}