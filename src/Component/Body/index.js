import React, { useRef } from "react";
import logo from './images/logo.jpg';
import './style.css';
import About from '../About/index' 
import ContactUs from "../ContactUs";
import Scholarship from "../Scholarship";
const Body = (props) => {
    const about = useRef(null);
    const contactUs = useRef(null);
    const toAbout = () =>{
        window.scrollTo({
            top:about.current.offsetTop,
            behavior:"smooth"
        });
    }
    const toContactUs = () =>{
        window.scrollTo({
            top:contactUs.current.offsetTop,
            behavior:"smooth"
        });
    }
    return(
        <div>
            <div class='header'>
                <img src={logo} alt='logo' class='logo'></img>
                <button className='inlineBlock' onClick={toContactUs}>Contact Us</button>
                <button className='inlineBlock' onClick={toAbout}>About</button>
            </div>
            <Scholarship/>
            <div ref={about}><About/></div>
            <div ref={contactUs}><ContactUs/></div>
        </div>
    );
};

export default Body;