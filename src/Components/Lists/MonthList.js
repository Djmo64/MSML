import React from 'react';



var val = '';
class MonthList extends React.Component {

  constructor(props){
       super(props)
       this.state = {name : val}
      
       this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
      this.setState(
          {name : val}
      )
  }
 
   render( ){ 
          
   const months = [{names :'January'},{names: 'February'},{ names:'March'}, {names: 'April'}, {names:'May'}, {names:'June'}, {names: 'July'},
       {names:'August'}, {names:'September'}, {names: 'October'}, {names:'November'}, {names:'December'}];
   const mlist = months.map((month, index) => 
   <li key={index} onClick= {() => {val = month.names; this.props.updateState(val)}}  > 
           {month.names} 
    </li>);
              
   return (

       <div>
           {
               mlist   
           }
          
       </div>
  
   )
       }
       }



export default MonthList