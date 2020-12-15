import React, {Component} from 'react';
import Snake from 'react-simple-snake'
import './index.css';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <Snake/>
            </div>
        );
    }
}

export default Game;