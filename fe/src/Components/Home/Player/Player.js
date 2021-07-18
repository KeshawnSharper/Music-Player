import React from "react"
import "./Player.css"
const Player = () => {
    return (
        <div className="container">
        <div className="player">
          <div className="player-head">
            <img src="https://s5.postimg.cc/ma18zvv6v/cover.jpg" alt="cover" className="song-cover" />
          </div>
          <div className="player-body">
            <img src="https://s5.postimg.cc/ma18zvv6v/cover.jpg" alt="cover" className="song-cover" />
            <div className="album-info">
              <span className="album-title">
                Ae Dil Hai Mushkil
              </span>
              <span className="song-title">
                Tu Safar Mera
              </span>
              <span className="player-controls">
                <i className="fa fa-home" />
                <i className="fa fa-random active" />
                <i className="fa fa-retweet" />
                <i className="fa fa-clock-o active" />
              </span>
            </div>
          </div>
          <div className="player-footer">
            <div className="player-seekbar">
              <span className="player-knot" />
            </div>
            <div className="song-controls">
              <span className="current-duration">
                00:03
              </span><span className="play">
                <i className="fa fa-play" />
              </span><span className="total-duration">
                04:03
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Player