import React from 'react'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://twitter.com/'><AiFillTwitterSquare /></a>
            <a href='https://www.facebook.com/'><AiFillFacebook /></a>
            <a href='https://www.instagram.com/'><FaInstagramSquare /></a>
            <a href='https://github.com/'><FaGithubSquare /></a>
        </div>
    )
}

export default Footer