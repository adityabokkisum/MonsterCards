import Card from "../card/card.component";
import "./card-list.styles.css"

import { Monster } from "../../App";

type monsterArray = {
    monsters: Monster[]
}

const CardList = ({monsters}:monsterArray) => (
        <div className="card-list">
        {
            monsters.map((monster)=>{
            const {id,name,email} = monster;
            return(
                <Card key = {id} id={id} name = {name} email = {email}/>
            )})}
        </div>
    )

export default CardList