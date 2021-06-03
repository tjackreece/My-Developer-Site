import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Contact = (props) => {
	return (
		<>
			<Header />

			<div className="contactDiv">
				<h1>Reaching me is easy</h1>
				<p>Twitter: {props.data.Twitter}</p>
				<p>Email: {props.data.email}</p>
				<p>Github: {props.data.github}</p>
				<p>Phone: {props.data.phone}</p>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
