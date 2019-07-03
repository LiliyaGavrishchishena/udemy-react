import React, { Component } from 'react';
// styles
import styles from './Counter.module.css';

class Counter extends Component {
  state = { counter: 0 };

  increment = () =>
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));

  decrement = () =>
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));

  render() {
    const { counter } = this.state;
    return (
      <div className={styles.counter}>
        <button className={styles.btn} onClick={() => this.increment()}>
          +
        </button>
        <div className={styles.num}>{counter}</div>
        <button className={styles.btn} onClick={() => this.decrement()}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
