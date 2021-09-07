import React from "react";
import News from "./News.js"
import NewsSearch from "./NewsSearch"

const masterNewsList = [
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam."
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam."
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam."
  },
  {
    image: <img src="https://st3.depositphotos.com/3236579/16207/v/380/depositphotos_162074616-stock-illustration-avatar-of-catwoman.jpg" alt="profile-pic" width="50" height="50"/>,
    name: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam."
  }
]

function NewsList(){
  return(
    <React.Fragment>
      <div id ="news-list">
        <NewsSearch />
        <hr />
        {masterNewsList.map((news, index) =>
        <News image={news.image}
          name={news.name}
          description={news.description}
          key={index}/>
        )} 
      </div>
      
      
    </React.Fragment>
  );
}

export default NewsList;