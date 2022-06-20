import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/AngelLiPhoto.jpeg";
export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Angel Li</div>
            <div className="brief_description">
              Hi, my name is Angel and I am a rising junior studying Computer Science at Stony Brook University.
              <br></br><br></br>
              Hobbies: Running, Reading, Watching Sports, and of course coding!

            </div>
          </div>
        </div>
      </div>
    );
  }
}
