import React from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


// DEFAULT PROPERTIES
// class App extends React.Component {
//   render() { 
//       let txt = this.props.txt;
//       return <h1>{txt}</h1>
//   }
// }

// App.defaultProps = {
//   txt: 'default props'
// }

// MANAGE REACT COMPONENT STATE WITH SET STATE
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state txt'
//     }
//   }
//   update(e){
//     this.setState({txt: e.target.value})
//   }
//   render() { 
//       return (
//         <div>
//           <h1> {this.state.txt} </h1>
//           <Widget update={this.update.bind(this)} />
//         </div>
//       )
//   }
// }

// const Widget = props => <input type= 'text' onChange = {props.update} />
// App.defaultProps = {
//   txt: 'default props'
// }

// const App = () => <h1>Hellow World</h1>

class App extends React.Component {
  render(){
    return <Button>I <Heart /> React</Button>
  }
}

const Button = props => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}
export default App;
