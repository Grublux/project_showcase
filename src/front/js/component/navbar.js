import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { AppContext } from "../layout";

export const Navbar = () => {
	const { menuStatus, setMenuStatus, flip, setFlip } = useContext(AppContext)

	const runFade = () => {
		const props = useSpring({
			to: { opacity: 1 },
			from: { opacity: 0 },
			reset: true,
			reverse: flip,
			delay: 3000,
			// onRest: () => setFlip(!flip)
		});

	}



	return (
		<nav className="navbar navbar-light fancyGrey">
			<div className="row d-flex justify-content-start ps-4">
				<div className="col-1 navItem"
					onClick={() => {
						setMenuStatus(!menuStatus);
						setFlip(!flip)
						runFade();
					}}
				>
					<i class="fa-solid fa-bars fs-3"></i>
				</div>
			</div>
		</nav>
	);
};
