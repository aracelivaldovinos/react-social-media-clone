import React from "react";
import NavBar from "./NavBar.js"
import Profile from "./Profile.js"
import ProfileDesc from "./ProfileDesc"
import NewsList from "./NewsList"
import FriendsCard from "./FriendsCards.js"

function Body(){
  return(
    <React.Fragment>
      <div class="container">
        <div class="row">
          <NavBar />
          <div class="col">
            <Profile />
            <br></br>
            <ProfileDesc />
          </div>
          <div class="col-5">
            <NewsList />
          </div>
          <div class="col">
            <FriendsCard />
          </div>
        </div>
      </div>  
      
    </React.Fragment>
  );
}

export default Body;