import React from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dashboard from './dashboard';
import { Route } from "react-router-dom";
import {CONFIGURATION} from './config';

/***** Redux *****/
import { connect } from "react-redux";
import { setName } from "../../actions/user";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        // This binding is necessary to make `this` work in the callback
        this.signinClick = this.signinClick.bind(this);
    }
	componentWillMount() {
		this.props.setName("Jayesh");
		console.log(this.props.user);
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
        }else{
            self.setState({
                isLoggedIn: true
            });
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return <Route path='/' render={(props) => <Dashboard {...props} isAuthed={true} />} />
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
	  user : state.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
	setName: (name) => {
		dispatch(setName(name))
	}
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
