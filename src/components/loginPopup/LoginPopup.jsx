import React, { useState } from 'react'
import "./LoginPopup.css";
import { assets } from '../../assets/assets';


const LoginPopup = ({setShowLogin}) => {
    const[cuurState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{cuurState }</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {cuurState ==="Login" ?<></>:<input type="text" placeholder='your Name' required />}
                <input type="email" placeholder='your email' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{cuurState === "Sign Up" ? "Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing i agree to the three of use & privacy ploicy</p>
            </div>
            {cuurState==="Login"? <p onClick={()=>setCurrState("Sign Up")}>create a new account ? <span>Click here</span></p> :  <p onClick={()=>setCurrState("Login")} >Already have an account? <span>Login here</span></p> }
          
          
        </form>
      
    </div>
  )
}

export default LoginPopup
