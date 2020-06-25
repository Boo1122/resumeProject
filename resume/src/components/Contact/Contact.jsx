import React from 'react';
import './Contact.css'
import { SocialFollow } from '../SocialFollow';



export function Contact() {
    
    return (
        <div>
        <div className='detailed'>
            <section>
                <blockquote className='contact'>
                    Address: Colinei Street, no. 26, Cluj-Napoca
                    <br/>
                    Email: bbb_slv@hotmail.co.uk 
                    <br/>
                    Phone: +40 742.653.600   
                    <br/>
                    <div className='resume'>
                    <a href="./public/GAFENCO SILVIU BOGDAN CV.pdf" download>Download my resume</a>
                    </div>
                </blockquote>
            </section>
        </div>
        <div>
            <SocialFollow />
        </div>
        </div>
    );
}



