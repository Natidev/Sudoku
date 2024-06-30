export const squareIsValid=(square)=>{
    console.log(square)
    return !(new Set(square).size<square.length)
//DONe if there is a similar number in the same square make the borders of the square red 
}