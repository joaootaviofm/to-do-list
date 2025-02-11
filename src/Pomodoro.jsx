import './Pomodoro.css'
import { useState, useEffect } from 'react'

function Pomodoro(){

    const [minutes,setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds
    
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)

            if(seconds === 0){
                if(minutes !== 0){
                    setSeconds(59)
                    setMinutes(minutes-1)
                }else{
                    //
                }
            }
            else{
                setSeconds(seconds-1)
            }
        },1000)
    },[seconds])


return(<>
    <div className="pomodoro">
        <p>{timerMinutes}:{timerSeconds}</p>
    </div>
</>)

}


export default Pomodoro