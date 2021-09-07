import React from "react";
import PropTypes from "prop-types";

function Friends(props){
  return(
    <React.Fragment>
       <div class="row">
        <div class="col-3" id="news-image">
          {props.image}
        </div>
        <div class="col-7" id="news-info">
        {props.name}
        <br/>
        {props.button}
        </div>
      </div>
    </React.Fragment>
  );
}
Friends.propTypes = {
  name: PropTypes.string.isRequired
}

export default Friends;