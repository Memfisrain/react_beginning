"use strict";

var React = require("react");
var Link = require("react-router").Link;
var CoursesActions = require("../../actions/coursesActions");

var CoursesList = React.createClass({
  deleteCourse: function (courseId, event) {
    event.preventDefault();
    CoursesActions.removeCourse(courseId);
  },

  render: function () {
    function createCourseRow(course) {
      return (
        <tr key={course.id}>
          <td>
            <a href={course.watchHref} target="_blank">Watch</a>
          </td>
          <td>
            <a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a>
          </td>
          <td>
            <Link to="editCourse" params={{id: course.id}}>{course.title}</Link>
          </td>
          <td>{course.author.name}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    }

    return (
      <table className="table">
        <thead>
          <th></th>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </thead>
        <tbody>
          {this.props.courses.map(createCourseRow, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = CoursesList;