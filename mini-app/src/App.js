import React, {Component} from 'react';
import './App.css';
import Game from './Games/game'
import NavBar from './NavBar/nav'



class App extends Component {
  state = {
    games: [
      {id: 'factolie1', name: 'Fact or Lie', time: '5', difficulty: 'Hard'},
      {id: 'guessnum1', name: 'Guess the Number', time: '10', difficulty: 'Medium'},
      {id: 'resource1', name: 'Resources', time: 'NA', difficulty: 'Easy'}
    ]

  }

  toggleGameHandler = (event) => {
    console.log("Were got to the toggleGameHandler")
    this.setState({
      games: [
        {id: 'guessnum1', name: 'Guess the Number', time: '10', difficulty: 'Medium'},
        {id: 'factolie1', name: 'Fact or Lie', time: '5', difficulty: 'Hard'},
        {id: 'resource1', name: 'Resources', time: 'NA', difficulty: 'Easy'}
      ],
      otherState: 'some other'
    });
  }
  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return(
    <div className="App">
    <NavBar></NavBar>
      <h1>Welcome to Minigame Extravaganza!!!</h1>
      <p>Here you will have the opportunity to play many games!</p>
      <br></br><br></br>
      <br></br>
       <button 
       style = {style}
       onClick={this.toggleGameHandler}>Next Game</button>
      
      <Game name={this.state.games[0].name} time={this.state.games[0].time} difficulty={this.state.games[0].difficulty}/>
      </div>
  );
}
}

export default App;
