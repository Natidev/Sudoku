import Element from "../Element/Element"
function Square({index,list_of_values}){
    let rw=0
    //FIXME make a validation that make sure there are no similar numbers in the same square
    return <div className="grid grid-cols-3 gap-0 p-0
            border shadow-md w-fit">
        {
            list_of_values.map(n=><Element 
                key={n} 
                val={n} 
                identifier={{
                    row:index,
                    col:rw++
            }}
            />)
        }
        </div>
}export default Square