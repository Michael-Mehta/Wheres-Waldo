import React, { useState } from 'react'
import image from './Find_Waldo.jpg'
import '../App.css';

function GameBoard() {
  const [firstArray, setFirstArray] = useState([...Array(34)])
  const [secondArray, setSecondArray] = useState([...Array(23)])

  const ToggleItem = ({ id }) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const dropdown = () => {
      setToggleThisElement(!toggleThisElement)
      setToggleDropdown(!toggleDropdown)

    }
    
    return (
      <div className={toggleThisElement ? "grid-child-two":"grid-child"} 
      key={id} onClick = {() => dropdown()} >
        
      {toggleDropdown && <div className='grid-child-three'></div>}
        
      </div>
    );
  };

  

  return (
    <div >
        
         <img src = {image} alt = "picture"  className='picture'/>
         

         
         <div className='main-grid'>
{
    firstArray.map((e, a) => (
      
        <div>
          {
      secondArray.map((e, i) => (
       
        <ToggleItem id = {i} />
       
      ))
}
      </div>
      

    ))
}
  
</div>
    </div>
  );
}

export default GameBoard