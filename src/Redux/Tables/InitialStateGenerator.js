
import allthetables from './sudoku.json'
const getSudoku=()=>{
    const selectedSudoku=allthetables.SolvedSudoku[Math.floor(Math.random()*allthetables.SolvedSudoku.length)]
    let newStruct=selectedSudoku.map((arry)=>{
        return {
            square:arry,
            validity:true
        }
    })
    return newStruct
}
export default getSudoku