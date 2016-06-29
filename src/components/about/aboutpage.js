"use strict";

var React = require("react");

var About = React.createClass({
	statics: {
		/*willTransitionTo: function(transition, params, query, callback) {
			if (confirm("Are you sure you want to go this page?")) {
				callback();
			} else {
				transition.about();
			}
		},

		willTransitionFrom: function(transition, component) {
			if (!confirm("Are you sure you want to leave this exciting page?")) {
				transition.about();
			}
		}*/
	},
	render: function() {
		return (
				<div>
					<h1>About</h1>
					<p>This application uses the following technologies:
						<ul>
							<li>React</li>
							<li>React Router</li>
							<li>Gulp</li>
							<li>Browserify</li>
							<li>Node</li>
							<li>Flux</li>
						</ul>
					</p>
				</div>
			);
	}
});

module.exports = About;