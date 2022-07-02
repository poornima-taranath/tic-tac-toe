import { useState } from "react";
import React from "react";
import './board.css'

const conditionsToWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,3,6],
    [0,4,8],
    [2,4,6]
];

const INITIAL_STATE = new Array(9).fill(null)
export default function Board (){

    const [box, setBox] = useState(INITIAL_STATE)
    const [xPlaying, setxPlaying] = useState(false);
    const [oPlaying, setoPlaying] = useState(false);
    let [winner,setWinner] = useState(null)

    let xIndexs=[]
    let oIndexs=[]

    const postBoxClick = (boxIndex) => {
        
        if(winner === null){
         const updatedState =  box.map((value,idx)=>{
           
            if (idx === boxIndex){
                console.log('inx ')
                let nextPlayer = xPlaying ? 'X' : 'O' ;
                return nextPlayer;
            }
            else
              return value
        })
        setBox(updatedState)
        setxPlaying(!xPlaying)
        setoPlaying(!!xPlaying)
 }
     
 }

     box.forEach((value,index)=>{
           
        if ( value === 'X' && xIndexs.length < 5 ){
             xIndexs = xIndexs.concat(index)
        }
        if ( value === 'O' && oIndexs.length < 5 ){
             oIndexs = oIndexs.concat(index)
       }
      });

   if( winner === null){
     if(oIndexs.length >= 3 || xIndexs.length >= 3 ){
      conditionsToWin.forEach((condition)=>{
      if(condition.every((ele, idx)=> ele === xIndexs[idx])){
          setWinner('X')
      }
      else if(condition.every((ele, idx)=> ele === oIndexs[idx]))
         setWinner('O')
     }) 
   }
     
   }


   const resetGame = () =>{
       setBox(INITIAL_STATE)
       setWinner(null)
       setxPlaying(false)
       setoPlaying(false)
   }

    return(
        <>
        <div className="flex justify-center">
          <div className="bg-slate-50 border-red-500 drop-shadow-xl p-3 m-5 max-w-fit self-center h-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded ">
                  <p className="font-poppins text-blue-800 font-semibold">Current Player : {xPlaying ? 'X' : 'O'}</p>
          </div>
            <button className=" bg-rose-500 p-3 m-5 rounded bg-gradient-to-r from-rose-500 to-rose-400 text-white font-poppins font-semibold" onClick={resetGame}>Reset Game</button>   
             <div className="flex justify-center p-3 w-fit items-center">
             {winner === null ? null : <div className="font-poppins bg-lime-500 text-white font-semibold p-3 rounded shadow-md">{`Winner is ${winner}`}</div>}
            </div>
            </div>  
       
        <div className="board-container p-10 text-center text-lg">
            {box.map((value,index)=> <div className={value === 'X'? 'text-red-600 individual-boxes font-semibold':"individual-boxes font-semibold text-blue-500"}
             onClick={(e) =>postBoxClick(index)}>
                {value}
             </div>)}
        </div>
   
       
        </>
    )

}