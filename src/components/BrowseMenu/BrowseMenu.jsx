import React, { useEffect, useState } from 'react'
import "./BrowseMenu.scss";
import axios from "axios"
import { baseUrl } from '../../url/url';
import { useNavigate } from 'react-router-dom';

const BrowseMenu = () => {
  const navigate = useNavigate();
    const [browseMenu, setbrowseMenu] = useState([]);
    useEffect(() => {
      getBrowseMenuFn()
  }, []);

  const getBrowseMenuFn = () => {
      axios.get(`${baseUrl}/browseMenu`)
          .then((res) => setbrowseMenu(res.data.data));
  }
  const exploreMoreFn = (e) => {
    localStorage.setItem("explore-redirect",e.path);
    navigate("/menu");
  }
  console.log(browseMenu);
  return (
    <div id='browse-menu' className='browse-menu-container'>
        <div className="title">Browse Our Menu</div>
        <div className='card-group'>
          {
              browseMenu && browseMenu.map((e) => (
                  <>
                  <div className="card-container">
                    <img src={e?.image} alt="" className='img-icn-css' />
                    <div className='text-div'>
                      <div className="title">{e?.title}</div>
                      <div className="subtitle">{e?.description}</div>
                    </div>
                    <button className='explore-menu-btn' onClick={() => exploreMoreFn(e)}>Explore Menu</button>
                  </div>
                  </>
              ))
          }
        </div>
    </div>
  )
}

export default BrowseMenu