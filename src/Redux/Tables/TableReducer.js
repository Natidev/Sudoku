import tables from './sudoku.json'
export default function TableReducer(initialstate=tables.SolvedSudoku[1],action){
switch(action.type){
    case "CHANGE":
        //row == the square i am working with
        //column == the index of the value to be changed
        const {row,col,value}=action.payload
        let newState=initialstate
        newState[row][col]=value
        return newState
    default:
    return initialstate
}
}