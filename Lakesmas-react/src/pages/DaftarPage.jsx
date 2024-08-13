import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

export default function DaftarPage() {
  let navigate = useNavigate();
  return (
<div className='wrapper'>
        <br />
        <br />
        <br />
        
        <div className='wpr'>
          <h1>Wellcome</h1>
        <form action=''>
            <div className="input-box">
            <MdEmail className='icon' />
                <input type="text" placeholder='Email' />
            </div>
            <div className="input-box">
            <FaPhoneAlt className='icon' />
                <input type="text" placeholder='Phone Number' />
            </div>
            <div className="input-box">
            <FaLock className='icon' />
                <input type="password" placeholder='Password' />
            </div>
            <div className="input-box">
            <FaLock className='icon' />
                <input type="password" placeholder='Confrim Password' />
            </div>
            <button type='submit' onClick={()=>navigate('/login')}>Daftar</button>
        </form>
        </div>
    </div>
  )
}

