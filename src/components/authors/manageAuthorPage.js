"use strict";

var React = require("react");
var AuthorForm = require("./authorForm");
var AuthorApi = require("../../api/authorApi");
var Router = require("react-router");
var toastr = require("toastr");

var manageAuthor = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm("Are you really want to leave this page?")) {
				transition.abort();
			}
		}
	},

	getInitialState: function () {
	    return {
	        author: {id: "", firstName: "", lastName: ""},
					errors: {},
					dirty: false
	    };
	},

	authorFormIsValid: function() {
		var isValid = true;
		this.state.errors = {};

		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = "This field should contain at least 3 characters";
			isValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = "This field should contain at least 3 characters";
			isValid = false;
		}

		this.setState({errors: this.state.errors});

		return isValid;
	},

	setAuthorState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	saveAuthor: function(event) {
		event.preventDefault();

		if (this.authorFormIsValid()) {
			AuthorApi.saveAuthor(this.state.author);
			toastr.success("Author saved.");
			this.transitionTo("authors");
		} else {
			toastr.error("Check out your entered data");
		}
	},

	render: function() {
		return (
				<AuthorForm 
					author={this.state.author}
					onChange={this.setAuthorState}
					onSave={this.saveAuthor}
					errors={this.state.errors} />
		);
	}
});

module.exports = manageAuthor;