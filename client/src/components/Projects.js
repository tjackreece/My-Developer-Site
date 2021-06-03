import React from "react";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

const Projects = (props) => {
	const [showData, setShowData] = useState(false);
	const showMore = () => {
		setShowData(!showData);
	};
	return (
		<>
			<Header />
			<div className="projectDiv">
				<h1 className="projectH1">Projects</h1>
				{props.websites.websites.map((site) => {
					return (
						<div className={site.classname} key={site.id}>
							<div className={site.classname2}>
								<h1>{site.name}</h1>
								<p>{site.description}</p>
								<div className="languagesDisplayed">
									<p>{site.languagesDisplayed[0]}</p>
									<p>{site.languagesDisplayed[1]}</p>
									<p>{site.languagesDisplayed[2]}</p>
									<p>{site.languagesDisplayed[3]}</p>
									<p>{site.languagesDisplayed[4]}</p>
									<p>{site.languagesDisplayed[5]}</p>
								</div>
								<button className="btn" onClick={showMore}>
									View Site Responsibillity And Url
								</button>
								{showData ? (
									<>
										<h3 className="responsibilityh3tag">
											Responsibilities on this project:
										</h3>
										<p className="responsibilityPTag">
											{site.Responsibilities}
										</p>
										<a className="aTag" href={site.url}>
											View Site Here
										</a>
									</>
								) : null}
							</div>
							{showData ? (
								<div id={site.classname2}>
									<img src={site.image} width="800px" alt="Preview of Site" />
								</div>
							) : null}
						</div>
					);
				})}
			</div>
			<Footer />
		</>
	);
};

export default Projects;
