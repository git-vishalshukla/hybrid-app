
import React from 'react';
import $ from 'jquery';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Profile from './profile';
import Service from './service';
import Menu from './menu';
import { CONFIGURATION } from './config';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toProfile: false,
            toService: false,
            toMenu: false,
            profileData: [],
            serviceData: [],
            menuData: [],
        };
        // This binding is necessary to make `this` work in the callback
        this.profileClick = this.profileClick.bind(this);
        this.serviceClick = this.serviceClick.bind(this);
        this.menuClick = this.menuClick.bind(this);
    }

    profileClick(e) {
        e.preventDefault();
        let url = "http://172.16.4.173:8080/api/v1/get-user";
        let self = this;
        if (!CONFIGURATION.MOCKAPI) {
            $.ajax({
                type: "GET",
                url: url,
                headers: {
                    "Authorization": "Bearer" + localStorage.getItem("token")
                },
                success: function (data, textStatus, jqXHR) {
                    self.setState({
                        toProfile: true,
                        profileData: data.data.returnObj
                    });
                },
                error: function () {
                    alert("Fail to call:" + url);
                }
            });
        } else {
            self.setState({
                toProfile: true,
            });
        }
    }

    serviceClick(e) {
        e.preventDefault();
        let url = "http://172.16.4.173:8080/api/v1/get-service";
        let self = this;
        if (!CONFIGURATION.MOCKAPI) {
            $.ajax({
                type: "GET",
                url: url,
                headers: {
                    "Authorization": "Bearer" + localStorage.getItem("token")
                },
                success: function (data, textStatus, jqXHR) {
                    self.setState({
                        toService: true,
                        serviceData: data.data.returnObj
                    });
                },
                error: function () {
                    alert("Fail to call:" + url);
                }
            });
        } else {
            self.setState({
                toService: true,
            });
        }
    }

    menuClick(e) {
        e.preventDefault();
        let url = "http://172.16.4.173:8080/api/v1/get-menu";
        let self = this;
        if (!CONFIGURATION.MOCKAPI) {
            $.ajax({
                type: "GET",
                url: url,
                headers: {
                    "Authorization": "Bearer" + localStorage.getItem("token")
                },
                success: function (data, textStatus, jqXHR) {
                    self.setState({
                        toMenu: true,
                        menuData: data.data.returnObj
                    });
                },
                error: function () {
                    alert("Fail to call:" + url);
                }
            });
        } else {
            self.setState({
                toMenu: true,
            });
        }
    }

    render() {
        const toProfile = this.state.toProfile;
        const toService = this.state.toService;
        const toMenu = this.state.toMenu;
        const profileData = this.state.profileData;
        const serviceData = this.state.serviceData;
        const menuData = this.state.menuData;
        if (toProfile) {
            return (
                <Profile returnObj={profileData} />
            );
        } else if (toService) {
            return (
                <Service returnObj={serviceData} />
            );
        } else if (toMenu) {
            return (
                <Menu returnObj={menuData} />
            );
        } else {
            return (
                <div className="dash-container">
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={6}>
                            <ButtonBase className="full-width">
                                <div className="dash-grid">
                                    <div className="dash-icon">
                                        <img src="public/assets/img/tray.svg" />
                                    </div>
                                    <div className="dash-title">
                                        Orders
               </div>
                                </div>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={6}>
                            <ButtonBase className="full-width">
                                <div className="dash-grid" onClick={this.profileClick}>
                                    <div className="dash-icon">
                                        <img src="public/assets/img/settings.svg" />
                                    </div>
                                    <div className="dash-title">
                                        Profile
               </div>
                                </div>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={6}>
                            <ButtonBase className="full-width">
                                <div className="dash-grid" onClick={this.serviceClick}>
                                    <div className="dash-icon">
                                        <img src="public/assets/img/waiter.svg" />
                                    </div>
                                    <div className="dash-title">
                                        Services
               </div>
                                </div>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={6}>
                            <ButtonBase className="full-width">
                                <div className="dash-grid" onClick={this.menuClick}>
                                    <div className="dash-icon">
                                        <img src="public/assets/img/junk-food.svg" />
                                    </div>
                                    <div className="dash-title">
                                        Menu
               </div>
                                </div>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}
