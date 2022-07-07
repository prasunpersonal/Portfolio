import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll';
import Typed from 'typed.js';

export const Sidebar = () => {
	const [expand, setExpand] = useState(false)

	const el = useRef();
	useEffect(() => {
		var typed = new Typed(el.current, {
			strings: ["Android Developer", "Web Developer", "Full-Stack Developer"],
			typeSpeed: 65,
			backSpeed: 65,
			loop: true,
			cursorChar: '_'
		});

		typed.start();
		return () => {
			typed.destroy();
		};
	}, []);


	return (
		<div className="sidebar">
			<header className={expand ? "expand" : ""}>
				<div className="user">
					<img src="./dp.jpg" alt='Profile' />
					<h1>Prasun Sarkar</h1>
					<p><span ref={el}></span></p>

				</div>
				<nav className="top_nav">
					<ul className="main_menu" id="main_menu">
						<Link className="main-menu-item" activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link>
						<Link className="main-menu-item" activeClass="active" to="about" spy={true} smooth={true} duration={500}>About Me</Link>
						<Link className="main-menu-item" activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
						<Link className="main-menu-item" activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
						<Link className="main-menu-item" activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>Contact Me</Link>
					</ul>
				</nav>
			</header>
			<div id="main-menu-bar" onClick={() => setExpand(!expand)}>
				<i className={expand ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
			</div>
		</div>
	)
}