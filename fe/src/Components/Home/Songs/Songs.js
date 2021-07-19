import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Song from "./Song";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Songs = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <div style={{marginLeft:"50px",marginTop:"20px"}}>
<div class="track-list slider">
            <header>
                <h2><span>New</span> Releases</h2>
                <div class="arrows">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </header>
            </div>
        <Grid container spacing={1 } style={{marginTop:"50px"}}>
<Song/>
            </Grid>
            </div>
        </div>
    )

}
export default Songs