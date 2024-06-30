import { squareIsValid } from '../../util/validity';
import { produce } from 'immer'
import getSudoku from './InitialStateGenerator'
export default function TableReducer(initialstate=getSudoku(),action){

switch(action.type){
    case "CHANGE":
        //row == the square i am working with
        //column == the index of the value to be changed
        /*DONE cahnge the structure of the store to the form{
        square:array(9),
        duplicate:true/false
        }
        initaily
        {
        array(9),
        array(9),
        .
        .
        .
        array(o)
        }
        {
        object{
        array
        }
        .
        .
        .
        array(o)
        }
        */
        const {col,row,value}=action.payload
        return produce(initialstate,(stt=>{stt[row].square[col]=value}))
    case "VALIDATE":
        return produce(initialstate,(stt)=>{
            stt[action.payload.row].validity=action.payload.value
        })

    default:
    return initialstate
}
}