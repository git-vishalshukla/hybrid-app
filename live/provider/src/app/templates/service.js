import React from "react";
import $ from "jquery";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { CONFIGURATION } from './config';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

export class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    // This binding is necessary to make `this` work in the callback
    this.serviceClick = this.serviceClick.bind(this);
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  serviceClick(e) {
    e.preventDefault();
    let checkedItems = this.state.checked;
    let data = {
      menu: checkedItems
    };
    let url = "http://172.16.4.175:8080/service";
    if (!CONFIGURATION.MOCKAPI) {
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (data, textStatus, jqXHR) {
          //navigate to dashboard page
        },
        error: function () {
          alert("Fail to call:" + url);
        }
      });
    }
  }

  render() {
    const { classes } = this.props;
    const serviceList = ["Breakfast", "Lunch", "Dinner"];
    return (
      <div className="profile-wrapper">
        <h3>Service</h3>
        <div className={classes.root}>
          <List>
            {serviceList.map(value => (
              <div key={value} className={classes.root}>
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <ListItem
                      key={value}
                      role={undefined}
                      dense
                      button
                      onClick={this.handleToggle(value)}
                      className={classes.listItem}
                    >
                      <Checkbox
                        checked={this.state.checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary={`${value}`} />

                    </ListItem>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="price"
                        label="Price"
                        variant="outlined"
                        type="number"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            ))}
          </List>
          <FormControl fullWidth>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.serviceClick}
            >
              Confirm Service
          </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}

Service.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Service);
