export default function Reducer(initialState={
    currentNumber:1,
    sudokuIndex:-1
}, action){
switch(action.type){
    case 'CHANGE_NUMBER':
        return {...initialState,
            currentNumber:action.payload.currentNumber}
    case 'CHANGE_SUDOKU':
        return {...initialState,sudokuIndex:action.payload.sudokuIndex}
    default:
        return initialState
}
}