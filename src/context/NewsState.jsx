import React, { useState } from "react";
import NewsContext from "./newsContext";
import { apiForHeadlines, fetchData } from "../utils/fetchData";

const NewsState = (props) => {
  const [allNewsValue, setAllNewsValue] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  const getNews = (url) => {
    setLoadingState(true);
    fetchData(url).then((data) => {
      setAllNewsValue(data.data.articles);
      setLoadingState(false);
    });
  };

  React.useEffect(() => {
    getNews(apiForHeadlines);
  }, [setAllNewsValue]);

  return (
    <NewsContext.Provider
      value={{
        allNews: [allNewsValue, setAllNewsValue],
        loading: [loadingState, setLoadingState],
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
