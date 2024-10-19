import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const Navbar = ({setShowLogin}) => {

    const[collections,setcollections] = useState("home");
    const{getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
        <ul className="navbar-collections">
            <Link to='/' onClick={()=>setcollections("home")} className={collections==="home"?"active":""}>Home</Link>
            <a href='#explore-collections' onClick={()=>setcollections("collections")} className={collections==="collections"?"active":""}>Collections</a>
            <a href='#app-download' onClick={()=>setcollections("mobile-app")} className={collections==="mobile-app"?"active":""}>Mobile app</a>
            <a href='#footer' onClick={()=>setcollections("contact-us")} className={collections==="contact-us"?"active":""}>Contact us</a>
            <a href="http://localhost:4400/add" rel="noopener noreferrer">ADMIN-PANEL</a>

        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img className='basket' src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount(0)===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className = "navbar-profile">
                <img className='user' src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>}
            
        </div>
    </div>
  )
}

export default Navbar