import React from 'react';
import './Skills.css'

export const Skills = () => {
    return (
        <div className='container'>
           {/* <div className='first-div'>
                    <h4>Carrer Objectives:</h4>
                    <br/>
                    Beginner in the field of JavaScript/HTML5/CSS3, I am motivated and eager to follow a career in Web Development.  
              

                    <h4>Professional Trainings:</h4>
                        <br/>
                    <strong>The Informal School of IT</strong> 
                        <br/>
                    <strong> Web Development Module</strong> 
                        <br/>
                   <strong>08.11.2019 – 25.05.2020  </strong>  
                </div> */}

                <div className='soft-skills'>
                    <h4>My soft skills</h4>
                    <br/>
                    <ul className='soft'>
                    <li className='animate'>Analytical mindset <span className='percentage-one'>80%</span> </li>
                    <br/>
                    <li className='animate'>Communication skilled <span className='percentage-two'>90%</span></li>
                    <br/>
                    <li className='animate'>Attentive to details <span className='percentage-three'>100%</span></li>
                    <br/>
                    <li className='animate'>Creative thinking <span className='percentage-four'>85%</span></li>
                    <br/>
                    <li className='animate'>Problem solving <span className='percentage-five'>75%</span></li>
                    <br/>
                    <li className='animate'>Teamwork abilities<span className='percentage-three'>100%</span> </li>
                    </ul>
                </div>

                <div className='hard-skills'>
                    <h4>My hard skills</h4>
                    <br/>
                    <ul className='hard'>
                        <li>JavaScript<hr className='javascript-line'/> 88% </li>
                        <br/>
                        <li>ReactJS <hr className='react-line'/> 86%</li>
                        <br/>
                        <li>CSS<hr className='css-line'/> 83%</li>
                        <br/>
                        <li>HTML <hr className='html-line'/> 88%</li>
                        <br/>
                        <li>OOP <hr className='oop-line'/> 81%</li>
                        <br/>
                        <li>Flexbox <hr className='flexbox-line'/> 84%</li>
                        <br/>
                        <li>GitHub <hr className='github-line'/> 90%</li>
                    </ul>
                </div>

        </div>
    );
}


