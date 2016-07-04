"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionsTypes = require("../constants/actionsTypes");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");
var CHANGE_EVENT = "change";

var _authors = [];

var AuthorStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllAuthors: function() {
		return _authors;
	},

	getAuthorById: function(authorId) {
		return _.find(_authors, {id: authorId})
	},

	editAuthor: function(authorData) {
		var author = _.find(_authors, {id: authorData.id});
		author.firstName = authorData.firstName;
		author.lastName = authorData.lastName;
	},

	deleteAuthor: function(authorId) {
		_.remove(_authors, {id: authorId});
	}
});

Dispatcher.register(function(action) {
	switch(action.type) {
		case ActionsTypes.INITIALIZE:
			_authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;

		case ActionsTypes.CREATE_AUTHOR:
			_authors.push(action.author);
			AuthorStore.emitChange();
			break;

		case ActionsTypes.EDIT_AUTHOR:
			AuthorStore.editAuthor(action.author);
			AuthorStore.emitChange();
			break;

		case ActionsTypes.DELETE_AUTHOR:
			AuthorStore.deleteAuthor(action.authorId);
			AuthorStore.emitChange();
			break;
	}
});

module.exports = AuthorStore;