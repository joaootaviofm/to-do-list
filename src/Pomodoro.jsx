import './Pomodoro.css'
import { useState, useEffect } from 'react'

function Pomodoro(props){

    const [minutes,setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [pause,setPause] = useState(true)

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
                    let boolMinute = pause ? 4 : 24;
                    let boolSecond = 59;

                    setMinutes(boolMinute)
                    setSeconds(boolSecond)
                    setPause(!pause)
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
        <button className='playButton'>Play song</button>
    </div>
</>)

}


export default Pomodoro