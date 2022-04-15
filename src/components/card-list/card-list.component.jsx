import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.css"
class CardList extends Component{
 
    render(){
        const {list}=this.props

        return(
            
            <div className="card-list">
             
                {list.map((item)=>{
                   return <Card key={item.id} item={item} className={`character ${item.name}`}/>
                })}
            </div>
        )
    }
}
export default CardList