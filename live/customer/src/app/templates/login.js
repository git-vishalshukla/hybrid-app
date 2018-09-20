import React from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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
        let username = $("#inputUsername").val();
        let password = $("#inputPassword").val();
        let data = {
            "username": username,
            "password": password
        }
        let url = "http://172.16.4.175:8080/login";
      
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                this.setState({
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
                <div className="form-signin">
                    <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
                </div>
            );
        } else {
            return (
                <div className="profile-wrapper">
                <h3>Login</h3>
                 <form >
                     <div className="text-center mb-4">
                     <FormControl fullWidth>
                         <TextField
                         id="userid"
                         label="User ID"
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
                 <Button variant="contained" color="inherit" >
                         Become Partner    
                 </Button>
             </div>
            );
        }

    }
}


