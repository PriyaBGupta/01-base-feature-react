import React, { Component } from 'react';

class UserOutput extends Component{
    render(){
        const style={
            color: 'red',
            fontWeight: 'bold'
        }
        return(
            <div>
                <p style={style}>Everthing will be good {this.props.userName}</p>
                <p>Your energy will never get wasted</p>
            </div>
        )
    }
}

export default UserOutput