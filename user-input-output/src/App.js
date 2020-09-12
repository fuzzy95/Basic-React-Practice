import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'DizzyWizzy'
    }

    inputHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <h2>Input below</h2>

                <UserInput changed={this.inputHandler} currentName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Wuzzy" />
                <UserOutput userName="Muzzy" />
            </div>
        );
    }
}

export default App;
