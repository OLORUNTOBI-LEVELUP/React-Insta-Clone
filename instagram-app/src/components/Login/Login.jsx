import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <form>
            <label htmlFor="username">Username</label>
            <input  id="username" type="text"/>
            <label htmlFor="password"></label>
            <input type="password" id="password" />
            <button>Login</button>
        </form>  
        );
    }
}
 
export default Login ;