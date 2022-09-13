import React from 'react';
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  };
  onAdd() {
    this.setState({count: this.state.count+1})
  };
  onSub() {
    this.setState(
      this.setState({count: this.state.count-1})
    )
  };
  render() {
    return (
      <div>
        <button onClick={this.onSub.bind(this)}>-</button>
        <span className='num'>{this.state.count}</span>
        <button onClick={this.onAdd.bind(this)}>+</button>
      </div>
    )
  }
}

export default Counter;