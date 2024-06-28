import { useState } from "react";
import store from "../Redux/store";
import tstore from "../Redux/Tables/TablesStore";
export default function Element({val,identifier }) {
    const {col,row}=identifier
    const [dsply, setDsply] = useState(val);
    return <div className=" aspect-square w-12 font-semibold p-2 m-0  bg-transparent
    hover:shadow-md cursor-pointer hover:scale-130"
        onClick={e=>{
            let num=store.getState().currentNumber;
            num===dsply?setDsply(""):setDsply(num)
            tstore.dispatch({
                type:'CHANGE',
                payload:{
                    row:row,
                    col:col,
                    value:num
                }
            })
            console.log(tstore.getState())
        }}
    >{dsply}</div>;
}

