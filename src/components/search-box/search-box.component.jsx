import { Component } from "react";
import "./search-box.css"
class SearchBox extends Component{
    render(){
        const {onChangeHandler}=this.props
        const {className}=this.props
        const {placeHolder}=this.props

        return(
            <input className={`search-box ${className}`} type="search" placeholder={placeHolder} onChange={onChangeHandler} />
        )
    }
}
export default SearchBox