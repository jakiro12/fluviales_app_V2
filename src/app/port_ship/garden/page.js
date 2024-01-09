'use client'
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectSpotTo } from '@/app/ContexDataApp/slice';

export default function GardenShip(){
    const [imgRef,setImgRef]=useState(1)
    const dispatch=useDispatch()
    const router = useRouter()
    const setDestiny=()=>{
        router.push('/port_ship/aviable_times')
    }
    const setSpotToTravel =(e)=>{
        const value = Number(e.target.value);
        setImgRef(value);
        dispatch(selectSpotTo(value))
    }
    return(
        <article className={styles.spots_box}>
            <main className={styles.spot_card}>
                <h3>¿A donde quiere ir?</h3>
                <div className={styles.options_selected}>
                    <select  onChange={(e)=>setSpotToTravel(e)}>
                        <option value={1}>uno</option>
                        <option value={2}>dos</option>
                        <option value={3}>tres</option>
                    </select>
                </div>
                <div className={styles.image_card} onClick={setDestiny}
                style={{ position: 'relative', overflow: 'hidden' }}
                >
                <Image
                          src={`/parador${imgRef}.jpg`}
                          fill={true}
                          alt="Boat to"
                          style={{objectFit:'cover'}}
                        />
                </div>
            </main>
        </article>
    )
}