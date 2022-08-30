import React from 'react'
import port from '../images/portrait.jpg'
import { HiMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const Info = () => {
    return (
        <div className='info'>
            <img src={port} alt='portrait' className='portrait' />
            <div className='title'>
                <h1>Kristaps Briks</h1>
                <p>Frontend developer</p>
                <small>University of Latvia</small>
            </div>
            <div className='buttons'>
                <a href="mailto:user@inbox.lv" ><HiMail className='mail-icon'/>Email</a>
                <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className='linked-icon'/>LinkedIn</a>
            </div>
        </div>
    )
}

export default Info