import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';
import {FaRegArrowAltCircleUp} from "react-icons/fa";



const footer = () => {
  return (
    <>
    
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div id="" className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, deserunt a, dolorum ipsa ipsam non sit nostrum tenetur corrupti architecto perferendis quibusdam quis reiciendis. Corrupti aliquam vero ratione iusto perferendis pariatur corporis, quae facilis architecto repudiandae aperiam tenetur! Labore consequuntur voluptas exercitationem soluta quis fuga aperiam fugit iusto magnam nam eos quibusdam quia, est impedit inventore et, rerum magni debitis in dolorum eum doloribus beatae eligendi? Similique sint quisquam mollitia exercitationem architecto, laudantium est ad, nostrum blanditiis nisi doloribus distinctio optio adipisci magni officia, animi quam et incidunt numquam earum deserunt eius voluptatem assumenda? Porro odit quo deleniti optio deserunt.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div id="" className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home </li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy&Policy</li>
                </ul>
            </div>
            <div id="" className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 987-654-3210</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy-right' style={{textAlign:"center"}}>Copyright 2024 @ Tomato.com - All right reserved</p>
      

    </div>
    </>
  )
}
export default footer
