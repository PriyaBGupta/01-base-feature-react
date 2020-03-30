import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state={
    userName: ['Priya','Ajay']
  }
  nameChangeHandler = (event) =>{
    const updatedUsername = this.state.userName;
    updatedUsername[0] = event.target.value
    this.setState({
      userName: updatedUsername
    })
  }
  render() {
    return (
      <div>
        <UserInput change={this.nameChangeHandler} value={this.state.userName[0]}/>
        <UserOutput userName={this.state.userName[0]} />
        <UserOutput userName={this.state.userName[1]} />
      </div>
    );
  }
}

export default App;
