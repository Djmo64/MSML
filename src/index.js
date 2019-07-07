import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './service/serviceWorker';
import App from './App';



const MyContext = React.createContext();
  
class MyProvider extends React.Component{
 
  constructor() {
    super();

    this.state = {
      name: 'January',
      number: 1

    };
    
    this.update = this.update.bind(this)
  };
 update(value1,value2) {

  this.setState({
    name: value1
  });
  this.setState({
    number: value2
  });
}

  render(){
    return(
      <MyContext.Provider value = {{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
      
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
