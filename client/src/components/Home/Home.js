import React, { Component } from "react";
import classes from "./Home.module.css";

import EmailForm from "../EmailForm/EmailForm";

class Home extends Component {
	render() {
		return (
			<div className={classes.Home}>
				<div className={classes.LeftCol}>
					<h1>
						We <span>Scale</span>
					</h1>
					<h2>Impactful Ideas & Ventures Accross the Globe</h2>
					<h3>
						WE ARE A GLOBAL NETWORK FOR BUSINESS LEADERS, DATA SCIENTISTS & SOFTWARE ENGINEERS.
					</h3>
					<EmailForm />
				</div>
				<div className={classes.RightCol} />
			</div>
		);
	}
}

export default Home;
