import Element from "../Element/Element"
function Square({index,list_of_values}){
    return <div className="grid grid-cols-3 gap-0 p-0
            border shadow-md w-fit">
        {
            list_of_values.map(n=><Element key={n} val={n}/>)
        }
        </div>
}export default Square