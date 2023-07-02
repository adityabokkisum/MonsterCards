import { Component } from "react";

class CardList extends Component {
    render() {
        const {monsters} = this.props;
        console.log("render from CardList");
        // console.log(this.props.monsters);
        return(
            <div>
                {
                    monsters.map((monster)=><div key={monster.id}>{monster.name}</div>)
                }
            </div>
        )
    }
}

export default CardList