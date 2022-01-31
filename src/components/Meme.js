import React from "react";
import "./meme.css";

const Meme = () => {
	return (
		<main>
			<form className="form">
				<input className="form--input" type="text" placeholder="top text" />
				<input className="form--input" type="text" placeholder="bottom text" />
				<button type="submit" className="form--btn">
					Get a new meme image 🖼
				</button>
			</form>
		</main>
	);
};

export default Meme;
