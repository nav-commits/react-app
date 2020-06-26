import React from 'react';
import '../App.css';



function People(props) {
    return (
        <div className="people" >
          <h2 >
          {props.name} 
          </h2>
            <h2>
            {props.age}
            </h2>
          <p>
            {props.about}
          </p>
        </div>
      );
    }

export default People;
