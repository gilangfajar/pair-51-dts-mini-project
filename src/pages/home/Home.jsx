import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import List from "../../components/list/List";
import React from 'react';
import Footer from "../../components/footer/Footer";
import requests from '../../requests';
import Banner from "../../components/banner/Banner";

const Home = () => {

    return (
    <div className='home'>
      <Navbar/>
      <Banner />
      <List title="Populer Movies" fetchUrl={requests.fetchPopular} />
      <List title="Continue Watching" fetchUrl={requests.fetchTrending} />
      <List
      title="Netflix Original"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeList={true}
      />
      <List title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <List title="Watch Again" fetchUrl={requests.fetchWatchAgain}/>
      <List title="My List" fetchUrl={requests.fetchMyList}/>
      <Footer/>
    </div>
  );
}

export default Home;