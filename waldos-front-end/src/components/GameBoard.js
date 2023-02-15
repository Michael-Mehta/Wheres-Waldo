import React, { useState } from 'react'
import image from './Find_Waldo.jpg'
import '../App.css';

function GameBoard() {
  const [firstArray, setFirstArray] = useState([...Array(34)])
  const [secondArray, setSecondArray] = useState([...Array(23)])

  const ToggleItem = ({ id }) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    return (
      <div className={toggleThisElement ? "grid-child-two":"grid-child"} 
      key={id} onClick = {() => setToggleThisElement(!toggleThisElement)} >
        
  
        
      </div>
    );
  };


  return (
    <div className='main'>
        <div className='picture'>
         <img src = {image} alt = "picture" />
        </div>
        
    </div>
  )
}

export default GameBoard