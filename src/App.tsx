import { useState,useEffect,ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
  name: string,
  id: string,
  email:string
}

const App = () => {
  const [searchField,setSearchField] = useState("");
  const [monsters,setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  console.log("rendered");

  useEffect(()=>{
    getData<Monster []>("https://jsonplaceholder.typicode.com/users")
    .then((monsters)=>setMonsters(monsters))
  },[])
  useEffect(()=>{
    const suggestedMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));
    setFilteredMonsters(suggestedMonsters);
  },[monsters,searchField])
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sSearchFieldString = event.target.value.toLowerCase();
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