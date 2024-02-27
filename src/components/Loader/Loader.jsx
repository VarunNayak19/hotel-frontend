import React from 'react'
import "./Loader.scss"
import doughnut from "../../assets/doughnut-404.png"
const Loader = () => {
  return (
    <div className='loader-container'>
        <img src={doughnut} alt="doughnut" className='doughnut-css rotate-image' />
    </div>
  )
}

export default Loader