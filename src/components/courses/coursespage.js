"use strict";

var React = require("react");
var Link = require("react-router").Link;
var CoursesList = require("./coursesList");
var CoursesStore = require("../../stores/coursesStore");

var _courses = [];

var CoursesPage = React.createClass({
  componentWillMount: function() {
    _courses = CoursesStore.getAllCourses();
  },

  render: function () {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
        <CoursesList courses={_courses}/>
      </div>
    );
  }
});

module.exports = CoursesPage;