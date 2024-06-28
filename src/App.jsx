import { useState } from 'react'
import './App.css'
import Sudoku from './Table/Sudoku'
function App() {
  const [text,setText]=useState("");
  return <div className='flex w-full justify-center items-center h-screen'>
      <Sudoku/>
      <input type="checkbox" onChange={e=>{
        console.log(e.target.checked)
      }}
      onKeyDown={e=>{
        setText(text.concat(e.key))
        console.log(text)
      }}
      />
      {text}
    </div>
}

export default App
