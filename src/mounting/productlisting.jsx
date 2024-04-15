import { Component } from "react";
import axios from "axios";
import "./index.css"

class ProductListing extends Component {

  state={
    products:[]
  }
    componentDidMount(){
    this.fetchData()
    }
    // [using fetch]
    // fetchData=()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then(response=>response.json)
    //     .then(response=>console.log(response))
    // }
    // using async and await
//     
//[now using axios] 
fetchData=async()=>{
    const result=await axios.get("https://dummyjson.com/products")
    console.log(result)
    this.setState({
      products:result.data.products
    })
}
  render() {
    console.log(this.state.products)
    return (
      <>
      <h3>product Listing</h3>
      {
        this.state.products.length>0
        ?
        <div className="productList">
        {
          this.state.products.map((eachobject)=>{
            const {description,title,thumbnail,price,id}=eachobject
            return(
              <div className="cards" key={id}>
              <h3>{title}</h3>
              <h3>{description}</h3>
             <img src={thumbnail} alt={title} width={200} height={200}/>
             <h5 style={{color:"red"}}>${price}</h5>
              </div>
            )
          })
        }
        </div>
        :
        <h4>no products</h4>
      }
      </>
    );
  }
}
export default ProductListing;
