import React from 'react';
import './Contact.css'
import { SocialFollow } from '../SocialFollow';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';



 class Contact extends Component {
    render() {
        return (
            <div id='container'>
            <div className='detailed'>
            <section>
                <blockquote className='contact'>
                   <h4> My contact information:</h4>  

                    <p>Address: Colinei Street, no. 26, Cluj-Napoca</p> 

                    <p>Email: bbb_slv@hotmail.co.uk</p>

                    <p>Phone: +40 742.653.600 </p> 
                    
                    <div className='resume'>
                    <a download='' href="/resume/GAFENCO SILVIU BOGDAN CV.pdf">DOWNLOAD MY RESUME </a>
                    </div>
                </blockquote>
            </section>
        </div>
        <div>
            <SocialFollow />
        </div>
       

        
        <Map google={this.props.google} zoom={8}>
 
            <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    kakakakk
                </div>
            </InfoWindow>
        </Map>
         </div>
        
        
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAEI6AIaZx5Dl2Zo-eWmqEIO1K3HwyB94Q")
  })(Contact)

