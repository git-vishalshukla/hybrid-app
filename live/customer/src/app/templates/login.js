import React from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dashboard from './dashboard';
import { Route } from "react-router-dom";

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
        let password = $("#password").val();

        let data = {
            "email": email,//user@user.com
            "password": password//123456
        }
        let url = "http://172.16.4.173:8080/api/v1/auth/login";
        let self = this;
        self.setState({
            isLoggedIn: true
        });
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data, textStatus, jqXHR) {
                self.setState({
                    isLoggedIn: true
                });
                localStorage.setItem("token", data.token);
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
            return <Route path='/' render={(props) => <Dashboard {...props} isAuthed={true} />} />
        } else {
            return (
                <div className="profile-wrapper">
                    <h3>Login</h3>
                    <form className="form-wrapper">
                        <div className="text-center mb-4">
                            <FormControl fullWidth>
                                <TextField
                                    id="email"
                                    label="Email"
                                    value=""
                                    margin="normal"
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    id="password"
                                    label="Password"
                                    value=""
                                    margin="normal"
                                    type="password"
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


