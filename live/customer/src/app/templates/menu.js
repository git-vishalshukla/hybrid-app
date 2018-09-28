import React from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { CONFIGURATION } from './config';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      openRoti: false,
      openDrink: false,
      openRice: false,
      openVegetable: false,
      openSalad: false
    };
    // This binding is necessary to make `this` work in the callback
    this.menuClick = this.menuClick.bind(this);
  }

  handleToggle = value => e => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  handleClick = e => {
    let menuItemId = e.currentTarget.id;
    if (menuItemId == "roti") {
      this.setState(state => ({ openRoti: !state.openRoti }));
    }
    if (menuItemId == "vegetable") {
      this.setState(state => ({ openVegetable: !state.openVegetable }));
    }
    if (menuItemId == "salad") {
      this.setState(state => ({ openSalad: !state.openSalad }));
    }
    if (menuItemId == "rice") {
      this.setState(state => ({ openRice: !state.openRice }));
    }
    if (menuItemId == "drink") {
      this.setState(state => ({ openDrink: !state.openDrink }));
    }
  };
  menuClick(e) {
    e.preventDefault();
    let checkedItems = this.state.checked;
    let data = {
      menu: checkedItems
    };
    let url = "http://172.16.4.175:8080/menu";
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
    const rotiItems = ["Thepla", "Tanduri Roti", "Chapati", "Paratha", "Naan"];
    const drinkItems = ["Chaash", "Coke", "Juice"];
    const riceItems = ["Rice", "Jira Rice", "Biryani"];
    const saladItems = ["Papad", "Kobi", "Onion"];
    const vegetablesItems = ["Potato", "Ladies Finger", "Tomato"];

    return (
      <div className="profile-wrapper">
        <h3>Menu</h3>
        <ListItem id="roti" button onClick={this.handleClick}>
          <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
          <ListItemText inset primary="Roties" />
          {this.state.openRoti ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openRoti} timeout="auto" unmountOnExit>
          <List>
            {rotiItems.map(value => (
              <ListItem key={value} dense button>
                <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
                <ListItemText primary={`${value}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem id="vegetable" button onClick={this.handleClick}>
          <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
          <ListItemText inset primary="Vegetables" />
          {this.state.openVegetable ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openVegetable} timeout="auto" unmountOnExit>
          <List>
            {vegetablesItems.map(value => (
              <ListItem key={value} dense button>
                <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
                <ListItemText primary={`${value}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem id="salad" button onClick={this.handleClick}>
          <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
          <ListItemText inset primary="Salads" />
          {this.state.openSalad ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openSalad} timeout="auto" unmountOnExit>
          <List>
            {saladItems.map(value => (
              <ListItem key={value} dense button>
                <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
                <ListItemText primary={`${value}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem id="rice" button onClick={this.handleClick}>
          <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
          <ListItemText inset primary="Rice" />
          {this.state.openRice ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openRice} timeout="auto" unmountOnExit>
          <List>
            {riceItems.map(value => (
              <ListItem key={value} dense button>
                <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
                <ListItemText primary={`${value}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem id="drink" button onClick={this.handleClick}>
          <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
          <ListItemText inset primary="Drinks" />
          {this.state.openDrink ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openDrink} timeout="auto" unmountOnExit>
          <List>
            {drinkItems.map(value => (
              <ListItem key={value} dense button>
                <Avatar alt="Remy Sharp" src="../../assets/img/thepla.jpeg" />
                <ListItemText primary={`${value}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <FormControl fullWidth>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.menuClick}
          >
            Confirm Menu
          </Button>
        </FormControl>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
