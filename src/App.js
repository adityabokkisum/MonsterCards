import { useState,useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField,setSearchField] = useState("");
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState([]);

  console.log("rendered");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((oResponse)=>oResponse.json())
    .then((aMonsters)=>setMonsters(aMonsters))
  },[])
  useEffect(()=>{
    const aSuggestedMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));
    setFilteredMonsters(aSuggestedMonsters);
  },[monsters,searchField])
  const onSearchChange = (oEvent) => {
    const sSearchFieldString = oEvent.target.value.toLowerCase();
    setSearchField(sSearchFieldString);
  }
  return (
    <div className="App">
        <h1 className="app-title">Monsters Cards</h1>
       <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="Search"/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
