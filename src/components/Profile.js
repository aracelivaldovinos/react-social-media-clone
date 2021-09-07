import React from "react";

function Profile(){
  return(
    <React.Fragment>
      <div id="profile-container">
        <div id="profile-pic">
          <img id="profile-pic" src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="75" height="75"/>
        </div>
        <div id="profile-name">
          <h5>Kellie A. Corrigan</h5>
        </div>
        <div class="ProfileButtons">
          <a href="#tweets">Tweets</a>
          <a href="#following">Following</a>
          <a href="#Followers">Follwers</a>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default Profile;