export default function Reducer(initialState={
    currentNumber:1,
    hintCount:3,
    hint:false
}, action){
switch(action.type){
    case 'CHANGE_NUMBER':
        return {...initialState,
            currentNumber:action.payload.currentNumber}
    case 'CHANGE_SUDOKU':
        return {...initialState,sudokuIndex:action.payload.sudokuIndex}
    case 'CHANGE_HINT':
        let hintMonitor=initialState.hintCount>0 

        return {
            ...initialState,
            hint:hintMonitor,
            hintCount:initialState.hint?initialState.hintCount-1:initialState.hintCount
        }
    default:
        return initialState
}
}