import { useState } from "react";
export default function Element({val}) {
    const [dsply, setDsply] = useState(val);
    const [show,setShow] = useState(true);
    const handleClick=(e)=>show?setShow(false):setShow(true)
    return <div className=" aspect-square w-12 font-semibold p-2 m-0 bg-transparent bg-gray-300
    hover:shadow-md cursor-pointer hover:scale-130"
        onClick={handleClick}
    >{
        show?dsply:""
        }</div>;
}

