
import { useState } from 'react'
import './App.css'
import { Board } from './components/Board'
import { Square } from './components/Square'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))


  return (
    <div className="App">

      <div className="container">
        <h1>Tic-Tac-Toe by Eva</h1>
        <div className="play-area">
          {board.map((block, i) => (
            <div className={block === 'X' || block === 'O'
              ? "block occupied" : "block"
            }></div>
          ))}
        </div>


        <div className='reset'>
          <h2 className='winner'></h2>
          <button>RESET</button>
        </div>


      </div >
    </div>
  )
}

export default App
