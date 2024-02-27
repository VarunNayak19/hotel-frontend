import React from 'react'
import "./nopage.scss"
import doughnut from "../../assets/doughnut-404.png";
const NoPage = () => {
  return (
    <div className='no-page-container'>
        <div className="title"><b>Oops!</b> looks like you're off the menu</div>
        <div className="image-section">
            <div className="text">4</div>
            <img src={doughnut} alt="doughnut" className='doughnut-img rotate-image' />
            <div className="text">4</div>
        </div>
        <div className="subtitle-section">Hungry for something delicious? It seems like the page you're craving for isn't on our menu today. Our chefs are working hard to whip up a fresh batch of content</div>
    </div>
  )
}

export default NoPage;