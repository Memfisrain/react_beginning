"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionsTypes = require("../constants/actionsTypes");
var AuthorApi = require("../api/authorApi");

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			type: ActionsTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;

