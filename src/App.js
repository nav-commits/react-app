import React, { Component } from 'react';
import './App.css';
import People from './Components/People';

class App extends Component {
  state= {
    Persons:[
   { name: 'john', age: '22' , about: 'Great Java Developer'},
    { name: 'Manu', age: '25', about: 'Great JavaScript Developer' },
    {name: 'joe', age: '27', about: 'Great Python Developer'}
    ]
    
  }

  switchHandler = () => {
   this.setState({
     Persons: [
       { name: 'don', age: '28', about: 'Great Swift Developer' },
       { name: 'MOw', age: '29', about: 'Great Node.js Developer' },
       { name: 'Boe', age: '35', about: 'Great SQL Developer' }
     ] 
  })
}
  render() {
  
    return (
     
      <div >
        <div className="App">
        <People click={this.switchHandler} name={this.state.Persons[0].name} age={this.state.Persons[0].age} about={this.state.Persons[0].about} />
        <People name={this.state.Persons[1].name} age={this.state.Persons[1].age} about={this.state.Persons[1].about} />
        <People name={this.state.Persons[2].name} age={this.state.Persons[2].age} about={this.state.Persons[2].about} />
        </div>
        <button onClick={this.switchHandler}>Switch</button>
      </div>

    );
  }
}

export default App;

