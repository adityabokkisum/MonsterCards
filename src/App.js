import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const aUsers = await response.json();
    // console.log(aUsers)
    this.setState(() => {
      return {
        monsters: aUsers,
        searchField: "",
      };
    });
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  getSuggestedMonsters = () => {
    const { monsters, searchField } = this.state;
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
  };
  render() {
    console.log("render from App");
    const aSuggestedMonsters = this.getSuggestedMonsters();
    return (
      <div className="App">
        <h1 className="app-title">Monsters Cards</h1>
        <SearchBox className="monsters-search-box" onChangeHandler={this.onSearchChange} placeholder="Search"/>
        <CardList monsters={aSuggestedMonsters} />
      </div>
    );
  }
}

export default App;
