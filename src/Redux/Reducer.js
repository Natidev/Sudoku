export default function Reducer(initialState={
    currentNumber:1,
    sudokuIndex:-1,
    hintCount:3
}, action){
switch(action.type){
    case 'CHANGE_NUMBER':
        return {...initialState,
            currentNumber:action.payload.currentNumber}
    case 'CHANGE_SUDOKU':
        return {...initialState,sudokuIndex:action.payload.sudokuIndex}
    case 'USE_HINT':
        return {...initialState,hintCount:hintCount--}
    default:
        return initialState
}
}