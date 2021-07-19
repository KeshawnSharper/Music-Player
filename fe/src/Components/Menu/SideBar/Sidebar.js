import React from "react"
import "./SideBar.css"
const SideBar = () => {

    return (
      <>
         <aside className="left-menu">
        <div className="profile">
          <div className="image">
            <img src="https://i.imgur.com/Kui3ozw.png" alt="" />
          </div>
          <span className="fullname">Todd Tuttle</span>
          <span className="username">@toddshark87</span>
        </div>
        <nav className="menu">
          <h5>Browse Media</h5>
          <ul>
            <li className="current">
              <a href="#">
                <ion-icon name="home-outline" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="flame-outline" />
                <span>Top Charts</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="compass-outline" />
                <span>Feed</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="radio-outline" />
                <span>Radio</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="videocam-outline" />
                <span>Video</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="menu">
          <h5>Library</h5>
          <ul>
            <li>
              <a href="#" data-count={112}>
                <ion-icon name="heart-outline" />
                <span>Favourites</span>
              </a>
            </li>
            <li>
              <a href="#" data-count={28}>
                <ion-icon name="musical-notes-outline" />
                <span>Playlists</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="albums-outline" />
                <span>Albums</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="people-outline" />
                <span>Artists</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
  </>
    )
}
export default SideBar