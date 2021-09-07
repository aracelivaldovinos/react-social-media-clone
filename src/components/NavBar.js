import React from "react";


function NavBar(){
  return (
    <React.Fragment>
      <div class="row" id="nav-bar">
        <div class="col">
          <div class="NavButtons">
            <a id="home" href="#home">Home</a>
            <a id="notifications" href="#notifications">Notifications</a>
            <a id="messages" href="#messages">Messages</a>
          </div>
        </div>
        <div class="col">
          <div class="NavSearch">
            <input type="search" id="search-input" placeholder="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tweet</button>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>


  );
}
export default NavBar;