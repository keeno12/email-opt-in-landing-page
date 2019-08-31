import React from "react";
import classes from "./NavigationItemsLeft.module.css";
import { NavLink } from "react-router-dom";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationItemsLeft = props => (
	<ul className={classes.NavigationItemsLeft} onClick={props.clicked}>
		<NavigationItem clicked={props.clicked}>
			<a href="https://medium.com/future-vision" className={classes.NavigationItems}>
				The Journal
			</a>
		</NavigationItem>
		<NavigationItem>
			<NavLink to="/" exact activeClassName={classes.Active}>
				Home
			</NavLink>
		</NavigationItem>
	</ul>
);

export default navigationItemsLeft;
