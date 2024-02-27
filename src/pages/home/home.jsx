import React from 'react'
import "./home.scss";
import Hero from '../../components/Hero/Hero';
import BrowseMenu from '../../components/BrowseMenu/BrowseMenu';
const Home = () => {
  return (
    <div>
        <Hero />
        <BrowseMenu />
    </div>
  )
}

export default Home;