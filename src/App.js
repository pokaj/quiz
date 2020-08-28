import React, { Component } from 'react';


// state data for 3 counters
const data = [
  { id: 1, value: 0},
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

// Counter Component
class Counter extends Component {
  constructor(props,context){
    super(props,context);
      this.state = {
        value: this.props.value,
      }
  }
  onIncrement(number){
    this.setState({ value: this.state.value + number,})
  }

  onDecrement(number){
    this.setState({ value: this.state.value - number,})
  }
  render() {
    const { value } = this.state;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={() => this.onDecrement(4)}>-</button>
          <button className="button is-success is-small" onClick={() => this.onIncrement(4)}>+</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data : data
    }
  }
  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        )
        )}
      </div>
    );
  }
}

class Total extends Component {
  
}

export default App;
