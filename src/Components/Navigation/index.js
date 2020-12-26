import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as Scroll } from "react-scroll";

const NavWrapper = styled.nav`
	align-items: center;
	background: ${({ scrollValue }) =>
		scrollValue ? "#1D2228" : "transparent"}; // eerie black
	display: flex;
	font-size: 1rem;
	height: 80px;
	margin-top: -80px;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const Container = styled.div`
	display: flex;
	height: 80px;
	justify-content: space-between;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
`;

const LogoRouter = styled(LinkRouter)`
	color: white;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 60px;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;

	@media screen and (max-width: 780px) {
		margin-top: -10px;
		font-size: 24px;
	}
`;

const BurgerButton = styled.div`
	display: none;

	@media screen and (max-width: 780px) {
		color: #f58549; // mango tango
		cursor: pointer;
		display: block;
		font-size: 1.8rem;
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(-100%, 60%);
	}
`;

const BurgerMenu = styled.ul`
	align-items: center;
	display: flex;
	list-style: none;
	margin-right: -24px;
	text-align: center;

	@media screen and (max-width: 780px) {
		display: none;
	}
`;

const BurgerItem = styled.li`
	height: 80px;
`;

const BurgerLinkScroll = styled(LinkScroll)`
	align-items: center;
	color: #e1e2e2; // platinum
	cursor: pointer;
	display: flex;
	height: 100%;
	padding: 0 1rem;
	text-decoration: none;

	&.active {
		border-bottom: 3px solid #ffffff; // random white
	}
`;

const Nav = ({ toggle }) => {
	const [scrollValue, setScrollValue] = useState(false);

	const changeScroll = () => {
		if (window.scrollY >= 80) {
			setScrollValue(true);
		} else {
			setScrollValue(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeScroll);
	}, []);

	const scrollHome = () => {
		Scroll.scrollToTop();
	};

	return (
		<IconContext.Provider value={{ color: "#1D2228" }}>
			<NavWrapper scrollValue={scrollValue}>
				<Container>
					<LogoRouter to='/' onClick={scrollHome}>
						Logo
					</LogoRouter>
					<BurgerButton onClick={toggle}>
						<FaBars />
					</BurgerButton>
					<BurgerMenu>
						<BurgerItem>
							<BurgerLinkScroll to='' exact='true' smooth={true} duration={500}>
								First Link
							</BurgerLinkScroll>
						</BurgerItem>
						<BurgerItem>
							<BurgerLinkScroll to='' exact='true' smooth={true} duration={500}>
								First Link
							</BurgerLinkScroll>
						</BurgerItem>
						<BurgerItem>
							<BurgerLinkScroll to='' exact='true' smooth={true} duration={500}>
								First Link
							</BurgerLinkScroll>
						</BurgerItem>
					</BurgerMenu>
				</Container>
			</NavWrapper>
		</IconContext.Provider>
	);
};

export default Nav;
