import { useState } from "react";
import Card from "../Card/card";
import "./Grid.css"
import isWinner from "../../Helper/winnerLogic ";
function Grid({sizeOfBoard}){

    const [board,setBoard]=useState(Array(sizeOfBoard).fill(""))
    const [turn,setTurn]=useState(true);        // true=> O ,false=> X
    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn==true && !(board[index])){
            board[index]="O";
            setTurn(!turn);
        }else if(turn==false && !(board[index])){
            board[index]="X";
            setTurn(!turn);
        }
        const win=isWinner(board,turn?"O":"X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);       // This is used to set the Board Values.       
    }
    
    function reset(){
        // console.log("Reset is clicked!")
        setBoard(Array(sizeOfBoard).fill(""));
        setWinner(null);
        setTurn(true)
    }
    return(
        <div className="grid-wrapper">
            {
                winner &&(
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>reset</button>
                    </>                   
                )             
            }        
            <h1 className="turn-highlight">CurrentTurn: {turn? 'O': 'X' }</h1> 
            <div className="grid">
                {board.map((el,idx)=> <Card key={idx} gameEnd={winner?true:false} onPlay={play} player={el} index={idx}/>)}
            </div>
        </div>
        
    )
}

export default Grid;