import React, { Component } from 'react';
import FriendCard from './components/Card'
import NavBar from './components/NavBar'
import cards from './cards.json'
import './App.css';
import shuffle from './utils/shuffle'


class App extends Component {
  state = {
    cards: cards,
    score: 0,
    clicked: [],
    highScore: 0
  }

handleIncrement = () => {
  const newScore = this.state.score + 1;
  this.setState({
    score: newScore
  });
  if (newScore >= this.state.highScore) {
    this.setState({ highScore: newScore });
  }
  else if (newScore === 8) {
  
  }
}

reset = () => {
  this.setState({
    clicked: [],
    score: 0
  })
}


handleClick = (id) => {
  let guessed = this.state.clicked.includes(id)
  let cards = shuffle(this.state.cards)
  if (!guessed) {
    let clicked = [ ...this.state.clicked, id ];
    this.handleIncrement();
    this.setState({
      clicked,
      cards
    })
    
  } else {
    this.setState({
      cards
    })
    this.reset();
    }
}



  render() {
    return (
      <div className="App">
        <NavBar 
          score={this.state.score}
          highScore={this.state.highScore}
          />
        <div id='cardsList' >
          {this.state.cards.map(card => (
          <FriendCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
