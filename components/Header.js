import React, { Component, PropTypes } from 'react'


export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">

					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Skylander Collector</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Checklist</a></li>
							<li><a href="#">Characters</a></li>
							<li><a href="#">Portals</a></li>
							<li><a href="#">About</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)	
	}
}