import { Component } from "react";
import Counter from "./counter";

class ButtonComponent extends Component{
    // to create state
state={
isSubscribe:false,
text1:"Subscribe",
text2:"Subscribed",
}
// method{in class baseed components no need to declare}
changeSubscribe=()=>{
console.log("clicked")
// to change the state
this.setState(
    {
   isSubscribe:!this.state.isSubscribe
}
)
}

render(){
return(
<>
{/* method is binded here */}
{/* <button style={{this.state.isSubscribe?"red:green"}}this with conditional rendoring */}
<button style={{color:"red"}}onClick={this.changeSubscribe}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>

{
this.state.isSubscribe
?
<>
<h3>Welcome user</h3>
<Counter/>
</>
:
<h3>please subscribe to see content</h3>
}
</>

)

}

}
export default ButtonComponent