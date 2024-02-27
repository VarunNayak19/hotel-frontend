import React, { useEffect, useState } from 'react'
import "./menu.scss"
import axios from "axios"
import { baseUrl } from '../../url/url';
import dummyLocal from "../../assets/dummy-local.png"
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState({});
  const [viewAll, setViewAll] = useState(false);
  const menuTypes = [
    {
      title: "All",
      path: "",
    },
    {
      title: "Breakfast",
      path: "breakfast"
    },
    {
      title:"Main Dishes",
      path:"main-dish"
    },
    {
      title:"Drinks",
      path:"drink"
    },
    {
      title:"Desserts",
      path:"dessert"
    },
]
  useEffect(() => {
    const path = localStorage.getItem("explore-redirect");
    getMenuFn(path !== "" ? path : "");
    setSelectedMenu(path !== "" ? findObjectByKey(path,menuTypes) : menuTypes[0]);
    console.log("menu",selectedMenu);
    localStorage.setItem("explore-redirect","");
    
}, []);

const findObjectByKey = ( value, arr) => {
  return arr.find(obj => obj.path === value);
};
const getMenuFn = (path) => {
  if(path !== ""){
    axios.get(`${baseUrl}/menu/${path}`)
        .then((res) => setMenu(res.data.data));
  }
  else{
    axios.get(`${baseUrl}/menu`)
    .then((res) => setMenu(res.data.data));
  }
}
const selectMenuTypeFn = (type) => {
  setSelectedMenu(type);
  getMenuFn(type.path);

}
//image error handling
const handleImageError = (event) => {
  event.target.onerror = null; // Prevents infinite loop if the dummy image is also broken
  event.target.src = "https://b.zmtcdn.com/data/dish_photos/662/fddb7d88449f5402e7891c5ed3019662.jpg?output-format=webp"; // Replace with your local dummy image path
};
  return (
    <div className='menu-container'>
      <div className="header-section">
        <div className="title">Our Menu</div>
        <div className="subtitle">Discover a tantalizing array of culinary delights on our menu. From savory starters to delectable mains and irresistible desserts, indulge in flavors crafted to perfection.</div>
        <div className="nav-section">
          {
            menuTypes.map((type) => (
              <>
              <div className={`${selectedMenu.title === type.title ? 'menu-type-active':'menu-type'}`} 
              onClick={() => selectMenuTypeFn(type)}>{type.title}</div>
              </>
            ))
          }
        </div>
      </div>
      <div className="menu-content">
      {
        menu && viewAll ? menu.map((menu) => (
          <>
          <div className='card'>
          <img src={menu.image} alt="" className='img' onError={handleImageError}/>
          <div className="content-section">
            <div className="price">₹{menu.price_in_rupees}</div>
            <div className="dish-name">{menu.title}</div>
            <div className="description">{menu.description}</div>
          </div>
          </div>
          </>
        )) :
        menu.slice(0,4).map((menu) => (
          <>
          <div className='card'>
          <img src={menu.image} alt="" className='img' onError={handleImageError}/>
          <div className="content-section">
            <div className="price">₹{menu.price_in_rupees}</div>
            <div className="dish-name">{menu.title}</div>
            <div className="description">{menu.description}</div>
          </div>
          </div>
          </>
        ))
      }
      </div>
      <div className="view-all pointer" onClick={() => setViewAll(!viewAll)}>View {viewAll ? 'Less':'More'}</div>
    </div>
  )
}

export default Menu;