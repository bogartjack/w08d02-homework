import React, {Component} from 'react';
import {Form, Button, Input} from 'semantic-ui-react';
class Login extends Component{
	constructor(){
		super();
		this.state ={username:'', password:''}
	}
	render(){
		return(<div>
			<Form onSubmit={this.handleLogin}>
				<Input 
				    	type='text' 
				    	name='username' 
				    	value={this.state.username} 
				    	onChange={this.handleInput}
				    	placeholder="username"/>
				<Input 
				  	type='password' 
				 	name='password' 
				    	onChange={this.handleInput}
				    	value={this.state.password} 
				    	placeholder="password"/>
				<Button type='submit'>Log In</Button>						</Form>
		</div>)
	}
	handleLogin = (e) =>{
		e.preventDefault()
		this.props.isLogged(this.state.username, true);
	}
	handleInput = (e) =>{
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value 
		});
	}
}

export default Login
