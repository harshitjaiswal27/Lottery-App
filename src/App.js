import React, {Component} from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = { 
    manager : '',
    players : [],
    balance : '',
    value : '',
    message : ''
  };

  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({manager, players, balance});
  }

  onSubmit = async (event)=> {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message : 'Waiting on transaction Success...'});

    await lottery.methods.enter().send({
      from : accounts[0],
      value : web3.utils.toWei(this.state.value,'ether')
    });

    this.setState({ message : 'You have been entered!'});
  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message : 'Waiting on transaction Success...'});

    await lottery.methods.pickWinner().send({
      from : accounts[0]
    });

    const winner = await lottery.methods.lastWinner().call();

    this.setState({ message : `The winner of the lottery is ${winner}!`});
  }

  render(){
    return (
      <div class="frame">
        <h2 class="heading">LOTTERY CONTRACT</h2>
        <p>This contract is managed by <strong>{this.state.manager}</strong>.<br/>
           There are currently <strong>{this.state.players.length}</strong> people entered,
           competing to win <strong>{web3.utils.fromWei(this.state.balance,'ether')}</strong> ether.
        </p> 
        <hr/>
        <form onSubmit={this.onSubmit}>
          <h4>WANT TO TRY YOUR LUCK?</h4>
            <label>Amount of ether to enter :</label>
            <input 
              value = {this.state.value}
              onChange={event=>this.setState({ value : event.target.value})}
              style={{margin: "0px 10px"}}
            />
          <button>Enter</button>
        </form>
        <hr/>
          <h4>READY TO PICK A WINNER?</h4>
          <button onClick={this.onClick} >Pick a Winner</button>
        <hr/>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
