import React, { useState } from "react";
import { MemesData } from "../memesData";
import "./meme.css";

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages] = useState(MemesData);

	const getMemeImage = () => {
		const memesArray = allMemeImages.data.memes;
		const randIdx = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randIdx].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
		console.log(meme);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	};

	return (
		<main>
			<div className="form">
				<input
					type="text"
					className="form--input"
					placeholder="Top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					className="form--input"
					placeholder="Bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button className="form--btn" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
				<img className="meme-img" src={meme.randomImage} alt="meme" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
};

export default Meme;
