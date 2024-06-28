import Element from "../Element/Element"
function Square({index,list_of_values}){
    let rw=0
    return <div className="grid grid-cols-3 gap-0 p-0
            border shadow-md w-fit">
        {
            list_of_values.map(n=><Element 
                key={n} 
                val={n} 
                identifier={{
                    col:index,
                    row:rw++
            }}
            />)
        }
        </div>
}export default Square