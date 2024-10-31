import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbo } from "./Jumbo";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
	<>
		<div className="container-fluid text-center">
			<div>
				<Navbar/>
			</div>	
			<div className="container text-start">
				<Jumbo />
				<div className="wrapper d-flex mt-4 justify-content-between" style={{flexWrap: "wrap"}}>
				<Card />
				<Card />
				<Card />
				<Card />
				</div>
			</div>
		</div>
			<div className="container-fluid text-center">
				<Footer />
			</div>
	</>
	);
};

export default Home;
