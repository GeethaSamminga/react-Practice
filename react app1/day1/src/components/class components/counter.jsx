import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  // method for increment count
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // method for decrement count
  decrementCount = () => {
    if (this.state.count > 0) { // Here is the correction
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  // method for reset count
  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <>
        <h3>Counter example</h3>
        <h3>{this.state.count}</h3>
        <button onClick={this.incrementCount}>Increment count</button>
        <button onClick={this.decrementCount}>Decrement count</button>
        <button onClick={this.resetCount}>Reset count</button>
      </>
    );
  }
}

export default Counter;
