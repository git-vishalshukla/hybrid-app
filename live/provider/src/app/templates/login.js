import React from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import PersistentDrawerLeft from './include/persistentDrawerLeft.js';
import { Route } from "react-router-dom";
import {CONFIGURATION} from './config';




/***** Redux *****/
import { connect } from "react-redux";
import { setLoggin, setUser } from "../../actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.signinClick = this.signinClick.bind(this);
    }

    signinClick(e) {
        e.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();

        let data = {
            "email": email,
            "password": password
        }
        let url = "http://172.16.4.173:8080/api/v1/auth/login";
        let self = this;
        if(!CONFIGURATION.MOCKAPI){
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                success: function (data, textStatus, jqXHR) {
					this.props.setLogin(true);
                    localStorage.setItem("token", data.token);
                    //navigate to dashboard page
                },
                error: function () {
                    alert("Fail to call:" + url);
                }
            });
        }else{
			this.props.setLogin(true);
			this.props.setUserName("Jayesh Naghera");
        }
    }

    render() {
        const isLoggedIn = this.props.configState.isLoggedIn;
        if (isLoggedIn) {
            return <Route path='/' render={(props) => <PersistentDrawerLeft {...props} isAuthed={true} />} />
        } else {
            return (
                <div className="profile-wrapper ">
                    <h3>Login</h3>
                    <form className="form-wrapper">
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

const mapStateToProps = state => {
  return {
	  ...state
  }
};

const mapDispatchToProps = dispatch => {
  return {
	setLogin: (value) => dispatch(setLoggin(value)),
	setUserName: (value) =>	dispatch(setUser(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
