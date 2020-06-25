import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook,
    faLinkedin,
    faInstagram,
 } from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css'
export function SocialFollow() {
    return (
        <div className='social'>
            <a href="https://www.facebook.com">

            <FontAwesomeIcon icon={faFacebook} size='3x'/>    
            </a>
            <a href="https://www.linkedin.com/in/bogdan-gafenco-6a68ab189/ ">

            <FontAwesomeIcon icon={faLinkedin} size='3x'/>    
            </a>
            <a href="https://www.instagram.com">

            <FontAwesomeIcon icon={faInstagram} size='3x'/>    
            </a>
        </div>
    )
}



