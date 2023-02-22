import React, { useState, useEffect } from 'react'
import Leaderboard from './Leaderboard'
import image from './Find_Waldo_Two.png'
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
  const [foundKevinHart, setFoundKevinHart] = useState(false)
  const [foundAllMight, setFoundAllMight] = useState(false)
  const [foundEverything, setFoundEverything] = useState(false)
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [name, setName] = useState('')
  const [createLeader, setCreateLeader] = useState(false)

  



  


  const ToggleItem = ({ id, x, y}) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [found, setFound] = useState(false)
    
    
   const markWaldo = () => {
    setFound(true)
    setFoundWaldo(true)
    
    
    
    {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}

   
   }

   const markKevin = () => {
    setFound(true)
    setFoundKevinHart(true)
    
    
    
    {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}

   
   }

   const markMight = () => {
    setFound(true)
    setFoundAllMight(true)
    
    
    
    {(foundWaldo && foundKevinHart && foundAllMight) && setFoundEverything(true)}

    
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
            {(foundWaldo && foundKevinHart && foundAllMight) && setTimerOn(false)}
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
    setTimerOn(true)
  }, [])


 


  


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


  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };


  const createWinner = (name, time) => {

    const data = {
        name,
        time,
    }

    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)

    }).then((response) => response.json())
    .then((data) => {
        console.log(data)
      
    })
    .catch((error) => {
        console.log('Error:', error)
    })
}
 
  

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
        
        
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        
      </div>
      <div>
    <div >
        
         <img src = {image} alt = "picture"  className='picture'/>
         
         
        <div className='main-grid'>
{
    firstArray.map((e, a) => (
      
       <div key = {a}>
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

{!timerOn && foundEverything && <div>
    <label htmlFor="nameInput"> Name: </label>

<input onChange = {handleNameChange} value = {name} type = "text" id = "emailInput"/>

<button onClick={() =>  createWinner(name, time)}>Submit</button>
</div>}
    { (<Leaderboard />)}
    </div>
  );
}

export default GameBoard