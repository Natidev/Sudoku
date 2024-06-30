import { useState } from "react"
import Element from "../Element/Element"
import tstore from "../Redux/Tables/TablesStore"
function Square({index,list_of_values}){
    
    //FIXED make a validation that make sure there are no similar numbers in the same square
    //TODO make the ui respond for an invalid square
    const InvalidSquare="border-red-300 border-4"
    let a=0
    const [warning,setWarning]=useState(false)
    return <div className={`grid grid-cols-3 gap-0 p-0 border shadow-md w-fit ${warning?InvalidSquare:""}`}>
        {
            list_of_values.map(n=>{
            return <Element 
                key={n} 
                val={n} 
                identifier={{
                    row:index,
                    col:a++
            }}
                duplicate={(dp)=>setWarning(!dp)}
            />
        }
        )
        }
        </div>
}export default Square