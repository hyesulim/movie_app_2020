import React from 'react';
import PropTypes from 'prop-types'; // you can check data type and requiredness

// react automatically is going to execute render method of your class component

class App extends React.Component{
  state = { // we want to change the data in our component
    count: 0
  }
  // everytime you call setState, react will call the render function with the new state
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }
  // onClick={this.add} => when you click, run add
  // this.add() => run add immediately
  render(){
    return <div>
      <h1>The number is {this.state.count}</h1> 
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
