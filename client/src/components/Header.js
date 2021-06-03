import React from "react";
import "../App.css";

const Header = () => {
	return (
		<div className="headerDiv">
			<div className="nameContainer">
				<h1>dev.Tim</h1>
			</div>

			<div class="navbar">
				<a class="nav-link nav-link-grow-up" href="home">
					Home
				</a>
				<a class="nav-link nav-link-grow-up" href="about">
					About
				</a>
				<a class="nav-link nav-link-grow-up" href="projects">
					Projects
				</a>
				<a class="nav-link nav-link-grow-up" href="contact">
					Contact
				</a>
			</div>
		</div>
	);
};

export default Header;
