import { useState } from "react"

const UseState=()=>{
    const [count,setCount]=useState(0)
    const incrementHandler=(value,type)=>{
       if(type==="increment"){
        setCount(count+value)
       }
       else if(type==="decrement"){
        setCount(count-value)
       }else{
        setCount(0)
       }
    }
    return(
        <>
        <h3>UseState Example</h3>
        <h3>{count}</h3>
        <button onClick={
            ()=>incrementHandler(10,"increment")}>Increment Count</button>
            <button onClick={
            ()=>incrementHandler(10,"decrement")}>Decrement Count</button>
             <button onClick={
            ()=>incrementHandler()}>Reset Count</button>
        </>
    )
}
export default UseState;
