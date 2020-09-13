import React, { Component } from 'react';
import './App.css';
import ComponentValidation from './ComponentValidation/ComponentValidation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
	state = {
		userInput: ""
	}

	inputChangedHandler = (event) => {
		this.setState({ userInput: event.target.value });
	}

	deleteChar = (index) => {
		const text = this.state.userInput.split('');
		text.splice(index, 1);

		const updateText = text.join('');
		this.setState({ userInput: updateText });
	};

	render() {
		const charList = this.state.userInput.split('').map((char, index) => {
			return <CharComponent
				character={char}
				key={index}
				clicked={() => this.deleteChar(index)} />;
		});

		return (
			<div className="App">
				<h1 className="App">Hello</h1>
				<hr />
				<hr />

				<input
					type="text"
					onChange={this.inputChangedHandler}
					value={this.state.userInput} />
				<p>
					{this.state.userInput}
				</p>

				<ComponentValidation inputLength={this.state.userInput.length} />

				{charList}
			</div>
		);
	}
}

export default App;
