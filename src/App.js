import React from 'react';
import Dropdown from './Components/Dropdown';
import './style.css';
import Particles from 'react-particles-js';
import CardContent from './Components/CardUi';
import { Container, Row, Col, Card } from 'reactstrap';
import {CSSTransition} from "react-transition-group"
import CardDeck from './Components/CardDeck';
import * as myImages from './constants/imges';


const particleOptions = {
  particles:{
    number:{
      value: 150,
      density:{
        enable: true,
        value_area: 1000
      }
    }
  }

}
let time = 0;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      epochTime : 0,
      newMonth: 'January',
      newday: '3',
      appearHome : true,
      visible : false
     
    };
    this.epoch = this.epoch.bind(this);
  };

  epoch(month, day){
     time = ((new Date(month + day + ', 2019')).getTime());
     console.log(time);
     this.setState({newMonth : month, newday: day, epochTime: time});
   }
  
  
  render(){

  return (
    
  <div >
    <div id="topBorder">
      <h1 className="msml" >Working Build</h1>
      
        <Dropdown Etime={(Month, Day) => this.epoch(Month, Day)} />
        <div className= "submit">
        <button className= "button3" onClick={() => {this.setState({visible: true})}}> Submit </button>
        </div>

        {this.state.visible ? <CSSTransition in={this.state.appearHome} appear={true} timeout={2000} classNames="fade" >
           <p className="whatBirth" style={{ color: "White" }}> {this.state.newMonth},{this.state.newday} </p> 
        </CSSTransition> : null}

        <Particles className="particles" params={particleOptions} />

        {this.state.visible ? <CSSTransition in={this.state.appearHome} appear={true} timeout={2000} classNames="fade" >
          <Container className="cardContainer" >
            <Row className="carRow">
              <CardContent />
            </Row>
          </Container>
        </CSSTransition>: null}

    </div>


  </div>
     
  
    );
  }
}

export default App;
