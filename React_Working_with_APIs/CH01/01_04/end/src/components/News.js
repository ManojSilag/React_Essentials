import React, { useState, useEffect } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

const News = ({ newsFeed }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `http://newsapi.org/v2/${newsFeed}&apiKey=c4b19a63ce34459992e69195eeba49c2`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.articles) {
          setNews(data.articles);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  const renderItems = () => {
    if (!error) {
      return news.map((item, i) => {
        return <NewSingle key={i} item={item} />;
      });
    } else {
      return <Error />;
    }
  };
  return <div className='row'> {renderItems()}</div>;
};

export default News;
