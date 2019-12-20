import React from "react";
import icon from './images/icon.png';
import profile from './images/profile.jpg';
const Titles = () => (
	<div>
		
		<p><img src={profile} size="(max-width: 600px) 100vw, 600px" className="profile_image"></img></p>
		<p><img src={icon} alt="icon" size="(max-width: 600px) 100vw, 600px" className="main_icon"></img></p>
		<p><h1 className="title-container__title">Global Weather </h1>
		<h3 className="title-container__subtitle">Make it Simple</h3>
		<h4 >Abderrahmane CHIGAR</h4></p>
		
	</div>
);

export default Titles;
