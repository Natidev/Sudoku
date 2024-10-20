import store from "../Redux/store"
import table from '../Redux/Tables/sudoku.json'
export const completedSquare=(square,index)=>{
    let rawsudoku=square.filter(n=>n!=="")
    if(!squareIsValid(square) || rawsudoku.length!=9)return false
    console.log(rawsudoku)
    const sudokuIndex=store.getState().sudokuIndex
    if(square.some((n,i)=>n!==table.SolvedSudoku[sudokuIndex][index][i]))return false
    return true
}
export const squareIsValid=(square)=>{
    let rawsudoku=square.filter(n=>n!=="")
    return new Set(rawsudoku).size==rawsudoku.length
//DONe if there is a similar number in the same square make the borders of the square red 
}
export const hintValue = (x, y) => table.SolvedSudoku[store.getState().sudokuIndex][x][y]