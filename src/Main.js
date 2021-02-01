import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Home from './Home';
import Game from './Game';
import Tests from './Tests';
import Articles from './Articles';
import ArticleComponent from "./articlecomponent";
import './index.css';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>React-project</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Главная</NavLink></li>
                        <li><NavLink to="/game">Игра</NavLink></li>
                        <li><NavLink exact to="/articles">Статьи</NavLink></li> 
                        <li><NavLink to="/tests">Тесты</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/game" component={Game} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/tests" component={Tests} />
                        <Route path="/articlecomponent/:id" component={ArticleComponent} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
