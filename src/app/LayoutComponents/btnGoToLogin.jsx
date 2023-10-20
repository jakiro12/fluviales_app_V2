'use client'
import { useRouter } from 'next/navigation';
export default function LoginBtnMenu(){
    const router = useRouter()
    return(
        <button 
        style={{width:'50px'
                ,height:'50px',
                borderRadius:'50%',
                border:'2px solid black',
                position:'fixed',
                right:'10px',
                top:'40%'}}
                onClick={()=>router.push('/')}
                >
                    H
        </button>
    )
}