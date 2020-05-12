import React from 'react';
import PropTypes from 'prop-types'; // you can check data type and requiredness

// react automatically is going to execute render method of your class component

class App extends React.Component{
  state = {
    isLoading : true
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false});
    }, 6000);
  }
  render(){
    const {isLoading} = this.state;
    return <div>
      {isLoading ? "Loading...": "We are ready"}
    </div>;
  }
}

export default App;
