import React from "react";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Messages from "./pages/Messages";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<Courses />
			<Messages />
		</div>
	);
};

export default Home;
