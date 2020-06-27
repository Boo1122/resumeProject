import React from 'react';
import './Contact.css'
import { SocialFollow } from '../SocialFollow';



export function Contact() {
    
    return (
        <div>
        <div className='detailed'>
            <section>
                <blockquote className='contact'>
                   <h4> My contact information:</h4>  

                    <p>Address: Colinei Street, no. 26, Cluj-Napoca</p> 

                    <p>Email: bbb_slv@hotmail.co.uk</p>

                    <p>Phone: +40 742.653.600 </p> 
                    
                    <div className='resume'>
                    <a download='' href="/resume/GAFENCO SILVIU BOGDAN CV.pdf">Download my resume</a>
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



