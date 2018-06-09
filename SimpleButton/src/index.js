import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Button extends React.Component {
    state = { counter: 0 };
    handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
      })
    };
    
  render(){
    return(
        // ** Need babel.js for this JSX to work.  It looks like it's already apart of the node modules?
        <button id="btnSubmit" onClick={this.handleClick}>
          {this.state.counter}
        </button>

        //React.createElement("button", { id: "btnSubmit", onClick: this.handleClick }, this.state.counter  )
      );
    }
  }
  
ReactDOM.render(<Button />, document.getElementById('buttonWidget'));
registerServiceWorker();
