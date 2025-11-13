import React, { useState, useEffect } from "react";
import logo from "../images/Black_White_Minimalist_Initials_Monogram_Jewelry_Logo-removebg-preview.png";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [scrollPoint, setScrollPoint] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrollPoint(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// toggle handler — uses functional update to avoid stale state
	const handleToggle = () => {
		console.log("menu toggle"); // for quick debug; remove when confirmed working
		setMenuOpen((prev) => !prev);
	};

	// close menu when clicking a link or when resizing above lg
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024 && menuOpen) setMenuOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [menuOpen]);

	return (
		<header
			className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-0 text-lg font-medium transition-all duration-300 z-50
        ${
					scrollPoint > 50
						? "bg-black/80 text-white backdrop-blur-md shadow-md"
						: "bg-transparent text-white"
				}`}>
			{/* Logo */}
			<div className='flex items-center w-1/3 h-fit'>
				<img
					src={logo}
					alt='Logo'
					className={`h-[60px]  p-0 w-[60px] md:h-[120px] md:w-[120px] transition-all duration-500 ${
						scrollPoint > 50 ? "scale-120" : "scale-100"
					}`}
					style={{
						filter: "invert(1) brightness(2)",
						WebkitFilter: "invert(1) brightness(2)",
					}}
				/>
			</div>

			{/* Desktop Menu */}
			<nav className='hidden lg:flex w-full justify-end'>
				<ul className='flex gap-8 [&>li]:cursor-pointer [&>li]:hover:text-green-500 transition text-[15px]'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/consulting'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Consulting
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/invite'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Invite Me
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/partner'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Partner With Us
						</NavLink>
					</li>
				</ul>
			</nav>

			{/* Mobile Menu Button */}
			<div className='lg:hidden flex items-center justify-end w-1/3'>
				<button
					type='button'
					onClick={handleToggle}
					aria-label='Toggle menu'
					className='text-3xl text-white z-60'>
					<FaBars />
				</button>
			</div>

			{/* Mobile Sliding Panel (rendered always, slides in/out) */}
			<div
				// keep this panel hidden on lg+ via lg:hidden; slide using translate-x
				className={`fixed top-0 right-0 h-dvh w-11/12 max-w-xs bg-black/95 backdrop-blur-md py-8 px-6 z-50 transform transition-transform duration-300 ease-in-out lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
				style={{ pointerEvents: menuOpen ? "auto" : "none" }}>
				<button
					type='button'
					onClick={handleToggle}
					className='mb-6 text-white text-3xl'
					aria-label='Close menu'>
					✕
				</button>

				<ul className='flex flex-col gap-6 text-white text-lg '>
					<li onClick={() => setMenuOpen(false)}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Home
						</NavLink>
					</li>

					<li onClick={() => setMenuOpen(false)}>
						<NavLink
							to='/consulting'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Consulting
						</NavLink>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<NavLink
							to='/invite'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Invite Me
						</NavLink>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<NavLink
							to='/partner'
							className={({ isActive }) =>
								isActive
									? "text-green-500 font-bold"
									: "text-white hover:text-green-500"
							}>
							Partner With Us
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
