import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
	marginBottom: theme.spacing(2),
	backgroundColor: "#3f51b5",
	borderRadius: "18px",
	color: "white"
	
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="p" component="h3">
          Order
        </Typography>
      </Paper>
    </div>
  );
}
