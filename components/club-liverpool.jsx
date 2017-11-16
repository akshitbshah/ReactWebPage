import React,{Component} from 'react';

class liverpool extends Component{
    render(){
        return(
            <div className ="BlogPost">
              <div className="logo-container">
                <img className="logo-class" src="images/liv.jpg"></img>
              </div>
              <div className="header-container">
                <h1>Liverpool</h1>
                {new Date().toLocaleString()}
              </div>
              <div className="detail-container">
                <p>
                Liverpool Football Club is a Premier League football club based in Liverpool, currently managed by Jürgen Klopp. Liverpool F.C. is one of the most successful clubs in England and has won more European trophies than any other English team with five European Cups, three UEFA Cups, and three UEFA Super Cups. The club has also won eighteen League titles, seven FA Cups and a record eight League Cups. In spite of their successful history, Liverpool are yet to win a Premier League title since its inception in 1992.

            Liverpool was founded in 1892 and joined the Football League the following year. The club has played at Anfield since its formation. The most successful period in Liverpool's history was the 1970s and '80s when Bill Shankly and Bob Paisley led the club to eleven league titles and seven European trophies.

            The club's supporters have been involved in two major tragedies. The first was the Heysel Stadium disaster in 1985, in which charging Liverpool fans caused a wall to collapse, killing 39 Juventus supporters and resulting in English clubs being banned from European competitions for five years. In the 1989 Hillsborough disaster, 96 Liverpool supporters lost their lives in a crush against perimeter fencing. None of these tragedies were the fault of Liverpool supporters.

            Liverpool has long-standing rivalries with neighbours Everton and with Manchester United. The team changed from red shirts and white shorts to an all-red home strip in 1964. The club's anthem is "You'll Never Walk Alone".
                </p>
              </div>
            </div>
        );
    }
}


export default liverpool
