import React from 'react';
import PopularMovie from '../components/PopularMovie';
import Header from '../components/Header';
import api from '../api';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header fetchUrl={api.NOW_PLAYING} imgUrl={api.IMAGE_URL} />
      <PopularMovie fetchUrl={api.POPULAR_URL} imgUrl={api.IMAGE_URL} />
    </>
  );
};
export default Home;
