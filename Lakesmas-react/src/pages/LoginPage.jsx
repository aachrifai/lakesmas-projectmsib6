import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useNavigate} from "react-router-dom"


export default function LoginPage() {
    let navigate = useNavigate();
return (
<div className='wrapper'>
        <br />
        <br />
        <br />
        <div className='wpr'>
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
            <FaUserAlt className='icon' />
                <input type="text" placeholder='Username' />
            </div>
            <div className="input-box">
            <FaLock className='icon' />
                <input type="password" placeholder='Password' />
            </div>

            <div className="rememmber-forgot">
                <label htmlFor=""><input type="checkbox" />Rememmber me</label>
                <a href="#">Forgot password</a>
            </div>

            <button type='submit' onClick={()=>navigate('/home')}>Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href=""  onClick={()=>navigate('/Daftar')}>Register</a></p>
            </div>
        </form>
        </div>
    </div>
)
}






