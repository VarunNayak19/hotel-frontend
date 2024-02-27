import React, { useEffect, useState } from 'react';
import "./Header.scss"
import Image from '../Image/Image';
import Logo from "../../assets/japanese-food.svg";
import axios from "axios"
import { baseUrl } from '../../url/url';
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
    const [navButtons, setnavButtons] = useState([]);
    const [selectedNav, setselectedNav] = useState();
    const location = useLocation();
    const navigate = useNavigate();



    useEffect(() => {
        getNavFn();
    }, []);
    useEffect(() => {
        const pathString = location.pathname; 
        const ispathPresent = navButtons.some(item => item?.url === pathString);
        console.log("ispathPresent",ispathPresent,pathString);
        if(ispathPresent){
            setselectedNav(findObjectByKey(pathString,navButtons));
        }
    }, [navButtons,location.pathname])
    

    const getNavFn = () => {
        console.log("getNavFn",baseUrl)       
       // Replace this string with the one you want to check
        axios.get(`${baseUrl}/nav`)
            .then((res) => setnavButtons(res.data.data));
    }
    const navigateFn = (ele) => {
        setselectedNav(ele);
        navigate(ele.url);

    }
    const findObjectByKey = ( value, arr) => {
        return arr.find(obj => obj.url === value);
      };
  return (
    <div className='header-container'>
<div className="logo-section pointer">
    <Image src={Logo} alt="logo" className="logo-css" />
    <span>Tasty Trail</span>
</div>
<div className="nav-section">
    <div className={`background-css background-css-${selectedNav ? selectedNav.navId : 'empty'}`}></div>
    {
        navButtons.map((elem) => (
            <>
            <div className='nav-items pointer' onClick={() => navigateFn(elem)}>{elem?.nav}</div>
            </>
        ))
    }
</div>
<button className="book-table-button pointer" onClick={() => navigate("/book")}>Book A Table</button>
    </div>
  )
}

export default Header