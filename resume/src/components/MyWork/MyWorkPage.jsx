import React from "react";
import "./MyWork.css";

export function MyWorkPage() {
	return (
		<div className='work'>
			<div className='projects'>
				Movie App
				<p className='icon'>
					<a href='https://github.com/Boo1122/Movie-App/tree/master/Movie%20app '>
						Project on Github
					</a>{" "}
				</p>
				<div className='movie'></div>
			</div>
			<div className='projects'>
				MyImdb
				<p className='icon'>
					<a href='https://github.com/Boo1122/IMDB'>Project on Github</a>{" "}
				</p>
				<div className='imdb'></div>
			</div>
			<div className='projects'>
				Resume
				<p className='icon'>
					<a href='https://github.com/Boo1122/resumeProject'>
						Project on Github
					</a>{" "}
				</p>
				<div className='resumes'></div>
			</div>
		</div>
	);
}
