import React from 'react';



 

class DayList extends React.Component {
  state ={
      num: 0,
      
  }
    render( ){ 
    var firstDay = 1;
    var lastDay = 31;
    var number = 0;
    var days = [];

    while(firstDay <= lastDay){
        days.push( firstDay++)
    }
      
    const dlist = days.map((day,index) => 
    <li key={index}  id={index} onClick= {() => {number = index + 1; this.props.updateState2(number)}}>
        {day}
    </li>)
 
               
    return (
        
        <div>
            {
                dlist
            }
            
        </div>
        
    )
        }
        }




export default DayList