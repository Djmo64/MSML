import React from 'react';
import '../style.css';
import MonthList from './Lists/MonthList';
import Daylist from './Lists/Daylist';
import {CSSTransition} from "react-transition-group";









class Dropdown extends React.Component {

  update(value) {

    this.setState({
      name: value,
      month: value
    });// console.log(this.state.name)
  }
  update2(value) {

    this.setState({
      number: value,
      day: value
    }); //console.log(this.state.number)
  }
  constructor(props) {
    super(props);
    
    this.state = {
      displayMenu: false,
      displayMenu2: false,
      name: 'January',
      number: 1,
      change1: false,
      change2: false,
      appearHome: true,
      month: 'Month',
      day: 'Day' 

    };
    this.update2 = this.update2.bind(this)
    this.update = this.update.bind(this)
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.showDropdownMenu2 = this.showDropdownMenu2.bind(this);
    this.hideDropdownMenu2 = this.hideDropdownMenu2.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true, change1 : true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  showDropdownMenu2(event) {
    event.preventDefault();
    this.setState({ displayMenu2: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu2);
    });
  }

  hideDropdownMenu2() {
    this.setState({ displayMenu2: false, change2: true }, () => {
      document.removeEventListener('click', this.hideDropdownMenu2);
    });

  }




  render() {
    
    
    return (
      
      
        <div id="tabs" style={{ display: "flex", justifyContent: "center" }}>
          

          <div className="dropdown" style={{ width: "200px", padding: "5px", border: "2px" }} >
            <div className="button" onClick={this.showDropdownMenu}> {this.state.month} </div>
            
            {this.state.displayMenu ? (
              <CSSTransition in={this.state.appearHome} appear={true} timeout={2000} classNames="fade2" >
              <ul>
                <MonthList updateState={(value) => this.update(value)}  />
              </ul></CSSTransition> ) : (null)
            }

          </div>


          <div className="dropdown2" style={{ width: "200px", padding: "5px", border: "2px" }} >
            <div className="button2" onClick={this.showDropdownMenu2}> {this.state.day} </div>
            {this.state.displayMenu2 ? (
               <CSSTransition in={this.state.appearHome} appear={true} timeout={2000} classNames="fade2" >
              <ul>
                <Daylist updateState2={(value) => this.update2(value)} />
              </ul></CSSTransition> ) : (null)
            }
          </div>
          <div>
          {(this.state.change1 && this.state.change2) ?(
              this.props.Etime(this.state.name,this.state.number),
              this.setState({change1: false, change2:false})
          ):(null)}
          </div>

        </div>
      
    );

  }

}

export default Dropdown;
