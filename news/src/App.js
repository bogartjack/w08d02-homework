import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';
import NewsList from './NewsList';
import Login from './Login';

class App extends Component {
  constructor(){
	super();
	this.state={
		news: [],
		username: '',
		logged: false
	}
  }

  userLoggedIn = (user, logged) =>{
	this.setState({
		username: user,
		logged: logged
	});
  }

  getNews = async ()=>{
	try{
		const news = await fetch('https://newsapi.org/v2/top-headlines?' +
          		'country=us&' +
          		'apiKey=01ea06ed5bba49ac83b8d8a98ffa739c');
		const newJson = await news.json();
		console.log(newJson);
		return newJson;
	}
	catch(err){
		console.log(err);
	}
  }

  componentDidMount(){
	this.getNews().then((data) => {
		this.setState({news:data});
		console.log(this.state.news);
	}).catch(err=>console.log(err));
  }

  render() {
    return (
      <div className="App">
      	<h1> NEWS </h1>
	{ !this.state.logged ?
		<Login isLogged ={this.userLoggedIn}/> :
		<NewsList news={this.state.news} />
      	}
	</div>
    );
  }
}

export default App;
