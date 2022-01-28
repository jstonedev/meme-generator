import React from "react";
import TrollFace from "../assets/troll-face.png";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<img className="header--img" src={TrollFace} alt="troll face" />
			<h2 className="header--title">Meme Generator</h2>
			<h4 className="header--project">React Course - Project 3</h4>
		</header>
	);
};

export default Header;
