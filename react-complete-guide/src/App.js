import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'asa', name: 'Max', age: 28 },
			{ id: 'ass', name: 'Mithun', age: 2 },
			{ id: 'ssa', name: 'Jack', age: 8 }
		],
		otherState: 'Some other value',
		showPersons: false
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	//---------------------name changing using button---------------------
	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	}

	//--------------------toggling-----------------------------
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	}

	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)} />
					})}
				</div>
			);

			btnClass = classes.Red;
		}


		let assignClasses = [];
		if (this.state.persons.length <= 2) {
			assignClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignClasses.push(classes.bold); // before css modules>> assignClasses.push('bold');
		}

		return (
			<div className={classes.App} >
				<h1>
					Hi, I am FuzzY!
				</h1>

				<p className={assignClasses.join(' ')}>
					This is bullshit!
				</p>

				<button
					className={btnClass}
					onClick={this.togglePersonsHandler} >
					Switch Name
				</button>

				{persons}
			</div>
		);
	}
}

export default App;

//-----------------Example of React HOOK------------------------
// const [personsState, setPersonsState] = useState({
// 	persons: [
// 		{ name: 'Max', age: 28 },
// 		{ name: 'Mithun', age: 2 },
// 		{ name: 'Jack', age: 8 }
// 	],
// 	otherState: 'Some other value'
// });

// const switchNameHandler = () => {
// 	setPersonsState({
// 		persons: [
// 			{ name: 'Hosti', age: 28 },
// 			{ name: 'Mithuniyan', age: 2 },
// 			{ name: 'Jack Sparrow', age: 8 }
// 		]
// 	});
// };

// {/* <button onClick={this.switchNameHandler.bind(this, 'FuzzY')}>
// 					Switch Name
// 				</button> */}
// {/* <button style={style} onClick={() => this.switchNameHandler("FuzzY!!")}>
// 					Switch Name
// 				</button> */}
// {/* <Person name="Mithun" age="28" />
// 					<Person name="Honu" age="82">My Hobbies: Racing</Person>
// 					<Person name="Jack" age="33" /> */}

// return React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'Does this work now?'), 'h1', 'Hi, I am FuzzY');

//-------------------SwitchHandler for default state management---------
// switchNameHandler = (newName) => {
// 	this.setState({
// 		persons: [
// 			{ name: 'Hosti', age: 28 },
// 			{ name: newName, age: 2 },
// 			{ name: 'Jack Sparrow', age: 8 }
// 		]
// 	});
// }

//-------------------deletePerson Bad Practice------------------------
// deletePersonHandler = (personIndex) => {
// 	const persons = this.state.persons;
// 	persons.splice(personIndex, 1);
// 	this.setState({ persons: persons });
// }

//------------------Had an alternative approach----------------------
// deletePersonHandler = (personIndex) => {
// 	const persons = this.state.persons.slice();
// 	persons.splice(personIndex, 1);
// 	this.setState({ persons: persons });
// }


//-------------------Conditional Rendering-------------------
// {
// 	this.state.showPersons === true ?
// 		<div>
// 			<Person name={this.state.persons[0].name}
// 				age={this.state.persons[0].age} />

// 			<Person name={this.state.persons[1].name}
// 				age={this.state.persons[1].age}
// 				click={this.switchNameHandler.bind(this, "WuzzY")}
// 				changed={this.nameChangedHandler}>
// 				My Hobbies: Racing
// 			</Person>

// 			<Person
// 				name={this.state.persons[2].name}
// 				age={this.state.persons[2].age} />
// 		</div> : null
// }

//----------------bad practice in name change handler-----------------------------
// const personIndex = this.state.persons.findIndex(p => {
// 	return p.id === id;
// });
// const person = this.state.persons[personIndex];

//------------------------alternate approach in name change handler---------------------
// const person = object.assign({}, this.state.persons[personIndex]);

//--------------------------old stateState-------------------------------------
// this.setState({
// 	persons: [
// 		{ name: 'Hosti', age: 28 },
// 		{ name: event.target.value, age: 2 },
// 		{ name: 'Jack Sparrow', age: 8 }
// 	]
// });

//---------------------dynamic styling without dynamic nature------------------------
// let classes = ['red', 'bold'].join(' ');

//---------------------inline style-----------------------------------
// {/* <button style={style} onClick={this.togglePersonsHandler} >
// 	Switch Name
// </button> */}

// style.backgroundColor = 'red';
// 			style[':hover'] = {
// 				backgroundColor: 'salmon',
// 				color: 'black'
// 			}

//----------------------styled component--------------------------------------
// const StyleButton = styled.button`
// 	background-color: ${props => props.alt ? 'red' : 'purple'};
// 	color: white;
// 	font: inherit;
// 	border: 1px solid blue;
// 	padding: 8px;
// 	cursor: pointer;
// 	margin: 2px;

// 	&:hover {
// 		background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
// 		color: black;
// 	}	
// `;

//-----------------------------Inline styling-----------------------------------
// const style = {
// 	backgroundColor: 'purple',
// 	color: 'white',
// 	font: 'inherit',
// 	border: '1px solid blue',
// 	padding: '8px',
// 	cursor: 'pointer',
// 	margin: '2px',
// 	':hover': {
// 		backgroundColor: 'lightgreen',
// 		color: 'black'
// 	}
// };

// style.backgroundColor = 'red';
// 			style[':hover'] = {
// 				backgroundColor: 'salmon',
// 				color: 'black'
// 			}