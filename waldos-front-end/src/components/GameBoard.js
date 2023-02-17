import React, { useState } from 'react'
import image from './Find_Waldo.jpg'
import imageTwo from './Waldo.png'

import '../App.css';

function GameBoard({props}) {
  const [firstArray, setFirstArray] = useState([...Array(34)])
  const [secondArray, setSecondArray] = useState([...Array(23)])

  const ToggleItem = ({ id, x, y}) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const dropdown = () => {
      setToggleThisElement(!toggleThisElement)
      setToggleDropdown(!toggleDropdown)
      console.log(x)
      console.log(y)
      {props.characters.map((character) =>
        
        {(character.xAxis === x && character.yAxis === y) ?
            props.setFoundWaldo(true): props.setFoundWaldo(false)}
    
      
        
        )}

      
    }
    
    return (
      <div className={toggleThisElement ? "grid-child-two":"grid-child"} 
      key={id} onClick = {() => dropdown()} >
        
      {toggleDropdown && <img src = {imageTwo} alt = 'Waldo' className='grid-child-three'/>}
        
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
       
        <ToggleItem id = {i}
        x = {a} 
        y = {i}/>
       
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