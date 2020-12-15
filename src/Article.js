import React, {Component} from 'react';
import TodoList from './components/Todo/Todolist';
import {NavLink}  from 'react-router-dom';
import TabbarSandbox from './components/tabbar/Sandbox';
import './index.css';

class Article extends Component {
    render() {
        return (
            
            <div>
                   <div className="Article_main_text">
                    <TodoList/>
                    <ul className="articles_link">
                           <li>
                              <NavLink to="article1">Статья #1</NavLink>
                           </li>
                           <li>
                              <NavLink to="article2">Статья #2</NavLink>
                           </li>
                           <li>
                              <NavLink to="article3">Статья #3</NavLink>
                           </li>
                        </ul>
                    </div>,

                    <div className="Content_article">
                    <TabbarSandbox/>
                    </div>
            </div>
        );
    }
}

export default Article;

  