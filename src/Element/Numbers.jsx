import { motion } from "framer-motion"
import store from "../Redux/store"
import { useState } from "react"
export default function Numbers() {
    
    const [val,setVal]=useState(store.getState().currentNumber)
    store.subscribe(()=>setVal(store.getState().currentNumber))
    return <span className="flex justify-evenly ">
        {[1,2,3,4,5,6,7,8,9].map(n=>{
            if(val===n){
                return <button className="text-xl font-bold bg-gray-200
                h-min my-4 py-2 px-4 rounded-xl " key={n}>
                    {n}
                </button>
            }
        return <motion.button key={n} 
        className="text-xl my-4 py-2 px-4 
        bg-slate-600 text-white rounded-xl "
        whileTap={{ scale: 0.8,
            transition: { 
                duration: 0.3,
            }
        }}
        onClick={e=>{
            console.log(n)
            store.dispatch({
                type:'CHANGE_NUMBER',
                payload:{
                    currentNumber:n
                }
            })
        }}
        >
            {n}
            </motion.button>
        }
        )}
    </span>
    
}
