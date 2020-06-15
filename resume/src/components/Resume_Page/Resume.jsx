import React from 'react';
import './Resume.css'


export function Resume() {
    
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
                <h2>My soft skills are the following:</h2>
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
                <h2>My hard skills are the following:</h2>
                <br/>
                <div className='hard-skills'>
                    <ul className='hard'>
                        <li>JavaScript</li>
                        <br/>
                        <li>ReactJS</li>
                        <br/>
                        <li>NodeJs</li>
                        <br/>
                        <li>CSS</li>
                        <br/>
                        <li>HTML</li>
                        <br/>
                        <li>OOP</li>
                        <br/>
                        <li>Flexbox</li>
                        <br/>
                        <li>GitHub</li>
                    </ul>
                </div>
                <br/>
                    <h2> Languages</h2>
                    <br/>
                <div>
                    <ul className='languages'>
                        <li>Romanian</li>
                        <li>English</li>
                        <li>Spanish</li>
                    </ul>
                </div>
                <br/>

                    <h2>Hobbies</h2>
                <div>
                    <ul className='hobbies'>
                        <li>Table tennis</li>
                        <li>Swimming</li>
                        <li>Gaming: World of Warcraft, Knight Online</li>
                        <li>Pool</li>
                        <li>Football</li>
                    </ul>
                </div>

                    <h2 className='education'>Education</h2>
                    <div>
                        <br/>
                        <p>Graduated without the Bachelor's Degree</p>
                         <p>From: 01.10.2012 - Until: 25.06.2015 </p>
                        <br/>
                        <p>BABEȘ-BOLYAI UNIVERSITY, Faculty of Letters, Cluj-Napoca </p>
                    </div>




              
            </section>
        </div>
    );
}



