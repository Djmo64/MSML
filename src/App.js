import React from 'react';
import Dropdown from './Components/Dropdown';
import './style.css';
import Particles from 'react-particles-js';
import CardContent from './Components/CardUi';
import { Container, Row, Col } from 'reactstrap';
import {CSSTransition} from "react-transition-group"


const particleOptions = {
  particles:{
    number:{
      value: 150,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }

}
let time = 0;
// var newMonth;
// var newDay;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      epochTime : 0,
      newMonth: 'January',
      newday: '1',
      appearHome : true
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
      <h1 className="msml" >This is a Test</h1>
      
        <Dropdown Etime={(Month, Day) => this.epoch(Month, Day)} />

        <CSSTransition in={this.state.appearHome} appear={true} timeout={2000} classNames="fade" >
          <p className="whatBirth" style={{ color: "white" }}> {this.state.newMonth},{this.state.newday} </p>
        </CSSTransition>

        <Particles className="particles" params={particleOptions} />

        <CSSTransition in={this.state.appearHome} appear={true} timeout={2000} classNames="fade" >
          <Container className="cardContainer" >
            <Row className="carRow">
              <Col><CardContent /></Col>
              <Col><CardContent /></Col>
              <Col><CardContent /></Col>
            </Row>
          </Container>
        </CSSTransition>

    </div>


  </div>
     
  
    );
  }
}

export default App;
