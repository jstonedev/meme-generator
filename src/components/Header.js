import React from "react";
import TrollFace from "../assets/troll-face.png";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header--logo_container">
				<img className="header--logo_img" src={TrollFace} alt="troll face" />
				<span className="header--logo_title">Meme Generator</span>
			</div>
			<h2 className="header--title">React Course - Project 3</h2>
		</header>
	);
};

export default Header;
