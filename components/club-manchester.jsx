import React,{Component} from 'react';

class liverpool extends Component{
    render(){
        return(
        <div className ="BlogPost">
          <div className="logo-container">
            <img className="logo-class" src="images/MU.jpg"></img>
          </div>
          <div className="header-container">
            <h1>Manchester United</h1>
            {new Date().toLocaleString()}
          </div>
          <div className="detail-container">
            <p>
              Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. Nicknamed "the Red Devils", the club was founded as Newton Heath LYR Football Club in 1878, changed its name to Manchester United in 1902 and moved to its current stadium, Old Trafford, in 1910.

              Manchester United have won a record 20 League titles, 12 FA Cups, 5 League Cups and a record 21 FA Community Shields. The club has also won three UEFA Champions Leagues, one UEFA Europa League, one UEFA Cup Winners' Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup. In 1998–99, the club became the first in the history of English football to achieve the treble of the Premier League, the FA Cup and the UEFA Champions League.[3] In 2016–17, by winning the UEFA Europa League, they became one of five clubs to have won all three main UEFA club competitions. In addition, they became the only professional English club to have won every ongoing honour available to the first team that is organised by a national or international governing body.

              The 1958 Munich air disaster claimed the lives of eight players. In 1968, under the management of Matt Busby, Manchester United became the first English football club to win the European Cup. Alex Ferguson won 38 trophies as manager, including 13 Premier League titles, 5 FA Cups and 2 UEFA Champions Leagues, between 1986 and 2013,[4][5][6] when he announced his retirement. José Mourinho is the club's current manager, having been appointed on 27 May 2016.
            </p>
          </div>
        </div>
        );
    }
}


export default liverpool
