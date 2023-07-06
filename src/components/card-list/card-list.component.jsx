import Card from "../card/card.component";
import "./card-list.styles.css"

const CardList = ({monsters}) => (
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