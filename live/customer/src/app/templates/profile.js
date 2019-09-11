import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export default class Profile extends React.Component {

    render() {
        return (
            <div className="profile-wrapper">
                <h3>Update Profile</h3>
                <form noValidate autoComplete="off">
                    <FormControl fullWidth>
                        <TextField
                            id="first-name"
                            label="First Name"
                            value={this.props.returnObj.first_name}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="last-name"
                            label="Last Name"
                            value={this.props.returnObj.last_name}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="emil"
                            label="Email"
                            value={this.props.returnObj.email}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="mobile"
                            label="Mobile"
                            value={this.props.returnObj.phoneNumber}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="address"
                            label="Address"
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="delevery-range"
                            label="Delevery Range"
                            value={this.props.returnObj.deliveryRange}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <div className="change-password">
                            <a href="#">Change Password</a>
                        </div>
                        <Button variant="contained" color="secondary" >
                            Update Profile
                    </Button>
                    </FormControl>
                </form>
            </div>
        );
    }
}
