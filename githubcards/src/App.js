import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
	return(
  	<div className="card">
    	<img src={ props.avatar_url }/>
      <div className="cardTextBlock">
      	<div className="cardTextHeader">{ props.name }</div>
        <div>{ props.company }</div>
      </div>
    </div>
  );
}

const CardList = (props) => {
	return(
    <div>
    	{ props.cards.map(card => <Card key={card.id} {...card} />) }
    </div>
  );
}

class Form extends React.Component{

	state = {
  	username: ''
  }
  
  handleSubmit = (event) => {
		event.preventDefault();
    
    //ajax... fetch or axios library
    axios.get('https://api.github.com/users/' + this.state.username)
    		 .then(resp => {
        		//console.log(resp);
            this.props.onSubmit(resp.data);
         })
        
    this.setState({ username: '' });
  };

	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
      	<input onChange={(event) => this.setState({username: event.target.value}) } type='text' placeholder='Github Username' required />
        <input type='submit' name="Add Card" value="Add Card" />
      </form>
    );
  }
  
}

/* Main Application */
class App extends React.Component{

	state = { 
  	cards: [
      {
        avatar_url: "https://avatars0.githubusercontent.com/u/18264612?v=4",
        name: "Joseph Anger",
        company: "AAD"
      }
    ]
	};

	addNewCard = (cardInfo) => {
  	//console.log(cardInfo);
    this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  };

	render(){
  	return(
    	<div>
      	<Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);