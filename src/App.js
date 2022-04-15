
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
  filteredCharacters(){
    return this.state.characters.filter((element)=>{
      
      let nameExist = element.name.toLocaleLowerCase().includes(this.state.searchField);
      let homeworldExist = false;
      if((typeof element.homeworld) === (typeof ""))
        homeworldExist = element.homeworld.toLocaleLowerCase().includes(this.state.searchField);
      return nameExist || homeworldExist
     })
  }
  onSearchChange=(event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{return {searchField}});
  }
  render(){
   
    return(
      <div className='App'>
        <h1 className='app-title'>Character Deck</h1>
      <SearchBox placeHolder="Search" onChangeHandler={this.onSearchChange}/>
      <CardList list={this.filteredCharacters()}/>
      </div>

    )
  }
}
export default App;
