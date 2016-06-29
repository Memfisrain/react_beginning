"use strict";

var React = require("react");
var Link = require("react-router").Link;

var notFoundPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page not found</h1>
				<p>Whoops! Sorry, there is nothing to show</p>
				<p><Link to="app">Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = notFoundPage;