import { useState } from "react"

const UseState3=()=>{
    const[timer,setTimer]=useState(20)
    const startTimer=()=>{
        
        setInterval(()=>{
            setTimer(prevTime=>prevTime-1)
        },1000)
    }
    return(
        <>
        <button onClick={startTimer}>Start Timer</button>
        <h4 style={
            {
                color:timer<=10?"red":"black"
                }
         }>{timer}</h4>

        {
            timer<=10 && <h3>Exam about to end</h3>
        }
        </>
    )
}
export default UseState3;