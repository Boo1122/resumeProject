import React from 'react';
import './Header.css'
import { useLocation } from 'react-router-dom'
import { HeaderButtons } from "../Header/Header_Buttons/HeaderButtons";


function isSelected(url, componentName) {
    if (url === "/" && componentName === "resume") return true;
    return url.includes(componentName);
}

    export function Header() {
        const { pathname } = useLocation();
   
        return (
            <div className='header'>
                   
                <HeaderButtons
                    text='Home' 
                    selected={isSelected(pathname, 'home')}
                    path='/'
                />  
                <HeaderButtons
                    text='My work' 
                    selected={isSelected(pathname, 'work')}
                    path='work'
                />    

                <HeaderButtons
                    text='Skills' 
                    selected={isSelected(pathname, 'skills')}
                    path='skills'
                />  

                <HeaderButtons
                    text='Contact' 
                    selected={isSelected(pathname, 'contact')}
                    path='contact'
                />  

            </div>
      
        );
    }


