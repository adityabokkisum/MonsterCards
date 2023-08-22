import "./card.styles.css"

import { Monster } from "../../App"

const Card = ({id,name,email}:Monster) => (
    <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster ${name}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)

export default Card