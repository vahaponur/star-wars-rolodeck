
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
class App extends Component{
  constructor(){
    super();
    this.state={
      characters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch("https://akabab.github.io/starwars-api/api/all.json").then((response)=>{return response.json();}).
    then((data)=> this.setState(()=>{return {characters:data}}))
  }
  render(){
   
    return(
      <CardList list={this.state.characters}/>
    )
  }
}
export default App;
