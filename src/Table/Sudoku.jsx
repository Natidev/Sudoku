import Square from "../Box/Square";
import Numbers from "../Element/Numbers";
import tstore from "../Redux/Tables/TablesStore";
import store from "../Redux/store"
export default function Sudoku(){
    const currentT=tstore.getState()
    //TODO row and column validation With reaction
    store.subscribe(()=>console.log(store.getState()));
    
    return (<div>
        <button className="bg-yellow-400 m-2 p-2 rounded-md font-mono font-bold text-white "
        onClick={e=>{
            store.dispatch({
                type:"CHANGE_HINT",
                payload:{}
            })
        }}
        >
            hint
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