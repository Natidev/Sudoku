import Square from "../Box/Square";
import Numbers from "../Element/Numbers";
export default function Sudoku(){
    let a=Array(9)
    return (<div>
        <div className="sudoku grid grid-cols-3 w-fit grid-rows-3
        bg-gradient-to-tr from-zinc-100 to-zinc-600
        ">
            {
            [1,2,3,4,5,6,7,8,9].map(n=><Square key={n}/>)
            }
        </div>
        <div className="grid grid-flow-col">
            <Numbers/>
        </div>
    </div>
    );
}