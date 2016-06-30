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

	getInitialState: function () {
	    return {
	        author: {id: "", firstName: "", lastName: ""},
	        errors: {}
	    };
	},

	isFormValid: function() {
		var isValid = true;
		this.state.errors = {};

		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = "First name should contain at least 3 symbols";
			isValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = "Last name should contain at least 3 symbols";
			isValid = false;
		}

		this.setState({errors: this.state.errors});

		return isValid;
	},

	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	saveAuthor: function(event) {
		event.preventDefault();
<<<<<<< HEAD

		if ( this.isFormValid() ) {
			console.log("valid");
			AuthorApi.saveAuthor(this.state.author);
		}
=======
		AuthorApi.saveAuthor(this.state.author);
		toastr.success("Author saved.");
		this.transitionTo("authors");
>>>>>>> de4a49b89aa3edb970ad5f7e56a08205273f7195
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