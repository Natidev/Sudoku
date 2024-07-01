import { useState } from "react"
import Element from "../Element/Element"
import tstore from "../Redux/Tables/TablesStore"
function Square({index,list_of_values}){
    
    //FIXED make a validation that make sure there are no similar numbers in the same square
    //TODO make a better warnning
    const InvalidSquare="border-red-300 border-4"
    let a=0
    const [warning,setWarning]=useState(false)
    const [complete,setComplete]=useState(false)
    return <div 
    className={`grid grid-cols-3 gap-0 p-0 border shadow-md w-fit ${warning?InvalidSquare:""} ${complete?"border-blue-600 border-2":""}`}
    key={index}
    >
        {
            //FIXED use a value from the solved sudoku as identifier since the unsolved values are similar
            list_of_values.map((n,i)=>{
            return <Element 
                key={i} 
                val={n} 
                identifier={{
                    row:index,
                    col:a++
            }}
                duplicate={(dp)=>setWarning(!dp)}
                complete={(c)=>setComplete(c)}
            />
        }
        )
        }
        </div>
}export default Square