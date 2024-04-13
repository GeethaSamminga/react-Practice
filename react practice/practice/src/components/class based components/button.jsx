import { Component } from "react";

class CustomButton extends Component{
    state={
        // isSubscribe:false,
        // text1:"subscribe",
        // text2:"subscribed",
        fruits:["Banana","Apple","WaterMelon","Sapota","Grapes"]
    };
    // state creation using constructor
    // constructor(){
    //     super()
    //     this.state={
    //         fruits:["Banana","Apple","WaterMelon","Sapota","Grapes"]
    //     }
    // }
    // changeSubscribe=()=>{
    //     this.setState({
            
    //          isSubscribe: !this.state.isSubscribe
            
    //     });
    // };
    addFruit=()=>{
      const newFruit=[...this.state.fruits,"new Fruit"]
      console.log(newFruit)
      this.setState(
        {
         fruits:newFruit   
        },()=>{
           console.log(this.state.fruits,"inside setstate") 
        }
        // here 2 nd function is optional 
      ) 
      console.log(this.state.fruits,"outside setstate")
    }
    // here recived an index
    deleteFruit=(index)=>{
       const newFruit= this.state.fruits.filter((eachFruit,i)=>i!==index)
        this.setState(
            {
                fruits:newFruit
            }
        )
    }
    updateFruit=(index)=>{
   const newFruits= this.state.fruits.map((eachElement,i)=>{
        if(i===index){
            return "pineApple"
        }
        else{
            return eachElement
        }
      
    })
    this.setState(
        {
            fruits:newFruits
        }
      ) 
    }
    render(){
        return(
            <>
        {/* <button onClick={this.changeSubscribe}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
           {
            this.state.isSubscribe
            ?
            <h3>Welcome User</h3>
           :
           <h3>Please Subscribe to the content</h3>
           } */}
           <button onClick={this.addFruit}>Add Fruit</button>
           <ol>
            {
             this.state.fruits.map((eachElement,index)=>{
                return(
                    <>
                    
                    <li>
                        {eachElement}
                    </li>
                    {/* to pass arguments we have to take a function,if in case function lo ivvakapothey re excute avtundi */}
                    <button onClick={()=>this.deleteFruit(index)}>Delete</button>
                    <button onClick={()=>this.updateFruit(index)}>Update</button>
                    </>
                )
             })   
            }
           </ol>
            </>
        )
    }
}
export default CustomButton;