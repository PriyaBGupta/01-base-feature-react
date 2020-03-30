import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component{
    render(){
        return(
            <input 
            onChange={this.props.change}
            value={this.props.value}/>
        )
    }
}

export default UserInput;