import { useState } from 'react'
import Sudoku from './Table/Sudoku'
import tstore from './Redux/Tables/TablesStore';
function App() {
  return <div className='flex w-full justify-center items-center h-screen'>
      <Sudoku/>
    </div>
}

export default App
