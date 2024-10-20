import { useState } from "react";
import store from "../Redux/store";
import tstore from "../Redux/Tables/TablesStore";
import { hintValue } from "../util/validity";
import { completedSquare, squareIsValid } from "../util/validity";
export default function Element({val,identifier,duplicate,complete }) {
    const {col,row}=identifier
    const [dsply, setDsply] = useState(val);
    return <div className=" aspect-square w-12 font-semibold p-2 m-0  bg-transparent
    hover:shadow-md cursor-pointer hover:scale-130"
        onClick={e=>{
            let num=store.getState().currentNumber;
            //if there similar number is filled this will erase it
            num===tstore.getState()[row].square[col]?num="":num;
            if(store.getState().hint){
                num=hintValue(row,col)
                store.dispatch({
                    type:'CHANGE_HINT',
                    action:{}
                }
                )
            }
            setDsply(num);
            tstore.dispatch({
                type:'CHANGE',
                payload:{
                    row:row,
                    col:col,
                    value:num
                }
            })
            let dp=squareIsValid(tstore.getState()[row].square)
            let cp=completedSquare(tstore.getState()[row].square,row)
            tstore.dispatch({
                type:'VALIDATE',
                payload:{
                    row:row,
                    value:dp
                }
            })
            duplicate(dp)
            complete(cp)
        }}
    >{dsply}</div>;
}
//DONE implement using the rawsudoku
//DONE outline green for the properly solved sudoku

