import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.css";

export function SocialFollow() {
	return (
		<div className='social'>
			<h4>Contact me here:</h4>
			<a href='https://www.facebook.com/gafenco.bogdan/'>
				<FontAwesomeIcon icon={faFacebook} size='3x' />
			</a>
			<a href='https://www.linkedin.com/in/bogdan-gafenco-6a68ab189/ '>
				<FontAwesomeIcon icon={faLinkedin} size='3x' />
			</a>
			<a href='https://www.instagram.com/gafencobogdan/'>
				<FontAwesomeIcon icon={faInstagram} size='3x' />
			</a>
		</div>
	);
}
