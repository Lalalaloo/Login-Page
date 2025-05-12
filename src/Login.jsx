import './Login.css';
import React from "react";
import { FaUser, FaLock } from 'react-icons/fa';
import Head from './Components/head';

export default function Login(){
    return(
        <div className='container'>
            <div className='rect'></div>
            <div className='form-box login'>
                <form action = "">
                    <Head/>
                    <h2 className='welcome'> ˗ˏˋ Welcome Back ˎˊ˗ </h2>
                    <div className='input-box'>
                        <input type = "text"
                        PlaceHolder = "Username" required/>
                        <FaUser className='icon'/>
                    </div>
                    
                    <div className='input-box'>
                        <input type = "password"
                        PlaceHolder = "Password" required/>
                        <FaLock className='icon'/>
                    </div>

                    <div className='extra'>
                        <input type="checkbox" id="rememberMe"/>
                        <label htmlFor="rememberMe"> Remember Me</label>
                        <a href="#"> Forgot Password?</a>
                    </div>

                    
                    <button type = "submit">Log-In</button>

                    <div className='register'>
                        <p>No account? <a href = "#">Register</a>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    )
}
