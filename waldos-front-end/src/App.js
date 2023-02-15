
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <h1>Welcome Challenger</h1>
      <p>In order to beat this game you must find 
        all the characters in the picture by clicking on them
        at the end your time will be recorded and you will be placed
        on a leaderboard</p>
      <div>
     < GameBoard />
     </div>
    </div>
  );
}

export default App;
