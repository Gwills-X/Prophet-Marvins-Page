import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consulting from "./pages/Consulting";
import Footer from "./components/Footer";
import Invite from "./pages/Invite";
import Partner from "./pages/Partner";

const App = () => {
	return (
		<div>
			<Router>
				<nav>
					<Header />
				</nav>
				<div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/consulting' element={<Consulting />} />
						<Route path='/invite' element={<Invite />} />
						<Route path='/partner' element={<Partner />} />
					</Routes>
				</div>
				<footer>
					<Footer />
				</footer>
			</Router>
		</div>
	);
};

export default App;
