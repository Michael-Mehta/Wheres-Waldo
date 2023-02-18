import React, { useState } from 'react'
import image from './Find_Waldo.jpg'
import imageTwo from './Waldo.png'
import imageThree from './Waldo-Two.jpg'
import imageFour from './kevin-hart-two.png'
import imageFive from './allMight-two.png'
import checkmark from './checkmark.jpg'
import '../App.css';

function GameBoard({characters}) {


  const [firstArray, setFirstArray] = useState([...Array(34)])
  const [secondArray, setSecondArray] = useState([...Array(23)])
  const [foundWaldo, setFoundWaldo] = useState(false)
 



  



  


  const ToggleItem = ({ id, x, y}) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [found, setFound] = useState(false)
    
    
   const mark = () => {
    setFound(true)
    setFoundWaldo(true)
   }
    const dropdown = () => {
      setToggleThisElement(!toggleThisElement)
      setToggleDropdown(!toggleDropdown)
      
    
      {characters.map((character) =>
        {
         
            {(character.xAxis === x && character.yAxis === y) &&
            mark()}
  


            
            console.log(x)
            console.log(y)
            console.log(character.xAxis)
            console.log(character.yAxis)
         
        
          }
    
      
        
        )}



        
     console.log(x)
     console.log(y)
      
    }
    
    return (
      <div>

{found && <img src={checkmark} alt = 'Checkmark' className = 'grid-child-four' />}
{(x === 7 && y === 6) && <img src = {imageFour} alt = 'Kevin Hart' className='grid-child-five' />}
{(x === 2 && y === 8) && <img src = {imageFive} alt = 'All Might' className='grid-child-five' />}
      <div className={toggleThisElement ? "grid-child-two":"grid-child"} 
      key={id} onClick = {() => dropdown()} >
        
      {toggleDropdown && <img src = {imageTwo} alt = 'Waldo' className='grid-child-three'/>}
      
      
      
      
      </div>
      </div>
    );
  };

  

  return (
    <div className="App">
      {foundWaldo ? (<h1>Winner!!!!!!!!</h1>) : (<h1>Welcome Challenger</h1>)
      }
      {foundWaldo ? (<p>Please refresh the page to play again</p>) : (<p>In order to beat this game you must find 
        all the characters in the picture by clicking on them
        at the end your time will be recorded and you will be placed
        on a leaderboard</p>
        )}
        {!foundWaldo && <p>Double click on a found character to mark them</p>}
        <img src = {imageThree} alt = "Waldo" className='main-image'/>
        <img src = {imageFour} alt = "Kevin Hart"  className='main-image'/>
        <img src = {imageFive} alt = "All Might"  className='main-image'/>
      <div>
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
    </div>
    </div>
  );
}

export default GameBoard