import React, {Component} from 'react';
import queryString from 'query-string';
class Board extends Component {
    
    
	constructor(props) {
		super(props);
        this.timerActive="";
		this.numberAttempts = 3;
        this.urlClick ="http://wp.ru/wp-json/myapi/v1/game/Mines/";
        this.boxClass =[
            "","","","","","","","","","","","","","","","","","","","","","","","","", 
        ];
        this.state= {
            boxClass: this.boxClass
        }    
		this.handleClick = this.handleClick.bind(this);
	}
   

    handleClick = (e) => 
    {
        
        // function getRandomInt(min, max) {
        //     return Math.floor(Math.random() * (max - min)) + min;
        //   }
            // let user_id = getRandomInt(100000000,200000000)
        
       let user_id = 1;
        let number_cell = e.currentTarget.dataset.id;
        e.currentTarget.setAttribute("disabled", "disabled");

        fetch(this.urlClick,{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
            body: queryString.stringify({user_id:user_id, cell_number:number_cell}) //use the stringify object of the queryString class
        }).then(function (response) {
            return response.json()
          })
          .then((data) => {
            if (data.type_prize === 1) {
                text.innerHTML = data.MESSAGE;
                this.boxClass[number_cell]="win";
                this.numberAttempts--;
                }
            else if (data.type_prize === 2) {
                text.innerHTML = data.MESSAGE;
                this.boxClass[number_cell]="draw";
                }
            else if(data.type_prize === 3){
                text.innerHTML = data.MESSAGE;
                text.innerHTML = "Вы проиграли";
                this.boxClass[number_cell]="fail";
                this.numberAttempts--;
                    }
            else {
                window.location.href = 'http://localhost:3000/#/articles';
            }
            attempts.innerHTML = "Попытки: " + this.numberAttempts;
            this.setState({boxClass:this.boxClass});
          })
         
    console.log(number_cell);
    var attempts = document.getElementById("attempts");
    var text = document.getElementById("notification_text");
    text.innerHTML = "Открывается ячейка подождите несколько секунд ";
    
       
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
                            <div><button data-id="0"  className={this.boxClass[0]} onClick={this.handleClick}></button></div>
                            <div><button data-id="1"  className={this.boxClass[1]} onClick={this.handleClick}></button></div>
                            <div><button data-id="2"  className={this.boxClass[2]} onClick={this.handleClick}></button></div>
                            <div><button data-id="3"  className={this.boxClass[3]} onClick={this.handleClick}></button></div>
                            <div><button data-id="4"  className={this.boxClass[4]} onClick={this.handleClick}></button></div>
                        </div>
                        <div className="line_two">
                            <div><button data-id="5"  className={this.boxClass[5]} onClick={this.handleClick}></button></div>
                            <div><button data-id="6"  className={this.boxClass[6]} onClick={this.handleClick}></button></div>
                            <div><button data-id="7"  className={this.boxClass[7]} onClick={this.handleClick}></button></div>
                            <div><button data-id="8"  className={this.boxClass[8]} onClick={this.handleClick}></button></div>
                            <div><button data-id="9"  className={this.boxClass[9]} onClick={this.handleClick}></button></div>
                        </div>
                        <div className="line_three">
                            <div><button data-id="10" className={this.boxClass[10]} onClick={this.handleClick}></button></div>
                            <div><button data-id="11" className={this.boxClass[11]} onClick={this.handleClick}></button></div>
                            <div><button data-id="12" className={this.boxClass[12]} onClick={this.handleClick}></button></div>
                            <div><button data-id="13" className={this.boxClass[13]} onClick={this.handleClick}></button></div>
                            <div><button data-id="14" className={this.boxClass[14]} onClick={this.handleClick}></button></div>
                        </div>
                        <div className="line_four">
                            <div><button data-id="15" className={this.boxClass[15]} onClick={this.handleClick}></button></div>
                            <div><button data-id="16" className={this.boxClass[16]} onClick={this.handleClick}></button></div>
                            <div><button data-id="17" className={this.boxClass[17]} onClick={this.handleClick}></button></div>
                            <div><button data-id="18" className={this.boxClass[18]} onClick={this.handleClick}></button></div>
                            <div><button data-id="19" className={this.boxClass[19]} onClick={this.handleClick}></button></div>
                        </div>
                        <div className="line_five">
                            <div><button data-id="20" className={this.boxClass[20]} onClick={this.handleClick}></button></div>
                            <div><button data-id="21" className={this.boxClass[21]} onClick={this.handleClick}></button></div>
                            <div><button data-id="22" className={this.boxClass[22]} onClick={this.handleClick}></button></div>
                            <div><button data-id="23" className={this.boxClass[23]} onClick={this.handleClick}></button></div>
                            <div><button data-id="24" className={this.boxClass[24]} onClick={this.handleClick}></button></div>
                        </div>
                        
                        
                    </div>
            </div>
    );
  }
}

export default Board;