
import allthetables from './sudoku.json'
import store from '../store';
const getSudoku=()=>{
    const index=Math.floor(Math.random()*allthetables.SolvedSudoku.length);
    store.dispatch({
        type:'CHANGE_SUDOKU',
        payload:{
            sudokuIndex:index
        }
    })
    const selectedSudoku=allthetables.RawSudoku[index]
    let newStruct=selectedSudoku.map((arry)=>{
        return {
            square:arry.map((n)=>n===0?"":n),
            validity:true,
            completed:false
        }
    })
    return newStruct
}
export default getSudoku