import React from "react";
import "../App.css";
import Header from "../components/Header";

const Home = () => {
	return (
		<>
			<Header />

			<div className="homeDiv">
				<div className="homeContainer">
					<h1 id="hello">Hello,</h1>
					<h1 id="i_am">I am</h1>
					<h1 id="tim">Tim Jackreece</h1>
					<p id="career">Front-End Web Developer</p>
				</div>

				<div className="profilePic"></div>
			</div>
		</>
	);
};

export default Home;
