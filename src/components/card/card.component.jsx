import { Component } from "react";
import './card.css'
class Card extends Component{
    firstLetterBig(str){
        if(typeof str === typeof ""){
            return str.charAt(0).toUpperCase()+str.slice(1);

        }
    }
    render(){
        const {item}= this.props
        const {id} = item;
        const {name}=item;
        let {homeworld}=item
        const {className}=this.props
        homeworld = this.firstLetterBig(homeworld);
        return(
         
            <div key={id} className={`card-container ${className}`}>
                <img src={item.image} alt="character"  />
                <h3>{name}</h3>
                <p>Homeworld: {homeworld}</p>
            </div> 
        )
      
    }
}
export default Card