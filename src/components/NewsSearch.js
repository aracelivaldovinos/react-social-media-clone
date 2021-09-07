import React from "react";

function NewsSearch(){
  return(
    <React.Fragment>
      <div class="row">
        <div class="col-3" id="news-submit">
          <button type="submit">Sub</button>
        </div>
        <div class="col-7" id="news-search">
          <form>
            <input type="news-input" id="news-search" placeholder="What's happening?" />
          </form>
        </div>
      </div>
    </React.Fragment> 
  );
}

export default NewsSearch;