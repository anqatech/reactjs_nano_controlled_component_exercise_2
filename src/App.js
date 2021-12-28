import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import InputNewItem from './InputNewItem';
import ListItems from './ListItems';
import DeleteItem from './DeleteItem';


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <Header logo={ logo }/>

        <h2>Shopping List</h2>

        <InputNewItem 
          value={ this.state.value }
          addItem={ this.addItem }
          handleChange={ this.handleChange }
          inputIsEmpty={ this.inputIsEmpty }
        />

        <DeleteItem
          deleteLastItem={ this.deleteLastItem }
          noItemsFound={ this.noItemsFound }
        />

        <ListItems items={ this.state.items }/>
      </div>
    );
  }
}

export default App;
