import React, {Component} from 'react';
import TodoList from './components/Todo/Todolist';
import TabbarSandbox from './components/tabbar/Sandbox';
import './index.css';

class Article extends Component {
    render() {
        return (
            
            <div>
                   <div className="Article_main_text">
                    <TodoList/>
                    </div>,

                    <div className="Content_article">
                    <TabbarSandbox/>
                    </div>
            </div>
        );
    }
}

export default Article;

  