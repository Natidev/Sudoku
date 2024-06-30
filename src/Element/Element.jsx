import { useState } from "react";
import store from "../Redux/store";
import tstore from "../Redux/Tables/TablesStore";
import { squareIsValid } from "../util/validity";
export default function Element({val,identifier }) {
    const {col,row}=identifier
    const [dsply, setDsply] = useState(val);
    return <div className=" aspect-square w-12 font-semibold p-2 m-0  bg-transparent
    hover:shadow-md cursor-pointer hover:scale-130"
        onClick={e=>{
            let num=store.getState().currentNumber;
            num===tstore.getState()[row][col]?num="":num;
            setDsply(num);
            console.log(identifier);
            tstore.dispatch({
                type:'CHANGE',
                payload:{
                    row:row,
                    col:col,
                    value:num
                }
            })
            
            console.log(squareIsValid(tstore.getState()[row],num,col));
            //console.log(tstore.getState())
        }}
    >{dsply}</div>;
}

