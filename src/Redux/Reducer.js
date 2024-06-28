export default function Reducer(initialState={
    currentNumber:1
}, action){
switch(action.type){
    case 'CHANGE_NUMBER':
        return {...initialState,currentNumber:action.payload.currentNumber}
    default:
        return initialState
}
}