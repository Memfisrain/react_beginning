"use strict";

var React = require("react");
var CourseForm = require("./courseForm");
var CoursesStore = require("../../stores/coursesStore");
var Router = require("react-router");

var ManageCoursesPage = React.createClass({
  getInitialState: function() {
    return {
      course: {id: "", title: "", watchHref: "", author: {}, length: "", category: ""}
    };
  },

  componentWillMount: function() {
    this.setState( {course: CoursesStore.getCourseById(this.props.params.id)} );
  },

  render: function () {
    return (
      <div>
        <h1>Edit Course</h1>
        <CourseForm course={this.state.course}/>
      </div>
    );
  }
});

module.exports = ManageCoursesPage;