import React from "react";

export default class LifecycleComponet extends React.Component {

    state = { email: '', password: '' };
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

    deleteElement = () => {

        let form = document.getElementById('form');
        if (form) {
            form.remove();
        }
        else {
            console.log('the email textbox deleted before ')
        }


    }

    //that will run on mount and update 
    componentDidMount() {
        console.log(' compont did mount ');
    }
    //that will run on every update of every thing 
    componentDidUpdate(prevstate, prevprops) {
        console.log('component did  update ');
        //if i want to do something when update email 
        if (prevstate.email !== this.state.email) {
            console.log('email updating ')
        }
        else if (prevstate.password !== this.state.password) {
            console.log('password updating ');
        }
        else {
            console.log('no update ')
        }

    }
    // that will run on unmout or delete of element 
    componentWillUnmount() {
       // this.deleteElement();
        console.log('component did unmount ');

    }


    render() {
        return (
            <div id='form'>
                <p> this is from useeffect hook </p>
                <p> this is my email  {this.state.email} </p>
                <p> this is my password {this.state.password}</p>
                <input type='email' value='' onChange={this.handleEmail} onKeyDown={this.handleEmail} id="email" />
                <input type='password' value='' onChange={this.handlePassword} onKeyDown={this.handlePassword} />

                <button onClick={this.deleteElement}> delete Element </button>
            </div>
        )
    }
}