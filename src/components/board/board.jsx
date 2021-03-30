import React, {Component} from 'react';
import queryString from 'query-string';
class Board extends Component {
    
    
	constructor(props) {
		super(props);
        this.timerActive="";
		this.numberAttempts = 3;
        this.urlClick ="http://wp.ru/wp-json/myapi/v1/game/Mines/";
        this.boxClass =[
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
        ];
		this.state= {
            boxClass: this.boxClass
        }    
		this.handleClick = this.handleClick.bind(this);
	}
   

    handleClick = (e) => 
    {
        

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
          
       let user_id = getRandomInt(100000000,200000000)
       let number_cell = e.target.dataset.id;
        

        fetch(this.urlClick,{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
            body: queryString.stringify({user_id:user_id, cell_number:number_cell}) //use the stringify object of the queryString class
        }).then(function (response) {
            return response.json()
          })
          .then(function (data) {
            console.log('data', data)
          })
        
        // then((responseData) => { 
        //     //Тело функции
        //     //В этой функции мы получаем результат действия(проиграл, выиграл, ничья) и относительно этого результата выводим пользователю информацию.
        //         //Тут будет подобная реализация setTimeout, но условия уже будут попроще, так как результат приходит в виде числа: 1, 2, 3
        //     console.warn(responseData); return responseData; 
        //     //Конец тела функции
        //     })
            

        
    console.log(e.target.dataset.id);
    var attempts = document.getElementById("attempts");
    var text = document.getElementById("notification_text");
    text.innerHTML = "Открывается ячейка подождите несколько секунд ";
    
    console.log(this.timerActive)

    if (this.numberAttempts <= 0)
    {
        text.innerHTML = "Жизни закончились";
        return false;
        
        // text.innerHTML = "Вы выиграли попробуйте еще раз";
        //    this.boxClass[keyId]="win";

        // text.innerHTML = "Вы получите случайный подарок";
        //        this.boxClass[keyId]="draw"
        //        this.numberAttempts--;


        // text.innerHTML = "Вы проиграли";
        // this.boxClass[keyId]="fail"
        // this.numberAttempts--;
     }
     attempts.innerHTML = "Попытки: " + this.numberAttempts;
            this.setState({boxClass:this.boxClass})
       
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
                            <div><button data-id="0" id="btn"  className={this.boxClass[0]} onClick={this.handleClick}><h3>A1</h3></button></div>
                            <div><button data-id="1" id="btn"  className={this.boxClass[1]} onClick={this.handleClick}><h3>A2</h3></button></div>
                            <div><button data-id="2" id="btn"  className={this.boxClass[2]} onClick={this.handleClick}><h3>A3</h3></button></div>
                            <div><button data-id="3" id="btn"  className={this.boxClass[3]} onClick={this.handleClick}><h3>A4</h3></button></div>
                            <div><button data-id="4" id="btn"  className={this.boxClass[4]} onClick={this.handleClick}><h3>A5</h3></button></div>
                        </div>
                        <div className="line_two">
                            <div><button data-id="5" id="btn"  className={this.boxClass[5]} onClick={this.handleClick}><h3>B1</h3></button></div>
                            <div><button data-id="6" id="btn"  className={this.boxClass[6]} onClick={this.handleClick}><h3>B2</h3></button></div>
                            <div><button data-id="7" id="btn"  className={this.boxClass[7]} onClick={this.handleClick}><h3>B3</h3></button></div>
                            <div><button data-id="8" id="btn"  className={this.boxClass[8]} onClick={this.handleClick}><h3>B4</h3></button></div>
                            <div><button data-id="9" id="btn"  className={this.boxClass[9]} onClick={this.handleClick}><h3>B5</h3></button></div>
                        </div>
                        <div className="line_three">
                            <div><button data-id="10" id="btn" className={this.boxClass[10]} onClick={this.handleClick}><h3>C1</h3></button></div>
                            <div><button data-id="11" id="btn" className={this.boxClass[11]} onClick={this.handleClick}><h3>C2</h3></button></div>
                            <div><button data-id="12" id="btn" className={this.boxClass[12]} onClick={this.handleClick}><h3>C3</h3></button></div>
                            <div><button data-id="13" id="btn" className={this.boxClass[13]} onClick={this.handleClick}><h3>C4</h3></button></div>
                            <div><button data-id="14" id="btn" className={this.boxClass[14]} onClick={this.handleClick}><h3>C5</h3></button></div>
                        </div>
                        <div className="line_four">
                            <div><button data-id="15" id="btn" className={this.boxClass[15]} onClick={this.handleClick}><h3>D1</h3></button></div>
                            <div><button data-id="16" id="btn" className={this.boxClass[16]} onClick={this.handleClick}><h3>D2</h3></button></div>
                            <div><button data-id="17" id="btn" className={this.boxClass[17]} onClick={this.handleClick}><h3>D3</h3></button></div>
                            <div><button data-id="18" id="btn" className={this.boxClass[18]} onClick={this.handleClick}><h3>D4</h3></button></div>
                            <div><button data-id="19" id="btn" className={this.boxClass[19]} onClick={this.handleClick}><h3>D5</h3></button></div>
                        </div>
                        <div className="line_five">
                            <div><button data-id="20" id="btn" className={this.boxClass[20]} onClick={this.handleClick}><h3>E1</h3></button></div>
                            <div><button data-id="21" id="btn" className={this.boxClass[21]} onClick={this.handleClick}><h3>E2</h3></button></div>
                            <div><button data-id="22" id="btn" className={this.boxClass[22]} onClick={this.handleClick}><h3>E3</h3></button></div>
                            <div><button data-id="23" id="btn" className={this.boxClass[23]} onClick={this.handleClick}><h3>E4</h3></button></div>
                            <div><button data-id="24" id="btn" className={this.boxClass[24]} onClick={this.handleClick}><h3>E5</h3></button></div>
                        </div>
                        
                        
                    </div>
            </div>
    );
  }
}

export default Board;