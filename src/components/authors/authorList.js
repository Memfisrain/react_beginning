"use strict";

var React = require("react");
var Link = require("react-router").Link;
var AuthorActions = require("../../actionS/authorActions");
var toastr = require("toastr");

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	deleteAuthor: function(id, event) {
		event.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success("Author deleted.")
	},

	render: function() {
		function createAuthorRow(author) {
			return (
				<tr key={author.id}>
					<td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
					<td>
						<Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link>
					</td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		}

		return (
			<div>
				<table className="table">
					<thead>
						<th></th>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		)
	}
});

module.exports = AuthorList;