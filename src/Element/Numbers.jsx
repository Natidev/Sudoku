import { motion } from "framer-motion"
export default function Numbers() {
    return <span className=" ">
        {[1,2,3,4,5,6,7,8,9].map(n=>{
        return <motion.button key={n} 
        className="text-2xl my-4 py-2 px-4 border"
        whileTap={{ scale: 0.8,
            transition: { 
                duration: 0.3,
            }
        }}
        >
            {n}
            </motion.button>
        }
        )}
    </span>
    
}
