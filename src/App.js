import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewItemInput from './NewItemInput';
import ItemList from './ItemList';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    users: [],
    showMoviesCount: true
  };

  handleChange = (event, inputName) => {
    this.setState({ [inputName]: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '';
  };

	addItem = (event) => {
      event.preventDefault();
      this.setState(oldState => (
        oldState.users.filter(user => user.userName === oldState.userName).length > 0 ? 
        {message: `Username ${oldState.userName} exists`} 
        : 
        {users: [...oldState.users, {
          firstName: oldState.firstName,
          lastName: oldState.lastName,
          userName: oldState.userName,
          movieCount:0,
        }],
         message:'',
        //value: '',//clear input field
      }));
    };
	
	formatUser = (user) => {
      let movieString = this.state.showMoviesCount ? `- movies: ${user.movieCount}` : ""
      return `${user.firstName} ${user.lastName} (${user.userName}) ${movieString}`;
    }

	toggleShowMovie = () => {
      this.setState(
        (oldState) => (
          {showMoviesCount: !oldState.showMoviesCount}    
        )
      )
    }
	
	keyProp = (user) => {
      return user.userName
    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 1 - All Together</h1>
        </header>
        <h2>Users</h2>
    	<div className="error">{this.state.message}</div>
        <form onSubmit={this.addItem}>
          <NewItemInput
            value={this.state.value}
            handleChange={(event) => this.handleChange(event, 'firstName')}
			fieldNamePrompt = "First Name"
          />
			<NewItemInput
            value={this.state.value}
            handleChange={(event) => this.handleChange(event, 'lastName')}
			fieldNamePrompt = "Last Name"
          />
		<NewItemInput
            value={this.state.value}
            handleChange={(event) => this.handleChange(event, 'userName')}
			fieldNamePrompt = "User Name"
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
		<input id="toggle-movies" type="checkbox" onChange={this.toggleShowMovie} checked={this.state.showMoviesCount}/>
		<label htmlFor="toggle-movies">Toggle Movie Info</label>
		<ItemList items={this.state.users} listHeading={`${this.state.users.length} User(s)`} formatItem={this.formatUser}
			keyProp={this.keyProp}/>
      </div>
    );
  }
}

export default App;
