import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./Song.css"
const Song = props => {
    return (
        <>
        <Grid item xs={4} spacing={3}>
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" style={{width: '300px', height: '300px'}} />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect &amp; Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Grid>
      </>
    )
}
export default Song