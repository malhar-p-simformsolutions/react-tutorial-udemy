import { render } from '@testing-library/react';
import React, {Component} from 'react';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: helvetica;
    border: 1px solid red;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.alt ? 'lightyellow' : 'lightorange'};
      color: black;
    }
`;

class App extends Component {
  state = {
    persons: [
      {id: 'm1', name: 'Malhar', age: '21'},
      {id: 'b1', name: 'Bruce', age: '23'}
    ],
    otherState: 'some value',
    showPersons: false
  }


swtichNameHandler = (newName) => {
  this.setState( {
    persons: [
      { name: newName, age: 21},
      { name: 'Bruce', age: 23}
    ]
  })
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex( p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons})


}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons;
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})

}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState( {showPersons: !doesShow});
}

render() {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'helvetica',
    border: '1px solid red',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightyellow',
      color: 'black'
    }
  };

  let persons = null;

  if( this.state.showPersons)
  {

    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click1 = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age} 
          key = {person.id}
          changed = {(event) => this.nameChangeHandler(event, person.id)}/>
        })}
       
      </div>
    );
   // style.backgroundColor = 'red';
    //style[':hover'] = {
    //  backgroundColor: 'lightorange',
      //color: 'black'
    //}
  }

  return (
    //<StyleRoot>
    <div className="App">
      <h1>Heyyy there!</h1>
      <p>Let us get to know</p>
      <StyledButton
        alt={this.state.showPersons}
        onClick = {this.togglePersonHandler}
      >Toggle Persons</StyledButton>
      {persons}
    </div>
   // </StyleRoot>
  );
}
  
}

export default App;


