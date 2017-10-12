import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { buyCoinAction, sellCoinAction, exchangeAction } from './actions';
import { reducer } from './store';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props)

    setInterval(this.props.update, 2000)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p>Doubloons: {this.props.doubloons}</p>
          <p>Arrcoins: {this.props.arrcoins}</p>
          <p>Exchange: {this.props.exchangeRate}</p>
        </div>
        <button onClick={() => this.props.buy()}> Buy Doubloon </button>
        <button onClick={() => this.props.sell()}> Sell Doubloon </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    doubloons: state.doubloons,
    arrcoins: state.arrcoins,
    exchangeRate: state.exchangeRate,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buy: function () {
      dispatch(buyCoinAction);
    },
    sell: function () {
      dispatch(sellCoinAction);
    },
    update: function () {
      dispatch(exchangeAction);
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
