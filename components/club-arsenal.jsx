import React,{Component} from 'react';

class liverpool extends Component{
    render(){
        return(
        <div className ="BlogPost">
          <div className="logo-container">
            <img className="logo-class" src="images/arsenal.jpg"></img>
          </div>
          <div className="header-container">
            <h1>Arsenal</h1>
            {new Date().toLocaleString()}
          </div>
          <div className="detail-container">
            <p>
            Arsenal Football Club is a professional football club based in Highbury, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, a record 13 FA Cups, two League Cups, the League Centenary Trophy, 15 FA Community Shields, one UEFA Cup Winners' Cup and one Inter-Cities Fairs Cup. It has won the second-most top flight matches in English football history, and is the only English club to go a 38-match league season unbeaten.
            Arsenal was the first club from the South of England to join The Football League, in 1893, and they reached the First Division in 1904. Relegated only once, in 1913, they continue the longest streak in the top division. In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In 1970–71, they won their first League and FA Cup Double. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position.
            Herbert Chapman won Arsenal's first national trophies, but died prematurely. He helped introduce the WM formation, floodlights, and shirt numbers, and added the white sleeves and brighter red to Arsenal's kit. Arsène Wenger has been the longest-serving manager and has won the most trophies. He has won a record 7 FA Cups, and his teams set English records for the longest win streak and longest unbeaten run.

            In 1886, Woolwich munitions workers founded the club as Dial Square. In 1913, the club crossed the city to Arsenal Stadium in Highbury, making them close neighbours of Tottenham Hotspur, and creating the North London derby. In 2006, they moved to the nearby Emirates Stadium. Arsenal earned €435.5m in 2014–15, with the Emirates Stadium generating the highest revenue in world football. Based on social media activity from 2014–15, Arsenal's fanbase is the fifth largest in the world. In 2016, Forbes estimated the club was the second most valuable in England, worth $2.0 billion.
            </p>
          </div>
        </div>
        );
    }
}


export default liverpool
