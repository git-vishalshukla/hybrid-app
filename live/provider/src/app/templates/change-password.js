import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="profile-wrapper">
               <h3>Change Password</h3>
               <form  noValidate autoComplete="off">
                 
                   <FormControl fullWidth>  
                    <TextField
                    id="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    />
                   </FormControl> 
                   <FormControl fullWidth>  
                    <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    margin="normal"
                    />
                   </FormControl>  
                   <FormControl fullWidth> 
                   <Button variant="contained" color="secondary" >
                        Change Password
                    </Button>
                    </FormControl> 
            </form>    
            </div>  
        );
    }
}