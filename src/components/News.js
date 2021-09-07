import React from "react";
import PropTypes from "prop-types";

function News(props){
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-3" id="news-image">
          {props.image}
        </div>
        <div class="col-7" id="news-info">
        {props.name}
        <br/>
        {props.description}
        </div>
        <hr/>
      </div>
    </React.Fragment>
  );
}

News.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
}

export default News;