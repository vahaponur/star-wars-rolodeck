import { Component } from "react";

class Card extends Component{
    
    render(){
        const {listItem}= this.props
        const {id} = listItem;
        const {name}=listItem;
        const {homeworld}=listItem
        const {className}=this.props
        return(
            <div key={id} className={`card-container ${className}`}>
                <img src={listItem.image} alt="character" />
                <h3>{name}</h3>
                <p>{homeworld}</p>
            </div> 
        )
      
    }
}