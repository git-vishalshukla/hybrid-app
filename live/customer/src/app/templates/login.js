import React from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dashboard from './dashboard';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        // This binding is necessary to make `this` work in the callback
        this.signinClick = this.signinClick.bind(this);
    }

    signinClick(e) {
        e.preventDefault();
        let email = $("#email").val();
        let data = {
            "email": "user@user.com",
            "password": "123456"
        }
        let url = "http://192.168.1.186:8080/api/v1/auth/login";
        let self = this;
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                self.setState({
                    isLoggedIn: true
                });
                //navigate to dashboard page
            },
            error: function () {
                alert("Fail to call:" + url);
            }

        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return (
                <Dashboard/>
            );
        } else {
            return (
                <div className="profile-wrapper">
                <h3>Login</h3>
                 <form class="form-wrapper">
                     <div className="text-center mb-4">
                     <FormControl fullWidth>
                         <TextField
                         id="email"
                         label="Email"
                         margin="normal"
                         />
                     </FormControl>  
                     <FormControl fullWidth>
                         <TextField
                         id="password"
                         label="Password"
                         margin="normal"
                         type= "password"
                         />
                     </FormControl>
                     <FormControl fullWidth> 
                     <Button variant="contained" color="secondary" onClick={this.signinClick}>
                         Login
                     </Button>
                     </FormControl>   
                         
                     </div>
                 </form>
                 <FormControl fullWidth>
                 <Button variant="contained" color="inherit" >
                         Become Partner    
                 </Button>
                 </FormControl>
             </div>
            );
        }

    }
}


