import {Component} from "react"
import './App.css';
import CardList from "./components/card-list/card-list.component"

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: ""
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const aUsers = await response.json();
    this.setState(()=> {
      return {
        monsters: aUsers,
        searchField: ""
      }
    })
  }
  onSearchChange = (event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchField}
    })
  }
  getSuggestedMonsters = () => {
    const {monsters,searchField} = this.state
    return monsters.filter((monster)=>monster.name.toLowerCase().includes(searchField));
  }
  render() {
    console.log("render from App");
    const aSuggestedMonsters = this.getSuggestedMonsters();
    return (
      <div className="App">
        <input className="search-box" placeholder="Search Monsters" type="search" onChange={this.onSearchChange}/>
        <CardList monsters = {aSuggestedMonsters}/>
      </div>
    );
  }
}

export default App;
