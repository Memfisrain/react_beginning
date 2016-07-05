"use strict";

var React = require("react");
var CourseForm = require("./courseForm");
var CoursesStore = require("../../stores/coursesStore");
var CoursesActions = require("../../actions/coursesActions");
var Router = require("react-router");
var toastr = require("toastr");

var AuthorStore = require("../../stores/authorStore");
var _authors = [];

var ManageCoursesPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      course: {id: "", title: "", watchHref: "", author: {id: "", name: ""}, length: "", category: ""},
      errors: {}
    };
  },

  componentWillMount: function() {
    if (this.props.params.id) {
      this.setState( {course: CoursesStore.getCourseById(this.props.params.id)} );
    }

    _authors = AuthorStore.getAllAuthors();
  },

  setCourseState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    
    if (field === "author") {
      this.state.course[field].name = value;
    } else {
      this.state.course[field] = value;
    }

    this.setState({course: this.state.course});
  },

  saveCourse: function(event) {
    event.preventDefault();

    if (this.isFormValid()) {
      var course = this.state.course;

      if (course.id) {
        CoursesActions.editCourse(course);
      } else {
        CoursesActions.addCourse(course);
      }

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
          errors={this.state.errors}
          authors={_authors} />
      </div>
    );
  }
});

module.exports = ManageCoursesPage;