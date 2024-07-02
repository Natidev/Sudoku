import Square from "../Box/Square";
import Numbers from "../Element/Numbers";
import tstore from "../Redux/Tables/TablesStore";
export default function Sudoku(){
    const currentT=tstore.getState()
    //TODO row and column validation With reaction
    return (<div>
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