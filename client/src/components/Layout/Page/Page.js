import React, { Component } from "react";
import classes from "./Page.module.css";

import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Home from "../../Home/Home";
import ThankYou from "../../ThankYou/ThankYou";
import About from "../../About/About";

class Page extends Component {
	render() {
		return (
			<div id={"page"} className={classes.Page}>
				<div style={{marginBottom: '65px'}}/>
				<Route exact path="/" component={Home} />
				<Route exact path="/thank-you" component={ThankYou} />
				<Route exact path="/about" component={About} />
			</div>
		);
	}
}

export default withRouter(Page);
