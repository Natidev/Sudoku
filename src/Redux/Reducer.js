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
        return {
            ...initialState,
            hint:initialState.hintCount>0?!initialState.hint:false
        }
            /*
            i want the hint to be used no less than three times
            i should toggle the hint value
            the hint shouldn't be toggled more than 3 times
                f->t2
                *t->f
                f->t
                *t->f1
                f->t
                *t->f0
            */
        // if(!initialState.hint)
        //     return {
        //         ...initialState,
        //         hint:true&&initialState.hintCount>0,
        //         hintCount:initialState.hintCount-1
        //     }
        // else
        //     return {
        //         ...initialState,
        //         hint:false
        //     }
        
    case 'USE_HINT':
        if(initialState.hint)
            return {
                ...initialState,
                hint:false,
                hintCount:initialState.hintCount-1
            }
        else
            return initialState

    default:
        return initialState
}
}