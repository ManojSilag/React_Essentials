import React, { useState, useEffect } from "react";
import SingleSide from "./SingleSide";
import axios from "axios";
import Error from "./Error";

const SideNews = ({ newsFeed }) => {
  const [sideNews, setNews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `http://newsapi.org/v2/${newsFeed}&apiKey=c4b19a63ce34459992e69195eeba49c2`;
    axios
      .get(url)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  const renderItemsList = () => {
    if (!error) {
      return sideNews.map((item, i) => {
        return <SingleSide key={i} item={item} />;
      });
    } else {
      return <Error />;
    }
  };
  return <div className='fd'> {renderItemsList()}</div>;
};

export default SideNews;
