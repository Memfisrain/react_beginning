"use strict";

var React = require("react");
var CourseForm = require("./courseForm");
var CoursesStore = require("../../stores/coursesStore");
var CoursesActions = require("../../actions/coursesActions");
var Router = require("react-router");
var toastr = require("toastr");

var ManageCoursesPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      course: {id: "", title: "", watchHref: "", author: {}, length: "", category: ""},
      errors: {}
    };
  },

  componentWillMount: function() {
    this.setState( {course: CoursesStore.getCourseById(this.props.params.id)} );
  },

  setCourseState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.course[field] = value;
    this.setState({course: this.state.course});
  },

  saveCourse: function(event) {
    event.preventDefault();

    if (this.isFormValid()) {
      var course = this.state.course;
      CoursesActions.editCourse(course);
      toastr.success("Course is edited");
      this.transitionTo("courses");
    }
  },

  isFormValid: function() {
    var isValid = true;
    this.state.errors = {};

    if (this.state.course.title.length < 3) {
      this.state.errors.title = "Title field should contain at least 3 characters";
      isValid = false;
    }

    if (this.state.course.author.name.length < 3) {
      this.state.errors.author = "Author field should contain at least 3 characters";
      isValid = false;
    }

    if (this.state.course.category.length < 3) {
      this.state.errors.category = "Category field should contain at least 3 characters";
      isValid = false;
    }

    if (this.state.course.length.length < 3) {
      this.state.errors.length = "Title field should contain at least 3 characters";
      isValid = false;
    }

    this.setState({errors: this.state.errors});

    return isValid;
  },

  render: function () {
    return (
      <div>
        <h1>Edit Course</h1>
        <CourseForm course={this.state.course}
          onChange={this.setCourseState}
          onSave={this.saveCourse}
          errors={this.state.errors} />
      </div>
    );
  }
});

module.exports = ManageCoursesPage;