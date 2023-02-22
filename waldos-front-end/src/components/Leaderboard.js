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
        <h1>Past Winners</h1>
        <div >
            
              {leaderboard.map(leader=> <div className='leaders'>
                <p>{leader.name}  </p>
                <p>{leader.time} seconds</p>
              
              </div>)}

        </div>
    </div>
  )
}

export default Leaderboard