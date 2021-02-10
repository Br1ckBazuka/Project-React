import React, {Component} from 'react';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
            
		};
		this.handleClick = this.handleClick.bind(this);
	}
     
    
    
    handleClick = (e) => 
    {
    // //    e.target.innerHTML ="";
    // //    document.getElementById("notification_text").innerHTML="Кнопка нажата"+e.target.innerHTML;
    var N = 100; 
    Array.apply(null, {length: N}).map(Number.call, Number)
    var a = Math.floor(Math.random() * N);
    

        e.target.innerHTML ="" + Math.floor(Math.random() * N);
        if (1<= a & a <=33)
        {
            document.getElementById("notification_text").innerHTML="Вы выиграли"  
        }
        
        else if (34<= a &&  a<= 66)
        {
            document.getElementById("notification_text").innerHTML="Вы получили подарок" 
        }
        else
        {
            (document.getElementById("notification_text").innerHTML="Вы проиграли" )
        }



   }
	
	

	render() {
    return (
        <div className="game">
                <div className="notification"><p id="notification_text"></p></div>
                    <div className="wrapper_space" id="wrapper_space">
                        <div className="line_one">
                            <div><button onClick={this.handleClick}><p id="A1">A1</p></button></div>
                            <div><button onClick={this.handleClick}><p id="A2">A2</p></button></div>
                            <div><button onClick={this.handleClick}><p id="A3">A3</p></button></div>
                            <div><button onClick={this.handleClick}><p id="A5">A4</p></button></div>
                            <div><button onClick={this.handleClick}><p id="A4">A5</p></button></div>
                        </div>
                        <div className="line_two">
                            <div><button onClick={this.handleClick}><p id="B1">B1</p></button></div>
                            <div><button onClick={this.handleClick}><p id="B2">B2</p></button></div>
                            <div><button onClick={this.handleClick}><p id="B3">B3</p></button></div>
                            <div><button onClick={this.handleClick}><p id="B4">B4</p></button></div>
                            <div><button onClick={this.handleClick}><p id="B5">B5</p></button></div>
                        </div>
                        <div className="line_three">
                            <div><button onClick={this.handleClick}><p id="C1">C1</p></button></div>
                            <div><button onClick={this.handleClick}><p id="C2">C2</p></button></div>
                            <div><button onClick={this.handleClick}><p id="C3">C3</p></button></div>
                            <div><button onClick={this.handleClick}><p id="C4">C4</p></button></div>
                            <div><button onClick={this.handleClick}><p id="C5">C5</p></button></div>
                        </div>
                        <div className="line_four">
                            <div><button onClick={this.handleClick}><p id="D1">D1</p></button></div>
                            <div><button onClick={this.handleClick}><p id="D2">D2</p></button></div>
                            <div><button onClick={this.handleClick}><p id="D3">D3</p></button></div>
                            <div><button onClick={this.handleClick}><p id="D4">D4</p></button></div>
                            <div><button onClick={this.handleClick}><p id="D5">D5</p></button></div>
                        </div>
                        <div className="line_five">
                            <div><button onClick={this.handleClick}><p id="E1">E1</p></button></div>
                            <div><button onClick={this.handleClick}><p id="E2">E2</p></button></div>
                            <div><button onClick={this.handleClick}><p id="E3">E3</p></button></div>
                            <div><button onClick={this.handleClick}><p id="E4">E4</p></button></div>
                            <div><button onClick={this.handleClick}><p id="E5">E5</p></button></div>
                        </div>
                    </div>
            </div>
    );
  }
}

export default Board;