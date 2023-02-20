import React, { useState, useEffect } from 'react'
import image from './Find_Waldo_Two.png'
import imageTwo from './Waldo.png'
import imageThree from './Waldo-Two.jpg'
import imageFour from './kevin-hart-two.png'
import imageFive from './allMight-two.png'
import checkmark from './checkmark.jpg'
import '../App.css';

function GameBoard({characters}) {

  const [startGame, setStartGame] = useState(false)
  const [firstArray, setFirstArray] = useState([...Array(34)])
  const [secondArray, setSecondArray] = useState([...Array(23)])
  const [foundWaldo, setFoundWaldo] = useState(false)
  const [foundKevinHart, setFoundKevinHart] = useState(false)
  const [foundAllMight, setFoundAllMight] = useState(false)
  const [foundEverything, setFoundEverything] = useState(false)
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false);


  

const begin = () => {
  setTimerOn(true)
  setStartGame(true)
}

  


  const ToggleItem = ({ id, x, y}) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [found, setFound] = useState(false)
    
    
   const markWaldo = () => {
    setFound(true)
    setFoundWaldo(true)
    
    
    
    {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}
    console.log(foundWaldo)
   
   }

   const markKevin = () => {
    setFound(true)
    setFoundKevinHart(true)
    
    
    
    {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}
    console.log(foundWaldo)
   
   }

   const markMight = () => {
    setFound(true)
    setFoundAllMight(true)
    
    
    
    {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}
    console.log(foundWaldo)
    
   }
    const dropdown = () => {
      setToggleThisElement(!toggleThisElement)
      setToggleDropdown(!toggleDropdown)
      
    
      {characters.map((character) =>
        {
         
            {(x === 29 && y === 18) &&
            markWaldo()}

            {(x === 29 && y === 19) &&
            markWaldo()}

           {(x === 7 && y === 6) &&
            markKevin()}

          {(x === 2 && y === 8) &&
            markMight()}


            {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}
          

          }
    
      
          
        
        )}



        
     
      
    }
    
    return (
      <div>

{found && <img src={checkmark} alt = 'Checkmark' className = 'grid-child-four' />}

     
      <div className={toggleThisElement ? "grid-child-two":"grid-child"} 
      key={id} onClick = {() => dropdown()} >
        
      {toggleDropdown && <img src = {imageTwo} alt = 'Waldo' className='grid-child-three'/>}
      
      
      
      
      </div>
      </div>
    );
  };



  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);


  

  return (
    <div className="App">
      {foundEverything ? (<h1>Winner!!!!!!!!</h1>) : (<h1>Welcome Challenger</h1>)
      }
      {foundEverything ? (<p>Please refresh the page to play again</p>) : (<p>In order to beat this game you must find 
        all the characters in the picture by clicking on them
        at the end your time will be recorded and you will be placed
        on a leaderboard</p>
        )}
       {!foundWaldo && <img src = {imageThree} alt = "Waldo" className='main-image'/>}
        {!foundKevinHart && <img src = {imageFour} alt = "Kevin Hart"  className='main-image'/>}
        {!foundAllMight && <img src = {imageFive} alt = "All Might"  className='main-image'/>}
        {!foundEverything && <p>Double click on a found character to mark them then their picture will dissapear above</p>}
        

        <h2>Stopwatch</h2>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => begin()}>Start Game</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        
      </div>
      <div>
    <div >
        
         {startGame && <img src = {image} alt = "picture"  className='picture'/>}
         
         
        {startGame && <div className='main-grid'>
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
  
</div>}
    </div>
    </div>
    </div>
  );
}

export default GameBoard