import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Mithun', age: 2 },
			{ name: 'Jack', age: 8 }
		],
		otherState: 'Some other value'
	}

	switchNameHandler = () => {
		// console.log('Was clicked!');
		// this.state.persons[0].name = 'Hosti';
		this.setState({
			persons: [
				{ name: 'Hosti', age: 28 },
				{ name: 'Mithuniyan', age: 2 },
				{ name: 'Jack Sparrow', age: 8 }
			]
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Hi, I am FuzzY!</h1>

				<p>This is bullshit!</p>

				<button onClick={this.switchNameHandler}>Switch Name</button>

				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

				{/* <Person name="Mithun" age="28" />
				<Person name="Honu" age="82">My Hobbies: Racing</Person>
				<Person name="Jack" age="33" /> */}
			</div>
		);

		// return React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'Does this work now?'), 'h1', 'Hi, I am FuzzY');
	}
}

export default App;
