"use strict";

var React = require("react");
var Link = require("react-router").Link;
var CoursesList = require("./coursesList");
var CoursesStore = require("../../stores/coursesStore");
var CoursesActions = require("../../actions/coursesActions");

var CoursesPage = React.createClass({
  getInitialState: function () {
    return {
      courses: []
    };
  },

  componentWillMount: function () {
    this.setState({
      courses: CoursesStore.getAllCourses()
    });
  },

  removeCourse: function (courseId, event) {
    event.preventDefault();
    CoursesActions.removeCourse(courseId);
    this.setState({courses: CoursesStore.getAllCourses()});
  },

  render: function () {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
        <CoursesList courses={this.state.courses}
                     onRemove={this.removeCourse}/>
      </div>
    );
  }
});

module.exports = CoursesPage;