import tables from './sudoku.json'
import { produce } from 'immer'
export default function TableReducer(initialstate=tables.SolvedSudoku[1],action){
switch(action.type){
    case "CHANGE":
        //row == the square i am working with
        //column == the index of the value to be changed
        const {col,row,value}=action.payload
        console.log(action.payload);
        return produce(initialstate,(stt=>{stt[row][col]=value}))
    default:
    return initialstate
}
}