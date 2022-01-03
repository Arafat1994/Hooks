import React from 'react';



export default class LoginFormCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
        if (e.key === 'Enter') {
            console.log('your email is ' + this.state.email)
        }
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
        if (e.key === 'Enter') {
            console.log('your email is ' + this.state.password)
        }
    }
    render() {
        return (
            <div>
                <p>  hi from class component with state   </p>
                <p> your email is : { this.state.email} </p>
                <p> your passsword is : {this.state.password }  </p>

                <input type='email' onChange={this.handleEmail} onKeyDown={this.handleEmail} name='email'  
                placeholder='Enter your Name ' />
                <input type='password' onChange={this.handlePassword} onKeyDown={this.handlePassword} name='password'  
                placeholder='Enter your password ' />
            </div>
        )
    }
}