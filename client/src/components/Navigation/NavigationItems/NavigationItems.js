import React from "react";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemDropDown from "./NavigationItemDropDown/NavigationItemDropDown";

const navigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem clicked={props.clicked}>
			<NavLink to="/about-us" exact activeClassName={classes.Active}>
				About
			</NavLink>
		</NavigationItem>
		{/* <NavigationItemDropDown>Get in touch</NavigationItemDropDown> */}
		<NavigationItem clicked={props.clicked}>
			<a href="http://2020futurevision.com" className={classes.NavigationItems}>
				San Francisco
			</a>
		</NavigationItem>
		<NavigationItem clicked={props.clicked}>
			<a href="https://davos-apartments.com" className={classes.NavigationItems}>
				Davos
			</a>
		</NavigationItem>
	</ul>
);

export default navigationItems;
