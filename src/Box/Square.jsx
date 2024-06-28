import Element from "../Element/Element"
function Square(){
    return <div className="grid grid-cols-3 gap-0 p-0
            border shadow-md w-fit">
        {
            [1,2,3,4,5,6,7,8,9].map(n=><Element key={n} val={n}/>)
        }
        </div>
}export default Square