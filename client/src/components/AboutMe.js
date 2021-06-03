import React from "react";
import Header from "./Header";

const AboutMe = () => {
	return (
		<>
			<Header />
			<div className="aboutMeDiv">
				<div>
					<h1 className="aboutMeh1">
						I design <span>&</span> build <span>digital products</span>
					</h1>
				</div>
				<div className="aboutMe">
					<p>
						Ever since I was a kid I loved solving puzzles. When I grew up a bit
						I fell in love with mathematics I saw math problems as simple (and
						quite often NOT so simple) puzzles to be solved. Since I also loved
						computers, becoming a web developer was a natural next step in my
						life. For me the satisfaction of solving a difficult problem is a
						reward in and of itself. Experience gained thereafter is a plus.
					</p>
					<p>
						I don’t like to define myself by the work I’ve done. I define myself
						by the work I want to do. Skills can be taught, personality is
						inherent. I prefer to keep learning, continue challenging myself,
						and do interesting things that matter.
					</p>
					<p>
						You can read more about my biography, experience, skills, education
						and much more in the PDF attached bellow:
					</p>
					<a href="/resume">View My Resume Here</a>
					<a href="/projects">View My Projects Here</a>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
