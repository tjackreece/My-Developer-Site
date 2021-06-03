import Home from "../src/components/Home";
import AboutMe from "../src/components/AboutMe";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Websites } from "../src/store/store.js";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/Contact">
						<Contact data={Websites} />
					</Route>
					<Route path="/Projects">
						<Projects websites={Websites} />
					</Route>
					<Route path="/About">
						<AboutMe />
					</Route>
					<Route path="/Home">
						<Home />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
