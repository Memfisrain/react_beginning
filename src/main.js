$ = jQuery = require('jquery');
var React = require("react");
var Router = require("react-router");
var routes = require("./routes");
var initActions = require("./actions/initializeActions");

initActions.initApp();

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById("app"));
});
