"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var ActionsTypes = require("../constants/actionsTypes"); 

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			type: ActionsTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

	editAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			type: ActionsTypes.EDIT_AUTHOR,
			author: newAuthor
		})
	},

	deleteAuthor: function(authorId) {
		AuthorApi.deleteAuthor(authorId);

		Dispatcher.dispatch({
			type: ActionsTypes.DELETE_AUTHOR,
			authorId: authorId
		})
	}
};

module.exports = AuthorActions;