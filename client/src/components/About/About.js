import React, { Component } from "react";
import classes from "./About.module.css";

import EmailForm from "../EmailForm/EmailForm";

class About extends Component {
	render() {
		return (
			<div className={classes.About}>
				<div className={classes.LeftCol}>
					<h1>
						About Us: <span>We Scale Impactful Ideas & Ventures Worldwide</span>
					</h1>
					<h3>
						WE ARE A GLOBAL NETWORK FOR BUSINESS LEADERS, DATA SCIENTISTS & SOFTWARE ENGINEERS.
					</h3>
				</div>
				<div className={classes.RightCol}/>
			</div>
		);
	}
}

export default About;

