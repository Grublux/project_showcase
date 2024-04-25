import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
// import background from "../../img/background-1.jpg";
import "../../styles/home.css";
import { AppContext } from "../layout";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useSpring, animated } from "react-spring";
// import { Bounce, Fade, Flip, LightSpeed, Reveal, Roll, Rotate, Slide, Zoom, __esModule } from "react-reveal";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

import 'animate.css';

export const Home = () => {
	// const { store, actions } = useContext(Context);

	const { menuStatus, setMenuStatus, flip, setFlip, menuVisible, setMenuVisible } = useContext(AppContext)

	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		reverse: flip,
		delay: 3333,
	});

	const [effect, setEffect] = useState("animate__zoomIn")

	const [arrow, setArrow] = useState("fa-beat-fade")

	const [firstAnimation, setFirstAnimation] = useState("")

	const [visible, setVisible] = useState("none")

	const chooseEffect = () => {
		if (effect == "animate__zoomIn") {
			setEffect("animate__zoomOut")
		}
		if (effect == "animate__zoomOut") {
			setEffect("animate__zoomIn")
		}

	}

	const [mainDiv, setMainDiv] = useState("home")

	// Animation functions below 

	function getPositionXY() {
		let element = document.getElementById("mainBrain");
		let rect = element.getBoundingClientRect();
		document.getElementById('mainBrain').innerHTML =
			'X: ' + rect.x + ', ' + 'Y: ' + rect.y
		console.log("here are the coordinates of mainBrain", rect)
		console.log("here is just the X coord:", rect.x)
	}

	var id = setInterval(frame, 5);

	var test = ("")

	function frame() {
		if (test) {
			clearInterval(id);
		}

		else {
			/* code to change the element style */
		}
	}


	var id = null;
	function myMove() {
		var elem = document.getElementById("mainBrain");
		var x = 0, y = 0;
		clearInterval(id);
		id = setInterval(frame, 60);
		function frame() {
			if (x > 333) {
				clearInterval(id);
			} else {
				x = x + 11;
				y = y + 0.5;
				elem.style.top = y + 'px';
				elem.style.left = x + 'px';
			}
		}
	}



	return (
		<div className="row g-0">
			<div className=" col-3 bg-secondary bg1"
				style={(flip == false) && (menuVisible == false) ? { display: "block", } : { display: "none" }}
			>
				<Zoom>
					<div className="text-white ps-2 fs-2 inPlace"
						style={flip ? { display: "none" } : { display: "block" }}
					>
						<i class="fa-solid fa-brain pe-1"></i>Synaptics
					</div>
				</Zoom>
			</div>
			<div className="col-3 bg-secondary bg1"
				style={flip && menuVisible ? { display: "block" } : { display: "none" }}
			>
				<div className={`ps-4 py-3 fancyGrey animate__animated ${menuStatus}
				${mainDiv == "home" ? "menuItemActive" : "menuItem"}  `}
					onClick={() => { setMainDiv("home") }}
				>
					<i class="fa-solid fa-house"></i>
					<span className="ps-3">Home</span>
				</div>
				<div className={` ps-4 py-3 fancyGrey animate__animated ${menuStatus}
				${mainDiv == "showcase" ? "menuItemActive" : "menuItem"} `}
					onClick={() => { setMainDiv("showcase") }}
				>
					<i class="fa-solid fa-qrcode"></i>
					<span className="ps-3">Project Showcase</span>
				</div>
				<div className={`ps-4 py-3 fancyGrey animate__animated ${menuStatus}
				${mainDiv == "resume" ? "menuItemActive" : "menuItem"} `}
					onClick={() => { setMainDiv("resume") }}
				>
					<i class="fa-regular fa-file"></i>
					<span className="ps-3">Resume</span>
				</div>
				<div className={`ps-4 py-3 fancyGrey animate__animated ${menuStatus}
				${mainDiv == "services" ? "menuItemActive" : "menuItem"} `}
					onClick={() => { setMainDiv("services") }}
				>
					<i class="fa-solid fa-bell-concierge"></i>
					<span className="ps-3">Services</span>
				</div>
				<div className={`ps-4 py-3 fancyGrey animate__animated ${menuStatus}
				${mainDiv == "repositories" ? "menuItemActive" : "menuItem"} `}
					onClick={() => { setMainDiv("repositories") }}
				>
					<i class="fa-solid fa-server"></i>
					<span className="ps-3">Respositories</span>
				</div>
				<div className={`ps-4 py-3 fancyGrey animate__animated ${menuStatus}
				${mainDiv == "contact" ? "menuItemActive" : "menuItem"} `}
					onClick={() => { setMainDiv("contact") }}
				>
					<i class="fa-solid fa-envelope"></i>
					<span className="ps-3">Contact</span>
				</div>
				<div className={`text-white ps-4 py-3 menuItemHolder fancyGrey animate__animated ${menuStatus}`}
				>
					<span className="menuItemSocials px-3 py-2 "><i class="fa-solid fa-x"></i></span>
					<span className="menuItemSocials px-3 py-2 "><i class="fa-brands fa-linkedin"></i></span>
				</div>
			</div>

			<div className=" col-3 bg-secondary bg1"
				style={flip == false && menuVisible ? { display: "block", } : { display: "none" }}
			>
				<Zoom>
					<div className="text-white ps-2 fs-2 inPlace"
						style={flip ? { display: "none" } : { display: "block" }}
					>
						<i class="fa-solid fa-brain pe-1"></i>Synaptics
					</div>
				</Zoom>

				<div className={`text-white ps-4 py-3 menuItemInactive fancyGrey animate__animated ${menuStatus} `}
					onClick={() => { setMainDiv("home") }}
				>
					<i class="fa-solid fa-house"></i>
					<span className="ps-3">Home</span>
				</div>
				<div className={`text-white ps-4 py-3 menuItemInactive fancyGrey animate__animated ${menuStatus} `}>
					<i class="fa-solid fa-qrcode"></i>
					<span className="ps-2">Project Showcase</span>
				</div>
				<div className={`text-white ps-4 py-3 menuItemInactive fancyGrey animate__animated ${menuStatus}`}>
					<i class="fa-regular fa-file"></i>
					<span className="ps-2">Resume</span>
				</div>
				<div className={`text-white ps-4 py-3 menuItemInactive fancyGrey animate__animated ${menuStatus}`}>
					<i class="fa-solid fa-bell-concierge"></i>
					<span className="ps-2">Services</span>
				</div>
				<div className={`text-white ps-4 py-3 menuItemInactive fancyGrey animate__animated ${menuStatus}`}>
					<i class="fa-solid fa-server"></i>
					<span className="ps-2">Respositories</span>
				</div>
				<div className={`text-white ps-4 py-3 menuItemInactive fancyGrey animate__animated ${menuStatus}`}>
					<i class="fa-solid fa-envelope"></i>
					<span className="ps-2">Contact</span>
				</div>
				<div className={`text-white ps-4 py-3 fancyGrey menuItemHolder animate__animated ${menuStatus}`}>
					<span className="menuItemInactive px-3 py-2 ms-3"><i class="fa-solid fa-x"></i></span>
					<span className="menuItemInactive px-3 py-2 ms-4"><i class="fa-brands fa-linkedin"></i></span>
				</div>
			</div>

			{ /* Main Div conditionally renders below  */}

			<div className="col-9 bg-secondary text-white fs-3 ">
				<div className="row">

					{/* <div className="col-1"></div> */}

					{/* Render the home div below  */}

					<div className="col-12 mainCol"
						style={mainDiv == "home" ? { display: "block" } : { display: "none" }}>
						{/* <span className="myButton" style={{ display: "block" }}
							onClick={() => chooseEffect()}
						>If you think you can</span> */}

						<div className={firstAnimation}
							style={{ display: visible }}
						>testing animation</div>

						<div className="brainContainer" id="brainContainer">
							<img src="https://cdn.pixabay.com/photo/2017/03/15/17/22/brain-2146817_1280.png"
								className="moveBrain1 finalBrain" id="mainBrain"
							/>
							{/* <div className="testButton px-3 py-1 fs-5 text-center"
								onClick={() => {
									setFirstAnimation("testAnimation1");
									setVisible("block");
									getPositionXY(this)
								}}
							>Get X,Y</div> */}
							<div className="mt-3 fs-5 ms-5 arrowBox arrow"
								onMouseEnter={() => setArrow("")}
								onMouseLeave={() => setArrow("fa-beat-fade")}
								onClick={() => myMove()}
							>
								<i className={`fa-solid fa-arrow-right fs-1 ${arrow}`}></i>

							</div>
							<p className="type1 typedOut typedOut2 typePos1">Connecting ideas with reality</p>
							{/* <p className="type2 typedOut typePos2">Believe it</p>
							<p className="type3 typedOut typePos3">Create it</p> */}


						</div>

						{/* <div className="light"></div> */}

					</div>

					{/* Render the showcase div below  */}

					<div className="col"
						style={mainDiv == "showcase" ? { display: "block" } : { display: "none" }}>
						<div className={`text-white fs-1 animate__animated ${effect} mt-4 ms-5`}
						>
							Project Showcase!
						</div>
						<div className="mt-3 fs-5 ms-5">
							<span className="myButton"
								onClick={() => chooseEffect()}
							>In/out!</span>
						</div>
					</div>

					{/* Render the resume div below  */}

					<div className="col"
						style={mainDiv == "resume" ? { display: "block" } : { display: "none" }}>
						<div className={`text-white fs-1 animate__animated ${effect} mt-4 ms-5`}
						>
							Resume!
						</div>
						<div className="mt-3 fs-5 ms-5">
							<span className="myButton"
								onClick={() => chooseEffect()}
							>In/out!</span>
						</div>
					</div>

					{/* Render the services div below  */}

					<div className="col"
						style={mainDiv == "services" ? { display: "block" } : { display: "none" }}>
						<div className={`text-white fs-1 animate__animated ${effect} mt-4 ms-5`}
						>
							Services!
						</div>
						<div className="mt-3 fs-5 ms-5">
							<span className="myButton"
								onClick={() => chooseEffect()}
							>In/out!</span>
						</div>
					</div>

					{/* Render the repositories div below  */}

					<div className="col"
						style={mainDiv == "repositories" ? { display: "block" } : { display: "none" }}>
						<div className={`text-white fs-1 animate__animated ${effect} mt-4 ms-5`}
						>
							Repositories!
						</div>
						<div className="mt-3 fs-5 ms-5">
							<span className="myButton"
								onClick={() => chooseEffect()}
							>In/out!</span>
						</div>
					</div>

					{/* Render the contact div below  */}

					<div className="col"
						style={mainDiv == "contact" ? { display: "block" } : { display: "none" }}>
						<div className={`text-white fs-1 animate__animated ${effect} mt-4 ms-5`}
						>
							Contact!
						</div>
						<div className="mt-3 fs-5 ms-5">
							<span className="myButton"
								onClick={() => chooseEffect()}
							>In/out!</span>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};
