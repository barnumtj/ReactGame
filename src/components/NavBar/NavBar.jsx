import React from 'react';
import "./navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar">
                <span id='navText' className="navbar-text">
                    React Click Game
                </span>
                <p>Score: {this.props.score}</p>
                <p>High Score: {this.props.highScore}</p>
            </nav>
            <p id='directions'>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        )
    }
}

export default NavBar;