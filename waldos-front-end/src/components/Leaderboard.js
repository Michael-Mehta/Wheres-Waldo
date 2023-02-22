import React, { useEffect, useState } from 'react'

function Leaderboard() {

   
    
    const[leaderboard, setLeaderBoard] = useState([])
    

    




const getWinners = () => {

    
    fetch('http://localhost:3000/api/v1/users')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        setLeaderBoard(data)
    })
    .catch((error) => {
        console.log('Error:', error)
    })
}

useEffect(() => {

    let mounted = true;
  
  
   getWinners()
  
  
    return () => (mounted = false);
  
  
  }, []);
  




  return (
    <div>
        <h1>Past winners and their times</h1>
        <div >
            
              {leaderboard.map(leader=> <div className='leaders'>
                <div>
                <p>{leader.name}  </p>
                </div>
                <div className = 'leaderboard'>
        <p>{("0" + Math.floor((leader.time / 60000) % 60)).slice(-2)}:</p>
        <p>{("0" + Math.floor((leader.time / 1000) % 60)).slice(-2)}:</p>
        <p>{("0" + ((leader.time / 10) % 100)).slice(-2)}</p>
               </div>
              
              </div>)}

        </div>
    </div>
  )
}

export default Leaderboard