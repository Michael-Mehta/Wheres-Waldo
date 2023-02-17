
import './App.css';
import imageTwo from './components/Waldo-Two.jpg'
import GameBoard from './components/GameBoard';
import axios from "axios";
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/characters";



function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}




function App() {

  const [characters, setCharacters] = useState([])
const [foundWaldo, setFoundWaldo] = useState(false)

useEffect(() => {

  let mounted = true;

  getAPIData().then((person) => {

    if(mounted)
    {
      setCharacters(person)
    }

  });


  return () => (mounted = false);


}, []);

  return (
    <div className="App">
      {foundWaldo ? <h1>Winner!!!!!!!!</h1> : <h1>Welcome Challenger</h1>
      }
      <p>In order to beat this game you must find 
        all the characters in the picture by clicking on them
        at the end your time will be recorded and you will be placed
        on a leaderboard</p>
        <img src = {imageTwo} alt = "Waldo" className='main-image'/>
      <div>
     < GameBoard
      characters = {characters}
      foundWaldo = {foundWaldo}
      setFoundWaldo = {setFoundWaldo}/>
     </div>
    </div>
  );
}

export default App;
