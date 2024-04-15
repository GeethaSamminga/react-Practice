import { useState } from "react"

const UseStateEx2=()=>{
 const[fruits,setFruits]=useState(["apple","banana","watermelon"])
 
 const addFruit=()=>{
    const newFruit=[...fruits,"new fruit"]
    setFruits(newFruit)
 }
    return(
        <>
        <h3>useState Example2</h3>
      <button onClick={addFruit}>Add Fruit</button>
            {
                fruits.map((value,index)=><h4 key={index}>{value}</h4>)
            }
        
        </>
    )
}
export default UseStateEx2;