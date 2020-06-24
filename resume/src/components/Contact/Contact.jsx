import React from 'react';
import './Contact.css'


export function Contact() {
    
    return (
        <div className="book">
            <section className='part1'>
                <blockquote className='contact'>
                    Address: Colinei Street, no. 26, Cluj-Napoca
                    <br/>
                    Email: bbb_slv@hotmail.co.uk 
                    <br/>
                    Linkedin: https://www.linkedin.com/in/bogdan-gafenco-6a68ab189/ 
                    <br/>
                    Phone: +40 742.653.600   
                </blockquote>

                <article className='first-article'>
                    <h4>Carrer Objectives:</h4>
                    <br/>
                    Beginner in the field of JavaScript/HTML5/CSS3, I am motivated and eager to follow a career in Web Development.  
                </article>

                <article className='second-article'>
                    <h4>Professional Trainings:</h4>
                        <br/>
                    <strong>The Informal School of IT</strong> 
                        <br/>
                    <strong> Web Development Module</strong> 
                        <br/>
                   <strong>08.11.2019 – 25.05.2020  </strong>  
                  
                </article>

                
               
                   
                <article className='third-article'>
                <strong><em>GIT:</em></strong> basic principles and commands.  
                <br/>
                   <strong><em>WEBPACK:</em></strong> how to kick-start a project.  
                <br/> 
                <strong><em>HTML:</em></strong> Attributes - Canvas, SVG - Elements 

                <br/>
               
                <strong><em>CSS:</em></strong> Positioning and Layout (box model)  
                 <br/>
                 <strong><em>CSS3:</em></strong> Flexbox - Responsive Web Design (media queries)  
                 <br/>
                <h4 className='h4'>JAVASCRIPT ADVANCED</h4>
                 <br/>
                 <strong><em>Functions:</em></strong> Advanced Topics (function scope, closure, hoisting) 
                 <br/>
                 <strong><em>Objects:</em></strong> Advanced Topics (properties, methods, prototypes)  ECMAScript 6 (scoping, let, arrow functions, classes) 
                 <br/>
                 <strong><em>Javascript BOM:</em></strong> (window, screen, location, history, navigation, timing, cookies) 
                 <br/>
                 <strong><em>Ajax:</em></strong> XMLHttpRequest, request, response
                 <br/>
                 <strong><em>DOM:</em></strong> methods, document, elements, html, css, events, nodes, navigation
                 <br/>
                 <strong><em>JSON:</em></strong> syntax, types, objects, arrays, parse, stringify, JSONP
                 <br/>
                 <strong><em>Client Storage:</em></strong> local and session storage
                  <br/>
                  <strong><em>Object Oriented Programming</em></strong>

                   <br/>
                   <h4 className='h4'> INTRODUCTION TO ReactJS</h4>
                    <br/>
                    <strong><em>Environment Setup:</em></strong> Components (props, state, lifecycle) 
                    <br/>
                    <strong><em>Forms: </em></strong> refs, routing 
                    <br/>
                    <strong><em>Events: </em></strong> DOM events, component events
                </article>
            </section>


            <section className='part2'>
                <h4>My soft skills are the following:</h4>
                <br/>

                <div>
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

                <br/>
                <h1>My hard skills are the following:</h1>
                <br/>
                <div className='hard-skills'>
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
                <br/>
                    <h4> Languages</h4>
                    <div> 
                        <ul className='level'>
                            <li>BEGINNER</li>
                            <li>MEDIUM</li>
                            <li>ADVANCED</li>
                            <li>NATIVE</li>
                        </ul>
                    </div>
                <div className='languages'>
                    <div className='wrapper'>
                        <div>Romanian <p className='bounce1'></p></div>
                        <div>English <p className='bounce2'> </p> </div>
                        <div>Spanish <p className='bounce3'></p> </div>
                    </div>
                </div>
                <br/>

                    <h4>Hobbies</h4>
                <div>
                    <ul className='hobbies'>
                        <li>Table tennis</li>
                        <li>Swimming</li>
                        <li>Gaming: World of Warcraft, Knight Online</li>
                        <li>Pool</li>
                        <li>Football</li>
                    </ul>
                </div>

                    <h4 className='education'>Education</h4>
                    <div>
                        <br/>
                        <p>Graduated without the Bachelor's Degree</p>
                         <p>From: 01.10.2012 - Until: 25.06.2015 </p>
                        <p>BABEȘ-BOLYAI UNIVERSITY, Faculty of Letters, Cluj-Napoca </p>
                    </div>




              
            </section>
        </div>
    );
}



