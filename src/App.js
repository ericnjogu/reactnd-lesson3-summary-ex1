import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewItemInput from './NewItemInput';
import ItemList from './ItemList';

class App extends React.Component {
  state = {
    name: '',
    items: [],
  };

/*
had to add parenthesis to the event variable to fix 'undefined' errors
*/
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

	noItemsFound = () => {
    	return this.state.items.length === 0;
  	};

	deleteLastItem = event => {
    	this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  	};

	addItem = (event) => {
      event.preventDefault();
      this.setState(oldState => ({
        items: [...oldState.items, this.state.value],
        value: '',//clear input field
      }));
    };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 2 - Controlled Components</h1>
        </header>
        <h2>Shopping List</h2>
    	{/* using (event) => this.addItem} did not work*/}
        <form onSubmit={this.addItem}>
          <NewItemInput
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
		
		<ItemList items={this.state.items} deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound}/>
      </div>
    );
  }
}

export default App;
