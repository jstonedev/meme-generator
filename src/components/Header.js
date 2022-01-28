import React from "react";
import TrollFace from "../assets/troll-face.png";
import "./header.css";

const Header = () => {
	return (
		<nav className="nav">
			<div className="nav--logo_container">
				<img className="nav--logo_img" src={TrollFace} alt="troll face" />
				<span className="nav--logo_title">Meme Generator</span>
			</div>
			<h2 className="nav--title">React Course - Project 3</h2>
		</nav>
	);
};

export default Header;
