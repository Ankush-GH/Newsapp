import React, { useContext } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardComponent from "../../ui/card/Card";
import NewsContext from "../../context/newsContext";
import Loading from "../../ui/loader/Loading";

const Home = () => {
  const { allNews, loading } = useContext(NewsContext);
  const [allNewsValue, setAllNewsValue] = allNews;
  const [loadingState, setLoadingState] = loading;

  return (
    <>
      <Navbar />
      {loadingState ? (
        <Loading />
      ) : (
        <>
          <h1 className="font-head flex__center">Top Headlines</h1>
          <div className="app__home flex__center">
            {allNewsValue.map((nws) => (
              <CardComponent News={nws} />
            ))}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
