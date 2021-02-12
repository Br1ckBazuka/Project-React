import React, {Component} from 'react';

class Board extends Component {
    
    
	constructor(props) {
		super(props);
		this.numberAttempts = 3;
        this.boxClass ={
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "", 
          "",
          "",
          "",
          "",
          "", 
          "",
          "",
          "",
          "",
          "", 
          "",
          "",
          "",
          "",
          "", 
        };
		
		this.handleClick = this.handleClick.bind(this);
	}
    

   handleClick = (e) => 
    {

    // //    e.target.innerHTML ="";
    // //    document.getElementById("notification_text").innerHTML="Кнопка нажата"+e.target.innerHTML;
    // //  document.getElementById("A1").style.backgroundImage = 'url(../../img/game/life.png)';
   
    
    var N = 100; 
    Array.apply(null, {length: N}).map(Number.call, Number)
    const a = Math.floor(Math.random() * N);
    var delay = 5000;
    var attempts = document.getElementById("attempts");
    var text = document.getElementById("notification_text");
    text.innerHTML = "Открывается ячейка подождите " + delay/1000 + " секунд "; 
    if (this.numberAttempts === 0)
    {
        text.innerHTML = "Жизни закончились";
        return false;
     }
        setTimeout(() => {
            if(1<= a && a <=33){
               text.innerHTML = "Вы выиграли попробуйте еще раз";
               e.target.innerHTML ="W"
            }
            else if(34<= a &&  a<= 66){
               text.innerHTML = "Вы получите случайный подарок";
               e.target.innerHTML ="D"
               this.numberAttempts--;
            }
            else{
               text.innerHTML = "Вы проиграли";
               e.target.innerHTML ="L"
               this.numberAttempts--;
            }
            attempts.innerHTML = "Попытки: " + this.numberAttempts;
            

         }, delay);
    
        
 }   
	render() {
    return (
        <div className="game">
                <div className="notification">
                   
                    <p id="notification_text">Выберите ячейку</p>
                    
                   
                <p id="attempts">Попытки: {this.numberAttempts}</p>
                </div>
                    <div className="wrapper_space" id="wrapper_space">
                        <div className="line_one">
                            <div id="div_button"><button data-id="0"  className={this.boxClass[0]}onClick={this.handleClick}><h3 >A1</h3></button></div>
                            <div id="div_button"><button data-id="1"  className={this.boxClass[1]}onClick={this.handleClick}><h3 >A2</h3></button></div>
                            <div id="div_button"><button data-id="2"  className={this.boxClass[2]}onClick={this.handleClick}><h3 >A3</h3></button></div>
                            <div id="div_button"><button data-id="3"  className={this.boxClass[3]}onClick={this.handleClick}><h3 >A4</h3></button></div>
                            <div id="div_button"><button data-id="4"  className={this.boxClass[4]}onClick={this.handleClick}><h3 >A5</h3></button></div>
                        </div>
                        <div className="line_two">
                            <div id="div_button"><button data-id="5"  className={this.boxClass[5]}onClick={this.handleClick}><h3 >B1</h3></button></div>
                            <div id="div_button"><button data-id="6"  className={this.boxClass[6]}onClick={this.handleClick}><h3 >B2</h3></button></div>
                            <div id="div_button"><button data-id="7"  className={this.boxClass[7]}onClick={this.handleClick}><h3 >B3</h3></button></div>
                            <div id="div_button"><button data-id="8"  className={this.boxClass[8]}onClick={this.handleClick}><h3 >B4</h3></button></div>
                            <div id="div_button"><button data-id="9" className={this.boxClass[9]} onClick={this.handleClick}><h3 >B5</h3></button></div>
                        </div>
                        <div className="line_three">
                            <div id="div_button"><button data-id="10" className={this.boxClass[10]} onClick={this.handleClick}><h3 >C1</h3></button></div>
                            <div id="div_button"><button data-id="11" className={this.boxClass[11]} onClick={this.handleClick}><h3 >C2</h3></button></div>
                            <div id="div_button"><button data-id="12" className={this.boxClass[12]} onClick={this.handleClick}><h3 >C3</h3></button></div>
                            <div id="div_button"><button data-id="13" className={this.boxClass[13]} onClick={this.handleClick}><h3 >C4</h3></button></div>
                            <div id="div_button"><button data-id="14" className={this.boxClass[14]} onClick={this.handleClick}><h3 >C5</h3></button></div>
                        </div>
                        <div className="line_four">
                            <div id="div_button"><button data-id="15" className={this.boxClass[15]} onClick={this.handleClick}><h3 >D1</h3></button></div>
                            <div id="div_button"><button data-id="16" className={this.boxClass[16]} onClick={this.handleClick}><h3 >D2</h3></button></div>
                            <div id="div_button"><button data-id="17" className={this.boxClass[17]} onClick={this.handleClick}><h3 >D3</h3></button></div>
                            <div id="div_button"><button data-id="18" className={this.boxClass[18]} onClick={this.handleClick}><h3 >D4</h3></button></div>
                            <div id="div_button"><button data-id="19" className={this.boxClass[19]} onClick={this.handleClick}><h3 >D5</h3></button></div>
                        </div>
                        <div className="line_five">
                            <div id="div_button"><button data-id="20" className={this.boxClass[20]} onClick={this.handleClick}><h3 >E1</h3></button></div>
                            <div id="div_button"><button data-id="21" className={this.boxClass[21]} onClick={this.handleClick}><h3 >E2</h3></button></div>
                            <div id="div_button"><button data-id="22" className={this.boxClass[22]} onClick={this.handleClick}><h3 >E3</h3></button></div>
                            <div id="div_button"><button data-id="23" className={this.boxClass[23]} onClick={this.handleClick}><h3 >E4</h3></button></div>
                            <div id="div_button"><button data-id="24" className={this.boxClass[24]} onClick={this.handleClick}><h3 >E5</h3></button></div>
                        </div>
                        
                        
                    </div>
            </div>
    );
  }
}

export default Board;