import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { AppContext } from "../layout";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-reveal";

export const Home = () => {
	// const { store, actions } = useContext(Context);

	const { menuStatus, setMenuStatus, flip, setFlip } = useContext(AppContext)

	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		reverse: flip,
		delay: 3333,
	});



	return (
		<div className="row mainContainer">

			<div className="col-2 fancyGrey"
				style={menuStatus ? { display: "block" } : { display: "none" }}
			>

				<Fade bottom duration={1500}>
					<div className=" fancyGrey">
						<div className="text-white ps-4 py-3 menuItem"><i class="fa-solid fa-qrcode"></i>
							<span className="ps-2">Project Showcase</span></div>
					</div>
					<div className=" fancyGrey">
						<div className="text-white ps-4 py-3 menuItem"><i class="fa-solid fa-qrcode"></i>
							<span className="ps-2">Resume</span></div>
					</div>
				</Fade>

			</div>
			<div className=" col-2 bg-secondary"
				style={menuStatus ? { display: "none" } : { display: "block" }}
			></div>
			<div className="col-10 bg-secondary">
				<animated.div style={props}>
					Hello animated world!
				</animated.div>

			</div>
		</div>
	);
};
