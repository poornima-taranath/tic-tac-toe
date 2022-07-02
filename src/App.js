import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div>
      <div className='font-poppins font-bold text-blue-800 text-center m-10 animate-bounce transition-colors'>Welcome to tic-tac-toe</div>
      <Board/>
    </div>
  );
}

export default App;
