import Icon from "../Icon/icon";
import "./card.css"
function Card({player,index,onPlay,gameEnd}){
    let icon=<Icon/>
    if(player=="X"){
        icon=<Icon name="cross"/>
    }else if(player=="O"){
        icon=<Icon name="circle"/>
    }

    return (
        <div className="card" onClick={() =>(!gameEnd && onPlay(index))}>
            {icon}
        </div>
    )
}

export default Card;