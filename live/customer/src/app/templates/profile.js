import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="profile-wrapper">
               <h3>Update Profile</h3>
               <form  noValidate autoComplete="off">
                 <FormControl fullWidth>
                    <TextField
                    id="first-name"
                    label="First Name"
                    margin="normal"
                    />
                 </FormControl>   
                 <FormControl fullWidth>
                    <TextField
                    id="last-name"
                    label="Last Name"
                    margin="normal"
                    />
                  </FormControl>   
                  <FormControl fullWidth>  
                    <TextField
                    id="emil"
                    label="Email"
                    margin="normal"
                    />
                   </FormControl>  
                   <FormControl fullWidth>  
                    <TextField
                    id="mobile"
                    label="Mobile"
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
                    margin="normal"
                    />
                   </FormControl>  
                   <FormControl fullWidth> 
                   <div class="change-password">
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