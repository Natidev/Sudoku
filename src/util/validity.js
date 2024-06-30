export const squareIsValid=(square)=>{
    let rawsudoku=square.filter(n=>n!=="")
    return !(new Set(rawsudoku).size<rawsudoku.length)
//DONe if there is a similar number in the same square make the borders of the square red 
}