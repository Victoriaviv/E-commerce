import React from "react";
import { useState } from "react";
import"../styles/login.css";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({changeModal})=> {

    return(
        <div className="formcontainer">
            <form className="form" >
                <IoCloseSharp  onClick={changeModal}/>
                <input type="text" placeholder="enter username" required/>
                <input type="email" placeholder="enter email" required/>
                <button type="login"className="button">Login</button>
            </form>
        </div>
    );
} 
export default Login ;