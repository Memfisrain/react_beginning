"use strict";

var React = require("react");
var Input = require("../common/textInput");

var AuthorForm = React.createClass({
	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>
		
				<Input name="firstName"
					label="First name"
					value={this.props.author.firstName}
					onChange={this.props.onChange} />
				
				<Input name="lastName"
					label="Last name"
					value={this.props.author.lastName}
					onChange={this.props.onChange} />

				<input type="submit" className="btn btn-primary" value="create" onClick={this.props.onSave} />
			</form>
		)
	}
});

module.exports = AuthorForm;