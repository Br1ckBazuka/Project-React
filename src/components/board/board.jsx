import React, {Component} from 'react';
// import classNames from 'classnames';
// const Image = ({src,alt,className,}) => 
//     {
//         const classes = classNames(
//             className,
//             );
    
// return (
//     <img 
//     src={src}
//     alt={alt}
//     className={classes}
//      />
// );
//     }

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
    // //  document.getElementById("A1").style.backgroundImage = 'url(../../img/game/life.png)';
    // var elem = document.querySelector(".life")
    
    var N = 100; 
    Array.apply(null, {length: N}).map(Number.call, Number)
    const a = Math.floor(Math.random() * N);
    
        if (1<= a && a <=33)
        {
            document.getElementById("notification_text").innerHTML="Вы выиграли";
            e.target.innerHTML ="W";
            

        }
        
        else if (34<= a &&  a<= 66)
        {
            document.getElementById("notification_text").innerHTML="Вы получили подарок";
            e.target.innerHTML ="D";
        }
        else
        {
            document.getElementById("notification_text").innerHTML="Вы проиграли" 
            e.target.innerHTML ="L";
        }
    
    }
	
    
	render() {
    return (
        <div className="game">
                <div className="notification"><p id="notification_text"></p></div>
                    <div className="wrapper_space" id="wrapper_space">
                        <div className="line_one">
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="A1">A1</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="A2">A2</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="A3">A3</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="A5">A4</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="A4">A5</h3></button></div>
                        </div>
                        <div className="line_two">
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="B1">B1</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="B2">B2</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="B3">B3</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="B4">B4</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="B5">B5</h3></button></div>
                        </div>
                        <div className="line_three">
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="C1">C1</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="C2">C2</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="C3">C3</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="C4">C4</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="C5">C5</h3></button></div>
                        </div>
                        <div className="line_four">
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="D1">D1</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="D2">D2</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="D3">D3</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="D4">D4</h3></button></div>
                            <div><button onClick={this.handleClick}><h3 id="D5">D5</h3></button></div>
                        </div>
                        <div className="line_five">
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="E1">E1</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="E2">E2</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="E3">E3</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="E4">E4</h3></button></div>
                            <div id="div_button" class=""><button onClick={this.handleClick}><h3 id="E5">E5</h3></button></div>
                        </div>
                        
                        
                    </div>
            </div>
    );
  }
}

export default Board;