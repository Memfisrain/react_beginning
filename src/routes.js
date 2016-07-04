"use strict";

var React = require("react");

var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require("./components/app")}>
		<DefaultRoute handler={require("./components/homepage")} />
		<Route name="authors" handler={require("./components/authors/authorpage")} />
		<Route name="addAuthor" path="author" handler={require("./components/authors/manageAuthorPage")} />
		<Route name="manageAuthor" path="author/:id" handler={require("./components/authors/manageAuthorPage")} />
		<Route name="about" handler={require("./components/about/aboutpage")} />
		<Route name="courses" handler={require("./components/courses/coursespage")} />
		<Route name="addCourse" handler={require("./components/courses/manageCoursesPage")} />
		<Route name="editCourse" path="courses/:id" handler={require("./components/courses/manageCoursesPage")} />
		<NotFoundRoute handler={require("./components/notFoundPage")} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthors" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;