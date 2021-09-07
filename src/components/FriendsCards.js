import React from "react";
import Friends from "./Friends.js"

const masterFriendsCard = [
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Donec eu orci et",
    button: <button type="button" class="btn btn-primary">Button</button>
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Donec eu orci et",
    button: <button type="button" class="btn btn-primary">Button</button>
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Donec eu orci et",
    button: <button type="button" class="btn btn-primary">Button</button>
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Donec eu orci et",
    button: <button type="button" class="btn btn-primary">Button</button>
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Donec eu orci et",
    button: <button type="button" class="btn btn-primary">Button</button>
  }
]

function FriendsCard(){
  return(
    <React.Fragment>
      {masterFriendsCard.map((friends, index) =>
      <Friends image={friends.image}
      name={friends.name}
      button={friends.button}
      key={index}/>
      )}
      
    </React.Fragment>
  );
}

export default FriendsCard;