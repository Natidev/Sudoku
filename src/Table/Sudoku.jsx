import { useState } from "react";
import Square from "../Box/Square";
import Numbers from "../Element/Numbers";
import tstore from "../Redux/Tables/TablesStore";
import store from "../Redux/store"
export default function Sudoku(){
    const currentT=tstore.getState()
    //TODO row and column validation With reaction
    const [rdx,setRdx]=useState(store.getState())

    store.subscribe(()=>
        setRdx(store.getState())

    
)
    return (<div>
        <button className={`${rdx.hintCount<=0?"bg-gradient-to-l from-gray-600 to-gray-600 ":"bg-gradient-to-l from-blue-600 to-blue-500"} m-2 p-2 rounded-md font-mono ${rdx.hint?" scale-105 bg-gradient-to-l from-yellow-500 to-yellow-400":""} font-bold text-white `}
        onClick={e=>{
            store.dispatch({
                type:"CHANGE_HINT",
                payload:{}
            })
        }}
        >
            hint {rdx.hintCount<=0?"":`X ${rdx.hintCount}`}
        </button>
        <div className="sudoku grid grid-cols-3 w-fit grid-rows-3
        bg-gradient-to-br from-zinc-400 via-slate-300 to-sky-200">
            {
            [0,1,2,3,4,5,6,7,8].map(n=><Square 
                key={n} 
                index={n}
                list_of_values={currentT[n].square}
                />)
            }
        </div>
        <div className="grid grid-flow-col">
            <Numbers/>
        </div>
    </div>
    );
}
//TODO add a hint button which will reveal the item on a box
//TODO do a count of hints used 