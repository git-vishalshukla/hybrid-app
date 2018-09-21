
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div class="dash-container">
        <Grid container direction="row" justify="left" alignItems="left" spacing={16}>
          <Grid item >
          <ButtonBase >
              <div class="dash-grid">
              <div class="dash-icon">
              <img src="../../../assets/img/tray.svg" />
              </div>
              <div class="dash-title">
                Orders
               </div>
               </div>
          </ButtonBase>
          </Grid>
          <Grid item >
          <ButtonBase >
              <div class="dash-grid">
              <div class="dash-icon">
              <img src="../../../assets/img/settings.svg" />
              </div>
              <div class="dash-title">
               Profile
               </div>
               </div>
          </ButtonBase>
          </Grid>
          <Grid item >
          <ButtonBase >
              <div class="dash-grid">
              <div class="dash-icon">
              <img src="../../../assets/img/waiter.svg" />
              </div>
              <div class="dash-title">
               Services
               </div>
               </div>
          </ButtonBase>
          </Grid>
          <Grid item >
          <ButtonBase >
              <div class="dash-grid">
              <div class="dash-icon">
              <img src="../../../assets/img/junk-food.svg" />
              </div>
              <div class="dash-title">
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