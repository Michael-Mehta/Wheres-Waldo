
import './App.css';

import GameBoard from './components/GameBoard';
import axios from "axios";
import { useEffect, useState } from 'react';






const API_URL = "http://localhost:3000/api/v1/characters";



function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}




function App() {

  const [characters, setCharacters] = useState([])
  


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
    
     < GameBoard characters = {characters}/>
     
  );
}

export default App;
