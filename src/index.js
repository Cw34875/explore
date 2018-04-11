import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props){
    return (
      <button className="square" onClick = {props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      xIsNext: true,
    };
  }
  
  handleClick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (this.state.xIsNext)
      squares[i] = 'X';
    else
      squares[i] = 'O';
    this.setState({
      squares: squares,
      xIsNext : !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (
      <Square value = {this.state.squares[i]} onClick = {()=> this.handleClick(i)}/>
    );
  }
  rendertest(){
    return( <NameForm />);
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      
      <div>
        {this.rendertest()}
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for (let i = 0; i <lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
