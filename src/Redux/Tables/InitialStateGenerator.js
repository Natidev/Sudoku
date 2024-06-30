
import allthetables from './sudoku.json'
const getSudoku=()=>{
    const index=Math.floor(Math.random()*allthetables.SolvedSudoku.length);
    const selectedSudoku=allthetables.RawSudoku[index]
    let newStruct=selectedSudoku.map((arry)=>{
        return {
            square:arry.map((n)=>n===0?"":n),
            validity:true
        }
    })
    return newStruct
}
export default getSudoku