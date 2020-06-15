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
                
                       <h4 id='junior'> Gafenco Silviu Bogdan | Junior Web Developer |</h4> 
                   
                <HeaderButtons
                    text='Resume' 
                    selected={isSelected(pathname, 'resume')}
                    path='/'
                />  
                <HeaderButtons
                    text='My work' 
                    selected={isSelected(pathname, 'work')}
                    path='work'
                />    

                <HeaderButtons
                    text='About Me' 
                    selected={isSelected(pathname, 'about')}
                    path='about'
                />  

            </div>
      
        );
    }


